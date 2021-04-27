import Client from './Client';

class FetchClient implements Client {
  async get<T = any>(url: string): Promise<T> {
    const response = await fetch(url);
    const json = await response.json();
    return json as T;
  }
}

export default FetchClient;
