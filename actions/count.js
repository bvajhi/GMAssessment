import CONST from '../constants';
    export function changeCount(count) {
        return {
            type: CONST.COUNTER_CHANGE,
            payload: count
        }
}