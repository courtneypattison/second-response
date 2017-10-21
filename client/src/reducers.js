import {
  LOAD_NEED, loadNeed,
  LOAD_NEEDS, loadNeeds,
  LOAD_NEED_TYPES, loadNeedTypes,

} from './actions'
import _ from 'lodash';

const initialState = {
  needs:[],
  needsById:{},
  needTypes: []
}

export function app(state=initialState, action) {

  switch (action.type) {
    case LOAD_NEED:
      let newNeeds = state.needs.concat([action.need]);
      return Object.assign({}, state, {
        needs: newNeeds,
        needsById: _.groupBy(newNeeds, 'id')
      });
    case LOAD_NEEDS:
      return Object.assign({}, state, {
        needs: action.needs,
        needsById: _.groupBy(action.needs, 'id')
      });
    case LOAD_NEED_TYPES:
        return Object.assign({}, state, {
          needTypes: action.types
        });
    default:
      return state;
  }
}
