import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './DashboardScreenStyles'; // Importa os estilos
import Icon from 'react-native-vector-icons/Ionicons'; // Importa um conjunto de ícones (ex: Ionicons)
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'; // Importa useRoute e RouteProp
import { StackNavigationProp } from '@react-navigation/stack'; // Importa a tipagem para navegação
import { RootStackParamList } from '../../navigation/types'; // Importa a tipagem centralizada

// Define a tipagem para a propriedade navigation e route
type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;
type DashboardScreenRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;

const DashboardScreen = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>(); // Obtém a instância de navegação
  const route = useRoute<DashboardScreenRouteProp>(); // Obtém os parâmetros da rota
  
  // Acessa userData de forma segura, verificando se route.params existe
  const userData = route.params?.userData; 

  // Funções de navegação
  const handleProfilePress = () => {
    console.log('Navegando para Perfil');
    navigation.navigate('Profile', { userData });
  };

  const handleNotificationsPress = () => {
    console.log('Navegando para Notificações');
    navigation.navigate('Notification');
  };
  const handleCalendarPress = () => {
    console.log('Navegando para Agenda');
    navigation.navigate('Calendar'); // Navega para a tela de Agenda
  };
  const handleHomePress = () => console.log('Já está no Dashboard');
  const handleChatPress = () => {
    console.log('Navegando para a lista de Chats');
    navigation.navigate('ChatList'); // Navega para a tela de lista de chats
  };
  const handleMenuPress = () => console.log('Menu');
  const handleSettingsPress = () => console.log('Configurações');
  const handleSearchPress = () => console.log('Buscar');

  // Renderiza a tela somente quando os dados estiverem carregados
  if (!userData) {
    // Pode adicionar um indicador de loading ou uma mensagem de erro aqui, se necessário
    console.log('userData não disponível, renderizando nulo ou indicador de loading');
    return null; // Ou um componente de loading/erro
  } // Adicionado para garantir que userData exista

  return (
    <View style={styles.container}> {/* Envolve o contêiner principal com SafeAreaView */}
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress}>
          <Icon name="menu" size={30} color="#1F1F1F" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettingsPress}>
           <Icon name="settings-outline" size={30} color="#1F1F1F" />
        </TouchableOpacity>
      </View>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Busque por médicos,clínicas ou especialidades"
          placeholderTextColor="#888"
        />
        <Icon name="search" size={20} style={styles.searchIcon} />
      </View>

      {/* Imagem central */}
      <View style={styles.centralImageContainer}>
         <Image source={require('../../../assets/image/Capturar.png')} style={styles.centralImage} />
      </View>

      {/* Texto abaixo da imagem */}
      <Text style={styles.médecinsText}>Os médicos mais próximos de você!</Text>

      {/* Barra de navegação inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={handleNotificationsPress}>
          <Icon name="notifications-outline" size={25} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCalendarPress}>
          <Icon name="calendar-outline" size={25} style={styles.navIcon} />
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

export default DashboardScreen; 