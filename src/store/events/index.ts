import { createSlice, Action } from '@reduxjs/toolkit';
import { EventsState } from './models';
import eventReducers from './reducers';
import { RootState } from '../root-reducer';
import { ThunkAction } from 'redux-thunk';

const INITIAL_STATE: EventsState = {
  items: [],
  loading: false,
  error: null,
  page: null
};

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const eventsSlice = createSlice<EventsState, typeof eventReducers>({
  name: 'events',
  initialState: INITIAL_STATE,
  reducers: eventReducers
});
