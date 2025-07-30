import axiosInstance from '../axios/axiosInstance';
import { User } from '../types/UserParam';

export const getUsers = async (): Promise<User[]> => {
  const response = await axiosInstance.get<User[]>('/users');
  return response.data;
};

export const getUserById = async (id: number): Promise<User> => {
  const response = await axiosInstance.get<User>(`/users/${id}`);
  return response.data;
};

export const createUser = async (user: Partial<User>): Promise<User> => {
  const response = await axiosInstance.post<User>('/users', user);
  return response.data;
};

export const updateUser = async (
  id: number,
  user: Partial<User>,
): Promise<User> => {
  const response = await axiosInstance.put<User>(`/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/users/${id}`);
};
