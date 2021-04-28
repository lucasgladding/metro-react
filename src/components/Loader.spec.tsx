import {render, screen} from '@testing-library/react';
import React from 'react';
import Loader from './Loader';

describe('Loader', () => {
  const contents = 'contents';

  it('renders the contents when loaded', () => {
    render(
      <Loader loading={false}>
        <div>{contents}</div>
      </Loader>
    );
    expect(screen.queryByTestId('loading-text')).not.toBeInTheDocument();
    expect(screen.queryByTestId('error-text')).not.toBeInTheDocument();
    expect(screen.queryByText(contents)).toBeInTheDocument();
  });

  it('renders the loading text with a loading prop', () => {
    render(
      <Loader loading={true}>
        <div>{contents}</div>
      </Loader>
    );
    expect(screen.queryByTestId('loading-text')).toBeInTheDocument();
    expect(screen.queryByTestId('error-text')).not.toBeInTheDocument();
    expect(screen.queryByText(contents)).not.toBeInTheDocument();
  });

  it('renders the error text with an error prop', () => {
    const error = new Error('Could not load');
    render(
      <Loader loading={false} error={error}>
        <div>{contents}</div>
      </Loader>
    );
    expect(screen.queryByTestId('loading-text')).not.toBeInTheDocument();
    expect(screen.queryByText(error.message)).toBeInTheDocument();
    expect(screen.queryByText(contents)).not.toBeInTheDocument();
  });
});
