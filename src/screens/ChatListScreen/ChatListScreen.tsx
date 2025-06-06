import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../navigation/types';

type ChatListScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Chat'>;

// Placeholder para um item da lista de conversas
interface ChatItem {
  id: string;
  contactName: string;
  lastMessage: string;
  time: string;
  isOnline?: boolean;
  unreadCount?: number;
}

const ChatListScreen = () => {
  const navigation = useNavigation<ChatListScreenNavigationProp>();

  // Placeholder data
  const chatData: ChatItem[] = [
    { 
      id: '1', 
      contactName: 'Secretaria Clínica\nSaúde Viva', 
      lastMessage: 'Seu exame está pronto para retirada.', 
      time: 'hoje', 
      isOnline: true,
      unreadCount: 4
    },
    { 
      id: '2', 
      contactName: 'Dr. João Silva\nCardiologista', 
      lastMessage: 'Olá, posso ajudar com alguma dúvida?', 
      time: 'há 2h',
      unreadCount: 4
    },
    { 
      id: '3', 
      contactName: 'Dra. Mariana Lopes\nClínica Geral', 
      lastMessage: 'Consulta confirmada para amanhã às 10h.', 
      time: 'ontem' 
    },
  ];

  const renderChatItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity 
      style={[styles.chatItem, item.unreadCount ? styles.unreadChatItem : null]} 
      onPress={() => navigation.navigate('Chat')}
    >
      <View style={styles.avatarContainer}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>
            {item.contactName.split(' ').map(n => n[0]).join('').toUpperCase()}
          </Text>
        </View>
        {item.isOnline && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={[styles.contactName, item.unreadCount ? styles.unreadText : null]}>
            {item.contactName}
          </Text>
          <Text style={[styles.chatTime, item.unreadCount ? styles.unreadText : null]}>
            {item.time}
          </Text>
        </View>
        <View style={styles.messageContainer}>
          <Text 
            style={[styles.lastMessage, item.unreadCount ? styles.unreadText : null]} 
            numberOfLines={1}
          >
            {item.lastMessage}
          </Text>
          {item.unreadCount ? (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadCount}>{item.unreadCount}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleMenuPress = () => console.log('Menu pressed');
  const handleSettingsPress = () => console.log('Settings pressed');
  const handleSearch = () => console.log('Search pressed');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress}>
          <Icon name="menu" size={30} color="#1F1F1F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mensagens</Text>
        <TouchableOpacity onPress={handleSettingsPress}>
          <Icon name="settings-outline" size={30} color="#1F1F1F" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar conversas..."
            placeholderTextColor="#888"
          />
        </View>

        {/* Chat List */}
        <FlatList
          data={chatData}
          renderItem={renderChatItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.chatList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F1F1F',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginHorizontal: 15,
    marginBottom: 30,
    paddingHorizontal: 20,
    height: 50,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchIcon: {
    marginRight: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1F1F1F',
    height: '100%',
  },
  chatList: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 18,
    marginBottom: 25,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  unreadChatItem: {
    backgroundColor: '#f0f8ff',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F1F1F',
    lineHeight: 22,
  },
  chatTime: {
    fontSize: 12,
    color: '#999',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    marginRight: 10,
  },
  onlineIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#34c759',
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: '#fff',
  },
  unreadBadge: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  unreadCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  unreadText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});

export default ChatListScreen; 