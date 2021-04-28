import Artist from './Artist';

interface RecordAttributes {
  id: number;
  title: string;
  artist: Artist;
  updated: Date;
}

class Record implements RecordAttributes {
  id: number;
  title: string;
  artist: Artist;
  updated: Date;

  constructor({ id, title, artist, updated }: RecordAttributes) {
    this.id = id;
    this.title = title
    this.artist = artist;
    this.updated = updated;
  }

  static decodeJSON(data: any): Record {
    return new Record({
      id: data.objectID,
      title: data.title,
      artist: new Artist({
        role: data.artistRole,
        name: data.artistDisplayName,
        bio: data.artistDisplayBio,
        birth: data.artistBeginDate,
        death: data.artistEndDate,
      }),
      updated: new Date(data.metadataDate),
    });
  }
}

export default Record;
