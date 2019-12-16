import { Event } from '../store/events/models';

export interface PageData {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

export interface FetchEventsResult {
  _embedded: {
    events: Event[];
  };
  page?: PageData;
}
