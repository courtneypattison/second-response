export const LOAD_NEED = 'LOAD_NEED';
export const LOAD_NEED_TYPES = 'LOAD_NEED_TYPES';

export function loadNeed(item) {
  return {
    type: LOAD_NEED,
    item
  }
}

export function loadNeedTypes(needs) {
  return {
    type: LOAD_NEED_TYPES,
    needs
  }
}
