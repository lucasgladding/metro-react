import React, {useEffect, useState} from 'react';
import Record from '../apis/metmuseum/Record';
import RecordsApi from '../apis/metmuseum/RecordsApi';
import FetchClient from '../clients/FetchClient';
import useApiLoad from '../hooks/useApiLoad';
import Loader from './Loader';

const GetRecord: React.FC = () => {
  const [record, setRecord] = useState<Record | undefined>(undefined);
  const { load, loading, error } = useApiLoad();

  async function init() {
    const response = await load(async () => {
      const service = new RecordsApi(new FetchClient());
      return service.get(45734);
    });
    setRecord(response);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <Loader loading={loading} error={error}>
      <div>{record?.title}</div>
    </Loader>
  );
};

export default GetRecord;
