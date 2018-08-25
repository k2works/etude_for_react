// @flow

import * as constants from '../constants';

export type IncrementEnthusiasm = {
  type: typeof constants.INCREMENT_ENTHUSIASM;
}

export type DecrementEnthusiasm = {
  type: typeof constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM,
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM,
  };
}