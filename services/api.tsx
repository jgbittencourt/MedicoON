import axios, { Axios } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
    baseURL: 'https://backend-trabalho-r04i.onrender.com',
    timeout: 60000, // Aumentando o timeout para 60 segundos
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Interceptor para adicionar o token em todas as requisições
api.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        } catch (error) {
            console.error('Erro ao configurar requisição:', error);
            return Promise.reject(error);
        }
    },
    (error) => {
        console.error('Erro no interceptor de requisição:', error);
        return Promise.reject(error);
    }
);

// Interceptor para tratar erros de resposta
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.code === 'ECONNABORTED') {
            console.error('A requisição excedeu o tempo limite');
            return Promise.reject(new Error('O servidor demorou muito para responder. Por favor, tente novamente.'));
        }

        if (!error.response) {
            console.error('Erro de rede:', error);
            return Promise.reject(new Error('Erro de conexão. Verifique sua internet e tente novamente.'));
        }

        if (error.response?.status === 401) {
            console.error('Token inválido ou expirado');
            await AsyncStorage.removeItem('userToken');
            // O redirecionamento para login deve ser feito no componente que está usando a API
        }

        return Promise.reject(error);
    }
);