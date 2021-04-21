import Record from './Record';
import Records from './Records';

describe('Records', () => {
  it('gets a record', async () => {
    const fixture = require('./fixtures/object.id.json');
    const client = {
      get: () => Promise.resolve(fixture),
    };
    const service = new Records(client);
    const match = await service.get(1234);
    expect(match).toBeInstanceOf(Record);
  });
});
