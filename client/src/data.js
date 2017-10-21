import axios from 'axios';
import {loadNeeds, loadNeedTypes} from './actions';
import { bindActionCreators } from 'redux'
import store from './store';

export function getNeeds() {
  return axios.get('/needs')
    .then((response) => {
        store.dispatch(loadNeeds(response));
    })
    .catch((err) => {
      store.dispatch(loadNeeds([
        {
          id: 1,
          need: 'blankets',
          description: 'the fuzziest please',
          count: 5,
          status: ''
        },
        {
          id: 2,
          need: 'food',
          description: 'anything goes!',
          count: 10,
          status: ''
        },

      ]));
    })
}

export function getNeedTypes() {
  return axios.get('/needTypes')
    .then((response) => {
        store.dispatch(loadNeedTypes(response));
    })
    .catch((err) => {
      store.dispatch(loadNeedTypes(['blankets', 'food', 'water']));
    })
}
