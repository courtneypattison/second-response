export const LOAD_NEED = 'LOAD_NEED';
export const LOAD_NEEDS = 'LOAD_NEEDS';
export const LOAD_NEED_TYPES = 'LOAD_NEED_TYPES';

export function loadNeed(need) {
  return {
    type: LOAD_NEED,
    need
  }
}

export function loadNeeds(needs) {
  return {
    type: LOAD_NEEDS,
    needs
  }
}

export function loadNeedTypes(types) {
  return {
    type: LOAD_NEED_TYPES,
    types
  }
}
