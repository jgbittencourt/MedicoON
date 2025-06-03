import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

type ChatListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ChatList'>; // Usando 'ChatList'

// Placeholder para um item da lista de conversas
interface ChatItem {
  id: string;
  contactName: string;
  lastMessage: string;
  time: string;
  isOnline?: boolean;
}

const ChatListScreen = () => {
  const navigation = useNavigation<ChatListScreenNavigationProp>();

  // Placeholder data
  const chatData: ChatItem[] = [
    { id: '1', contactName: 'Secretaria Clínica Saúde Viva', lastMessage: 'Seu exame está pronto para retirada.', time: 'hoje', isOnline: true },
    { id: '2', contactName: 'Dr. João Silva - Cardiologista', lastMessage: 'Olá, posso ajudar com alguma dúvida?', time: 'há 2h' },
    { id: '3', contactName: 'Dra. Mariana Lopes - Clínica Geral', lastMessage: 'Consulta confirmada para amanhã às 10h.', time: 'ontem' },
    // Adicionar mais dados mockados aqui
  ];

  const renderChatItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('Chat', { chatId: item.id, contactName: item.contactName } as any)}> {/* Navega para a tela de Chat individual */}
      <View style={styles.avatarPlaceholder} /> {/* Placeholder para avatar */}
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.contactName}>{item.contactName}</Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={1}>{item.lastMessage}</Text>
      </View>
      {item.isOnline && <View style={styles.onlineIndicator} />}
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

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar conversas..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchIconContainer}>
           <Icon name="search" size={20} color="#1F1F1F" />
        </TouchableOpacity>
      </View>

      {/* Chat List */}
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatList}
      />
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
    marginBottom: 10,
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
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingRight: 10, // Espaço para o ícone
  },
   searchIconContainer: {
    paddingLeft: 10,
  },
  chatList: {
    paddingHorizontal: 15,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#ccc', // Cor de placeholder para avatar
    borderRadius: 20,
    marginRight: 15,
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F1F1F',
  },
  chatTime: {
    fontSize: 12,
    color: '#999',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
  onlineIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#34c759', // Verde para online
    marginLeft: 5,
  },
});

export default ChatListScreen; 