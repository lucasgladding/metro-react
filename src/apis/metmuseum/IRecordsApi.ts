import Record from './Record';

interface IRecordsApi {
  get(id: number): Promise<Record>;
}

export default IRecordsApi;
