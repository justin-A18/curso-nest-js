import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpAdapter } from './http.adapter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url, options);
      return data;
    } catch (error) {
      const serverError = error as AxiosError;
      console.log(serverError.message);
    }
  }

  async post<T>(url: string, body: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axios.post<T>(url, body);
      return data;
    } catch (error) {
      const serverError = error as AxiosError;
      console.log(serverError.message);
    }
  }

  async put<T>(url: string, body: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axios.put<T>(url, body);
      return data;
    } catch (error) {
      const serverError = error as AxiosError;
      console.log(serverError.message);
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.delete<T>(url);
      return data;
    } catch (error) {
      const serverError = error as AxiosError;
      console.log(serverError.message);
    }
  }
}
