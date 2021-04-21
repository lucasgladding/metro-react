interface Client {
  get(url: string): Promise<any>;
}

export default Client;
