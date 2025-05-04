import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Встановлюємо базову URL-адресу
// для всіх запитів axios
axios.defaults.baseURL = 'https://6814a476225ff1af1629887c.mockapi.io/todos';

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/list');
    // При успішному запиті повертаємо проміс із даними
    return response.data;
  } catch (error) {
    // При помилці запиту повертаємо проміс
    // який буде відхилений з текстом помилки
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTask = createAsyncThunk('tasks/addTask', async (text, thunkAPI) => {
  try {
    const response = await axios.post('/list', { text });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId, thunkAPI) => {
  try {
    const response = await axios.delete(`/list/${taskId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const toggleCompleted = createAsyncThunk('tasks/toggleCompleted', async (task, thunkAPI) => {
  try {
    const response = await axios.put(`/list/${task.id}`, {
      completed: !task.completed,
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
