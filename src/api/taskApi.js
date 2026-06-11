import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_API_URL || 'https://nsg-document-mange-be-ebon.vercel.app';

export const getTasks = async (userId) => {
    try {
        const token = Cookies.get('token');
        const response = await axios.get(`${API_URL}/tasks${userId ? `?userId=${userId}` : ''}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks', error);
        throw error;
    }
};

export const createTask = async (taskData) => {
    try {
        const token = Cookies.get('token');
        const response = await axios.post(`${API_URL}/tasks`, taskData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating task', error);
        throw error;
    }
};

export const updateTask = async (taskId, updates) => {
    try {
        const token = Cookies.get('token');
        const response = await axios.put(`${API_URL}/tasks/${taskId}`, updates, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating task', error);
        throw error;
    }
};

export const deleteTask = async (taskId) => {
    try {
        const token = Cookies.get('token');
        const response = await axios.delete(`${API_URL}/tasks/${taskId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting task', error);
        throw error;
    }
};
