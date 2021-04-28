import {render, screen} from '@testing-library/react';
import React from 'react';
import RecordsApi from '../apis/metmuseum/RecordsApi';
import GetRecord from './GetRecord';

describe('Get record', () => {
  const id = 1234;

  it('renders the record', async () => {
    const fixture = require('../apis/metmuseum/fixtures/object.id.json');
    const api = new RecordsApi({
      get: () => Promise.resolve(fixture),
    });
    render(<GetRecord api={api} id={id} />);
    expect(await screen.findByText(fixture.title)).toBeInTheDocument();
  });

  it('renders error text when an error occurs', async () => {
    const error = new Error('An error occurred!');
    const api = new RecordsApi({
      get: () => Promise.reject(error),
    });
    render(<GetRecord api={api} id={id} />);
    expect(await screen.findByText(error.message)).toBeInTheDocument();
  });
});
