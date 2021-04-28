import Artist from './Artist';

interface Attributes {
  id: number;
  title: string;
  artist: Artist;
  updated: Date;
}

class Record implements Attributes {
  id: number;
  title: string;
  artist: Artist;
  updated: Date;

  constructor(attributes: Attributes) {
    this.id = attributes.id;
    this.title = attributes.title
    this.artist = attributes.artist;
    this.updated = attributes.updated;
  }

  static decodeJSON(data: any): Record {
    return new Record({
      id: data.objectID,
      title: data.title,
      artist: new Artist({
        role: data.artistRole,
        name: data.artistDisplayName,
        bio: data.artistDisplayBio,
        birth: +data.artistBeginDate,
        death: data.artistEndDate ? +data.artistEndDate : undefined,
      }),
      updated: new Date(data.metadataDate),
    });
  }
}

export default Record;
