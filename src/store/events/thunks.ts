import { AppThunk, eventsSlice } from './index';
import api from '../../services/api';

const {
  onEventsRequestInit,
  onEventsRequestError,
  onEventsFetchMoreSuccess,
  onEventsRefreshSuccess
} = eventsSlice.actions;

export const fetchMoreEvents = (): AppThunk => async (dispatch, getState) => {
  const state = getState();
  if (!state.events.loading) {
    dispatch(onEventsRequestInit());
    try {
      const nextPage = state.events.page ? state.events.page.number + 1 : 1;
      const response = await api.fetchEvents(nextPage);
      dispatch(onEventsFetchMoreSuccess(response.data));
    } catch (err) {
      dispatch(onEventsRequestError(err.toString()));
    }
  }
};

export const refreshEvents = (): AppThunk => async (dispatch, getState) => {
  const state = getState();
  dispatch(onEventsRequestInit());
  if (!state.events.loading) {
    try {
      const response = await api.fetchEvents(1);
      dispatch(onEventsRefreshSuccess(response.data));
    } catch (err) {
      dispatch(onEventsRequestError(err.toString()));
    }
  }
};
