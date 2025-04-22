// 1. Імпортуємо функцію createAction
import { createAction } from '@reduxjs/toolkit';

// 2. Створюємо фабрики екшенів
export const addTask = createAction('tasks/addTask');

export const deleteTask = createAction('tasks/deleteTask');

export const toggleCompleted = createAction('tasks/toggleCompleted');

export const setStatusFilter = createAction('filters/setStatusFilter');
