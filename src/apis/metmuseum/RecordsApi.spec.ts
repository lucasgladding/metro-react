import Record from './Record';
import RecordsApi from './RecordsApi';

describe('Records API', () => {
  it('gets a record', async () => {
    const fixture = require('./fixtures/object.id.json');
    const client = {
      get: jest.fn().mockResolvedValue(fixture),
    };
    const service = new RecordsApi(client);
    const match = await service.get(1234);
    expect(client.get).toHaveBeenCalled();
    expect(match).toBeInstanceOf(Record);
  });
});
