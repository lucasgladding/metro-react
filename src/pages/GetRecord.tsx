import React, {useEffect, useState} from 'react';
import Record from '../apis/metmuseum/Record';
import RecordsApi from '../apis/metmuseum/RecordsApi';
import FetchClient from '../clients/FetchClient';
import Loadable from '../components/Loadable';
import useLoad from '../hooks/useLoad';

interface GetRecordProps {
  api?: RecordsApi;
  id: number;
}

const GetRecord: React.FC<GetRecordProps> = (props) => {
  const [record, setRecord] = useState<Record | undefined>(undefined);
  const { load, loading, error } = useLoad();

  const api = props.api ?? new RecordsApi(new FetchClient());

  async function init() {
    setRecord(await load(async () => {
      return api.get(props.id);
    }));
  }

  useEffect(() => {
    init();
  }, [props.id]);

  return (
    <Loadable loading={loading} error={error}>
      <div>{record?.title}</div>
      <div>{record?.artist.name}</div>
      <div><img src={record?.image} width={200} /></div>
      <div><a href={record?.url}>More Info</a></div>
    </Loadable>
  );
};

export default GetRecord;
