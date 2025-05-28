import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

type CalendarScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Calendar'>;

// Placeholder para um item da agenda
interface AgendaItem {
  id: string;
  icon: string;
  text: string;
}

const CalendarScreen = () => {
  console.log('CalendarScreen component is rendering'); // Log para verificar se o componente renderiza
  const navigation = useNavigation<CalendarScreenNavigationProp>();

  // Dados placeholder para a agenda
  const agendaData: AgendaItem[] = [
    { id: '1', icon: 'calendar', text: 'Consultas: Ex.: "Consulta com Dr. João – 20/02 às 10h"' },
    { id: '2', icon: 'medkit', text: 'Lembretes de Medicação: Ex.: "Tomar remédio às 15h"' },
    { id: '3', icon: 'document', text: 'Retornos: Ex.: "Retorno com Dra. Mariana – 28/02"' },
    { id: '4', icon: 'add-circle', text: 'Agendamento Rápido: Botão direto para marcar consultas.' },
  ];

  console.log('Agenda data:', agendaData); // Log para verificar os dados da agenda

  const renderAgendaItem = ({ item }: { item: AgendaItem }) => {
    console.log('Rendering agenda item:', item); // Log para cada item renderizado
    return (
      <TouchableOpacity style={styles.agendaItem}>
        <Icon name={item.icon} size={20} color="#1F1F1F" style={styles.itemIcon} />
        <Text style={styles.itemText}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  const handleMenuPress = () => console.log('Menu pressed');
  const handleSettingsPress = () => console.log('Settings pressed');

    // Manipuladores de eventos para a barra de navegação inferior (placeholders)
  const handleNotificationsPress = () => console.log('Notificações');
  const handleCalendarPress = () => console.log('Calendário (atual)');
  const handleHomePress = () => console.log('Home');
  const handleChatPress = () => console.log('Chat');
  const handleProfilePress = () => console.log('Perfil');

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

      {/* Agenda List */}
      <FlatList
        data={agendaData}
        renderItem={renderAgendaItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.agendaList}
        ListEmptyComponent={<Text>Nenhum item na agenda.</Text>}
      />

       {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={handleNotificationsPress}>
          <Icon name="notifications-outline" size={25} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCalendarPress}> {/* Ícone de calendário, possivelmente destacado */}
          <Icon name="calendar" size={25} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHomePress}>
          <Icon name="home-outline" size={25} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChatPress}>
          <Icon name="chatbubbles-outline" size={25} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfilePress}>
          <Icon name="person-outline" size={25} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62a0d2', // Cor de fundo do seu app
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F1F1F',
  },
  agendaList: {
    paddingHorizontal: 15,
    paddingBottom: 80, // Espaço para a barra de navegação
  },
  agendaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  itemIcon: {
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    color: '#1F1F1F',
    flex: 1, // Permite que o texto ocupe o espaço restante
  },
   bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff', // Fundo branco para a barra de navegação inferior
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  navIcon: {
    fontSize: 25,
    color: '#000', // Cor dos ícones de navegação
  },
});

export default CalendarScreen; 