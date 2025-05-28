import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62a0d2', // Cor de fundo similar às outras telas
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40, // Espaço no topo para a barra de status
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // Fundo branco para o título
    borderRadius: 20, // Bordas arredondadas
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginLeft: 5,
    marginRight: 5,
  },
  notificationsList: {
    paddingHorizontal: 15,
    paddingBottom: 80, // Espaço para a barra de navegação
  },
  notificationItem: {
    backgroundColor: '#fff', // Fundo branco para cada item
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  unreadNotification: {
    backgroundColor: '#f0f8ff',
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
  },
  notificationIcon: {
    fontSize: 20,
    color: '#1F1F1F',
    marginRight: 10,
    marginTop: 2,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 4,
  },
  unreadText: {
    color: '#007bff',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
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
    color: '#000',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});

export default styles; 