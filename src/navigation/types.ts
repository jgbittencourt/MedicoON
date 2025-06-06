import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  MainApp: NavigatorScreenParams<TabParamList>;
  ChatScreen: { chatId: string };
};

export type TabParamList = {
  Dashboard: undefined;
  Calendar: undefined;
  Chat: undefined;
  Notifications: undefined;
  Profile: undefined;
}; 