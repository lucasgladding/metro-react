import Client from '../../clients/Client';
import Record from './Record';

// API documentation
// https://metmuseum.github.io/

class RecordsApi {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async get(id: number): Promise<Record> {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
    const response = await this.client.get(url);
    return Record.decodeJSON(response);
  }
}

export default RecordsApi;
