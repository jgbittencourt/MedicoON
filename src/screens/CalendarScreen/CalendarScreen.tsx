import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../navigation/types';

type CalendarScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Calendar'>;

// Placeholder para um item da agenda
interface AgendaItem {
  id: string;
  icon: string;
  text: string;
  time?: string;
  status?: 'pending' | 'confirmed' | 'completed';
}

const CalendarScreen = () => {
  const navigation = useNavigation<CalendarScreenNavigationProp>();

  // Dados placeholder para a agenda
  const agendaData: AgendaItem[] = [
    { 
      id: '1', 
      icon: 'calendar', 
      text: 'Consulta com Dr. João', 
      time: '20/02 às 10h',
      status: 'confirmed'
    },
    { 
      id: '2', 
      icon: 'medkit', 
      text: 'Tomar remédio', 
      time: 'Hoje às 15h',
      status: 'pending'
    },
    { 
      id: '3', 
      icon: 'document', 
      text: 'Retorno com Dra. Mariana', 
      time: '28/02 às 14h',
      status: 'pending'
    },
    { 
      id: '4', 
      icon: 'add-circle', 
      text: 'Agendar nova consulta', 
      status: 'pending'
    },
  ];

  const renderAgendaItem = ({ item }: { item: AgendaItem }) => (
    <TouchableOpacity style={[styles.agendaItem, item.status ? styles[`${item.status}Status`] : null]}>
      <View style={styles.iconContainer}>
        <Icon name={item.icon} size={24} color="#fff" />
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemText}>{item.text}</Text>
        {item.time && <Text style={styles.itemTime}>{item.time}</Text>}
      </View>
      <Icon name="chevron-forward" size={24} color="#666" />
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
        <Text style={styles.headerTitle}>Minha Agenda</Text>
        <TouchableOpacity onPress={handleSettingsPress}>
          <Icon name="settings-outline" size={30} color="#1F1F1F" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {/* Agenda List */}
        <FlatList
          data={agendaData}
          renderItem={renderAgendaItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.agendaList}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Icon name="calendar-outline" size={50} color="#666" />
              <Text style={styles.emptyText}>Nenhum compromisso agendado</Text>
            </View>
          }
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
  agendaList: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  agendaItem: {
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
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  itemContent: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F1F1F',
    marginBottom: 4,
  },
  itemTime: {
    fontSize: 14,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  pendingStatus: {
    borderLeftWidth: 4,
    borderLeftColor: '#FFA500',
  },
  confirmedStatus: {
    borderLeftWidth: 4,
    borderLeftColor: '#34C759',
  },
  completedStatus: {
    borderLeftWidth: 4,
    borderLeftColor: '#666',
    opacity: 0.7,
  },
});

export default CalendarScreen; 