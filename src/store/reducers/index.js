// @flow

export type StateType = $Exact<{
  elements: Array<number>
}>;

type BaseActionType = $Exact<{
  type: "LOAD_ELEMENTS"
}>;

const initialState: StateType = {
  elements: [1, 2, 3, 4]
};

const reducer = function(state: StateType = initialState, action: BaseActionType) {
  switch (action.type) {
    case "LOAD_ELEMENTS":
      const n = Math.floor(Math.random() * 6) + 1;
      return {
        elements: [n]
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
