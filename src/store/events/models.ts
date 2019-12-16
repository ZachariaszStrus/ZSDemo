import { PageData } from '../../services/api.types';

export interface EventsState {
  items: Event[];
  loading: boolean;
  error: string | null;
  page?: PageData | null;
}

export interface EventImage {
  ratio: string;
  url: string;
  width: number;
  height: number;
}

export interface EventClassification {
  primary: boolean;
  genre?: {
    name: string;
  };
  subGenre?: {
    name: string;
  };
}

export interface Event {
  id: string;
  name: string;
  type: string;
  url: string;
  images: EventImage[];
  dates: {
    start: {
      localDate: string;
    };
  };
  classifications: EventClassification[];
}
