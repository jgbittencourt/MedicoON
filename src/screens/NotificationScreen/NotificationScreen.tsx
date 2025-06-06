import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import styles from './NotificationScreenStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { api } from '../../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TabParamList } from '../../navigation/types';

type NotificationScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Notifications'>;

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'appointment' | 'reminder' | 'system';
  read: boolean;
  createdAt: string;
}

const NotificationScreen = () => {
  const navigation = useNavigation<NotificationScreenNavigationProp>();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      const response = await api.get('/notifications', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setNotifications(response.data);
    } catch (error) {
      console.error('Erro ao buscar notificações:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchNotifications();
  };

  const markAsRead = async (notificationId: string) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) return;

      await api.put(`/notifications/${notificationId}/read`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setNotifications(notifications.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      ));
    } catch (error) {
      console.error('Erro ao marcar notificação como lida:', error);
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'appointment':
        return 'calendar';
      case 'reminder':
        return 'alarm';
      case 'system':
        return 'information-circle';
      default:
        return 'notifications';
    }
  };

  const renderNotificationItem = ({ item }: { item: Notification }) => (
    <TouchableOpacity
      style={[styles.notificationItem, !item.read && styles.unreadNotification]}
      onPress={() => markAsRead(item.id)}
    >
      <Icon
        name={getNotificationIcon(item.type)}
        size={24}
        color={item.read ? '#666' : '#007bff'}
        style={styles.notificationIcon}
      />
      <View style={styles.notificationContent}>
        <Text style={[styles.notificationTitle, !item.read && styles.unreadText]}>
          {item.title}
        </Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>
          {new Date(item.createdAt).toLocaleDateString('pt-BR')}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const handleMenuPress = () => console.log('Menu pressed');
  const handleSettingsPress = () => console.log('Settings pressed');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress}>
          <Icon name="menu" size={30} color="#1F1F1F" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
           <Icon name="notifications" size={20} color="#1F1F1F" />
           <Text style={styles.titleText}>Notificações</Text>
           <Icon name="notifications" size={20} color="#1F1F1F" />
        </View>
        <TouchableOpacity onPress={handleSettingsPress}>
          <Icon name="settings-outline" size={30} color="#1F1F1F" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.notificationsList}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#007bff']}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Icon name="notifications-off" size={50} color="#666" />
            <Text style={styles.emptyText}>Nenhuma notificação</Text>
          </View>
        }
      />
    </View>
  );
};

export default NotificationScreen; 