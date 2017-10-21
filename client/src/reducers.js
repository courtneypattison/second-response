import {
  LOAD_NEED, loadNeed,
  LOAD_NEED_TYPES, loadNeedTypes,

} from './actions'
import _ from 'lodash';

const initialState = {
  needs:[],
  needsById:{},
  needTypes: ['blankets', 'food', 'water']
}

export function app(state=initialState, action) {

  switch (action.type) {
    case LOAD_NEED:
      let newNeeds = state.needs.concat([action.item]);

      return Object.assign({}, state, {
        needs: newNeeds,
        needsById: _.groupBy(newNeeds, 'id')
      });
    case LOAD_NEED_TYPES:
        return Object.assign({}, state, {
          needTypes: action.needTypes
        });
    default:
      return state;
  }
}
