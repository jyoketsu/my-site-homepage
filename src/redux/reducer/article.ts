import { actionTypes } from "../actions";
import { ArticleReducerType } from "../../../interfaces/article";

const initialState: ArticleReducerType = {
  articles: [],
  total: 0,
  loading: false,
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST:
      return {
        ...state,
        ...{
          loading: true,
        },
      };
    default:
      return state;
  }
};
