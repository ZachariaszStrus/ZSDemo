import Chance from 'chance';
import { range } from 'lodash';
import moment from 'moment';
import { Event } from '../store/events/models';

const chance = new Chance();

const generateEvents = (count: number): Event[] =>
  range(count).map((id) => ({
    id: id.toString(),
    name: chance.word(),
    type: 'event',
    url: chance.url(),
    images: [],
    dates: {
      start: {
        localDate: moment(chance.date()).format('YYYY-MM-DD')
      }
    },
    classifications: []
  }));

export default {
  generateEvents
};
