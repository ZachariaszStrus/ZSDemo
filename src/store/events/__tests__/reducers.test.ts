import { eventsSlice } from '../index';
import testUtils from '../../../utils/test.utils';

const { reducer, actions } = eventsSlice;

describe('eventsReducer', () => {
  it('onEventsRequestInit', () => {
    const state = {
      items: [],
      loading: false,
      error: null,
      page: null
    };

    const action = actions.onEventsRequestInit();

    const nextState = reducer(state, action);
    const expectedState = {
      items: [],
      loading: true,
      error: null,
      page: null
    };

    expect(nextState).toEqual(expectedState);
  });

  it('onEventsRequestError', () => {
    const state = {
      items: [],
      loading: false,
      error: null,
      page: null
    };

    const action = actions.onEventsRequestError('error');

    const nextState = reducer(state, action);
    const expectedState = {
      items: [],
      loading: false,
      error: 'error',
      page: null
    };

    expect(nextState).toEqual(expectedState);
  });

  it('onEventsFetchMoreSuccess', () => {
    const state = {
      items: [],
      loading: false,
      error: null,
      page: null
    };

    const newEvents = testUtils.generateEvents(20);
    const newPage = {
      size: 20,
      totalElements: 100,
      totalPages: 5,
      number: 1
    };

    const action = actions.onEventsRefreshSuccess({
      _embedded: {
        events: newEvents
      },
      page: newPage
    });

    const nextState = reducer(state, action);
    const expectedState = {
      items: newEvents,
      loading: false,
      error: null,
      page: newPage
    };

    expect(nextState).toEqual(expectedState);
  });

  it('onEventsRefreshSuccess', () => {
    const events = testUtils.generateEvents(20);
    const page = {
      size: 20,
      totalElements: 100,
      totalPages: 5,
      number: 1
    };
    const state = {
      items: events,
      loading: false,
      error: null,
      page: page
    };

    const newEvents = testUtils.generateEvents(20);
    const newPage = {
      size: 20,
      totalElements: 100,
      totalPages: 5,
      number: 2
    };

    const action = actions.onEventsFetchMoreSuccess({
      _embedded: {
        events: newEvents
      },
      page: newPage
    });

    const nextState = reducer(state, action);
    const expectedState = {
      items: [...events, ...newEvents],
      loading: false,
      error: null,
      page: newPage
    };

    expect(nextState).toEqual(expectedState);
  });
});
