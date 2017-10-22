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
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "address": "5300 Mountain Home Ranch Rd, Calistoga, CA 94515"
            },
            "properties": {
                "id": "2",
                "need": "Blankets",
                "description": "Fleece is preferable.",
                "quantity": "3",
                "contactName": "Courtney Pattison",
                "contactEmail": "cool@gmail.com"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "address": "18000 Old Winery Rd, Sonoma, CA 95476"
            },
            "properties": {
                "id": "3",
                "need": "Shoes",
                "description": "Nike please. For eight year old boy and 6 year old girl.",
                "quantity": "2",
                "contactName": "Jane Smith",
                "contactEmail": "jsmith@gmail.com"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "address": "203 S Jefferson St, Napa, CA 94559"
            },
            "properties": {
                "id": "4",
                "need": "Food",
                "description": "Peanut butter urgently needed!",
                "quantity": "8",
                "contactName": "Amelia Lin",
                "contactEmail": "alin@gmail.com"
            }
        }
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
