import Record from './Record';

describe('Record', () => {
  it('decodes JSON', () => {
    const fixture = require('./fixtures/object.id.json');
    const record = Record.decodeJSON(fixture);

    expect(record.artist.name).toEqual(fixture.artistDisplayName);
    expect(record.id).toEqual(fixture.objectID);
    expect(record.image).toEqual(fixture.primaryImage);
    expect(record.title).toEqual(fixture.title);
    expect(record.updated).toEqual(new Date(fixture.metadataDate));
    expect(record.url).toEqual(fixture.objectURL);
  });
});
