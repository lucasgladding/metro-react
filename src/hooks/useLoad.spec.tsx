import {act, renderHook} from '@testing-library/react-hooks';
import useLoad from './useLoad';

describe('useLoad', () => {
  let references: any;
  let promise: Promise<void>

  beforeEach(() => {
    references = {};
    promise = new Promise<void>((resolve, reject) => {
      references.resolve = resolve;
      references.reject = reject;
    });
  });

  it('has the correct the initial state', () => {
    const {result} = renderHook(() => useLoad());
    expect(result.current.loading).toEqual(false);
    expect(result.current.error).toEqual(undefined);
  });

  it('updates the loading state during load', async () => {
    const {result, waitFor} = renderHook(() => useLoad());

    act(() => {
      result.current.load(() => promise);
    });

    await waitFor(() => result.current.loading === true);
    expect(result.current.loading).toEqual(true);
    expect(result.current.error).toEqual(undefined);

    references.resolve();

    await waitFor(() => result.current.loading === false);
    expect(result.current.loading).toEqual(false);
    expect(result.current.error).toEqual(undefined);
  });

  it('updates the error state on error', async () => {
    const {result, waitFor} = renderHook(() => useLoad());

    act(() => {
      result.current.load(() => promise);
    });

    await waitFor(() => result.current.loading === true);
    expect(result.current.loading).toEqual(true);
    expect(result.current.error).toEqual(undefined);

    const error = new Error('An error occurred!');
    references.reject(error);

    await waitFor(() => result.current.error === error);
    expect(result.current.loading).toEqual(false);
    expect(result.current.error).toEqual(error);
  });
});
