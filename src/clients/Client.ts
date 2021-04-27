interface Client {
  get<T = any>(url: string): Promise<T>;
}

export default Client;
