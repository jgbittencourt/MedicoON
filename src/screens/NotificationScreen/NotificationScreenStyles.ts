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
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 10,
  },
  notificationItem: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
  unreadNotification: {
    backgroundColor: '#eaf4ff',
    borderLeftWidth: 5,
    borderLeftColor: '#007bff',
  },
  notificationIcon: {
    fontSize: 32,
    color: '#007bff',
    marginRight: 16,
    marginTop: 2,
    alignSelf: 'flex-start',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 4,
  },
  unreadText: {
    color: '#007bff',
  },
  notificationMessage: {
    fontSize: 15,
    color: '#444',
    marginBottom: 6,
  },
  notificationTime: {
    fontSize: 12,
    color: '#b0b0b0',
    alignSelf: 'flex-end',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#62a0d2',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
  },
});

export default styles; 