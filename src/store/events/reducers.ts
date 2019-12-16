import { EventsState } from './models';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { FetchEventsResult } from '../../services/api.types';

const onEventsRequestInit: CaseReducer<EventsState> = (state) => ({
  ...state,
  loading: true,
  error: null
});

const onEventsRequestError: CaseReducer<EventsState, PayloadAction<string>> = (
  state,
  action
) => ({
  items: [],
  page: null,
  loading: false,
  error: action.payload
});

const onEventsFetchMoreSuccess: CaseReducer<
  EventsState,
  PayloadAction<FetchEventsResult>
> = (state, action) => ({
  items: [...state.items, ...action.payload._embedded.events],
  page: action.payload.page,
  loading: false,
  error: null
});

const onEventsRefreshSuccess: CaseReducer<
  EventsState,
  PayloadAction<FetchEventsResult>
> = (state, action) => ({
  items: action.payload._embedded.events,
  page: action.payload.page,
  loading: false,
  error: null
});

export default {
  onEventsRequestInit,
  onEventsRequestError,
  onEventsFetchMoreSuccess,
  onEventsRefreshSuccess
};
