import {render, screen} from '@testing-library/react';
import React from 'react';
import Record from './Record';

describe('Record', () => {
  it('renders the record', () => {
    const title = 'Title';
    const artist = 'Artist';
    const image = 'https://example.com/images/1234.jpg';
    const url = 'https://example.com/1234';
    render(<Record artist={artist} image={image} title={title} url={url} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(artist)).toBeInTheDocument();
    expect(screen.getByTestId('image').getAttribute('src')).toEqual(image);
    expect(screen.getByTestId('url').getAttribute('href')).toEqual(url);
  });
});
