import FetchClient from './FetchClient';

describe('FetchClient', () => {
  let mockFetch: jest.Mock;

  beforeEach(() => {
    mockFetch = jest.fn();
    global.fetch = mockFetch;
  });

  it('handles GET requests', async () => {
    const url = 'https://example.com';
    const data = {
      id: 1234,
    };
    mockFetch.mockResolvedValue(new Response(JSON.stringify(data)));
    const client = new FetchClient();
    const response = await client.get(url);
    expect(mockFetch).toHaveBeenCalledWith(url);
    expect(response).toEqual(data);
  });
});
