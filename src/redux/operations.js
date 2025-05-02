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
