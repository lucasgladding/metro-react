import React, {useEffect, useState} from 'react';
import IRecordsApi from '../apis/metmuseum/IRecordsApi';
import Record from '../apis/metmuseum/Record';
import RecordsApi from '../apis/metmuseum/RecordsApi';
import FetchClient from '../clients/FetchClient';
import useLoad from '../hooks/useLoad';
import Loader from './Loader';

interface GetRecordProps {
  api?: IRecordsApi;
  id: number;
}

const GetRecord: React.FC<GetRecordProps> = (props) => {
  const [record, setRecord] = useState<Record | undefined>(undefined);
  const { load, loading, error } = useLoad();

  const api = props.api ?? new RecordsApi(new FetchClient());

  async function init() {
    const response = await load(async () => {
      return api.get(props.id);
    });
    setRecord(response);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <Loader data-testid="loader" loading={loading} error={error}>
      <div>{record?.title}</div>
    </Loader>
  );
};

export default GetRecord;
