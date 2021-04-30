import React, {useEffect, useState} from 'react';

interface RecordProps {
  artist: string;
  image: string;
  title: string;
  url: string;
}

const Record: React.FC<RecordProps> = (props) => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.artist}</div>
      <div><img src={props.image} width={200} data-testid="image" /></div>
      <div><a href={props.url} data-testid="url">More Info</a></div>
    </div>
  );
};

export default Record;
