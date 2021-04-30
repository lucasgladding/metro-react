import Artist from './Artist';

interface Attributes {
  artist: Artist;
  id: number;
  image: string;
  title: string;
  updated: Date;
  url: string;
}

class Record implements Attributes {
  artist: Artist;
  id: number;
  image: string;
  title: string;
  updated: Date;
  url: string;

  constructor(attributes: Attributes) {
    this.artist = attributes.artist;
    this.id = attributes.id;
    this.image = attributes.image;
    this.title = attributes.title
    this.updated = attributes.updated;
    this.url = attributes.url;
  }

  static decodeJSON(data: any): Record {
    return new Record({
      artist: new Artist({
        role: data.artistRole,
        name: data.artistDisplayName,
        bio: data.artistDisplayBio,
        birth: +data.artistBeginDate,
        death: data.artistEndDate ? +data.artistEndDate : undefined,
      }),
      id: data.objectID,
      image: data.primaryImage,
      title: data.title,
      updated: new Date(data.metadataDate),
      url: data.objectURL,
    });
  }
}

export default Record;
