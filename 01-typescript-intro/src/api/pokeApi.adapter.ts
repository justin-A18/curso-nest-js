import axios from "axios";

export interface HttpAdapter {
	get<T>(url: string): Promise<T>;
	post<T>(url: string, body: Record<string, unknown>): Promise<T>;
	put<T>(url: string, body: Record<string, unknown>): Promise<T>;
	patch<T>(url: string, body: Record<string, unknown>): Promise<T>;
	delete<T>(url: string): Promise<T>;
}

export class PokeApiAdapter implements HttpAdapter {

	private readonly axiosAdapter = axios;

	async get<T>(url: string): Promise<T> {
		const { data } = await this.axiosAdapter.get<T>(url);
		return data;
	}

	async post<T>(url: string, body: Record<string, unknown>): Promise<T> {
		const { data } = await this.axiosAdapter.post<T>(url, {
			body
		});
		return data;
	}

	async put<T>(url: string, body: Record<string, unknown>): Promise<T> {
		const { data } = await this.axiosAdapter.put(url, {
			body
		});
		return data;
	}

	async patch<T>(url: string, body: Record<string, unknown>): Promise<T> {
		const { data } = await this.axiosAdapter.patch(url, {
			body
		});
		return data;
	}

	async delete<T>(url: string): Promise<T> {
		const { data } = await this.axiosAdapter.delete(url);
		return data;
	}
}