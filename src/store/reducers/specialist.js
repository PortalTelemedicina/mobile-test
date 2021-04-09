const INITIAL_STATE = {
  loading: false,
  categories: [],
  currentCategory: {}
}

export const Types = {
  GET_CATEGORIES_REQUEST: 'GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR: 'GET_CATEGORIES_ERROR',

  GET_SPECIALISTS_FROM_CATEGORY_REQUEST:
    'GET_SPECIALISTS_FROM_CATEGORY_REQUEST',
  GET_SPECIALISTS_FROM_CATEGORY_SUCCESS:
    'GET_SPECIALISTS_FROM_CATEGORY_SUCCESS',
  GET_SPECIALISTS_FROM_CATEGORY_ERROR: 'GET_SPECIALISTS_FROM_CATEGORY_ERROR'
}

export const Actions = {
  getCategories: data => ({
    type: Types.GET_CATEGORIES_REQUEST,
    payload: { data }
  }),
  getCategoriesSuccess: data => ({
    type: Types.GET_CATEGORIES_SUCCESS,
    payload: data
  }),
  getCategoriesError: () => ({
    type: Types.GET_CATEGORIES_ERROR
  }),

  getSpecialistsFromCategory: data => ({
    type: Types.GET_SPECIALISTS_FROM_CATEGORY_REQUEST,
    payload: data
  }),
  getSpecialistsFromCategorySuccess: data => ({
    type: Types.GET_SPECIALISTS_FROM_CATEGORY_SUCCESS,
    payload: data
  }),
  getSpecialistsFromCategoryError: () => ({
    type: Types.GET_SPECIALISTS_FROM_CATEGORY_ERROR
  })
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_CATEGORIES_REQUEST:
      return { ...state, loading: true }
    case Types.GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, loading: false }
    case Types.GET_CATEGORIES_ERROR:
      return { ...state, loading: false }

    case Types.GET_SPECIALISTS_FROM_CATEGORY_REQUEST:
      return { ...state, loading: true }
    case Types.GET_SPECIALISTS_FROM_CATEGORY_SUCCESS:
      return { ...state, currentCategory: action.payload, loading: false }
    case Types.GET_SPECIALISTS_FROM_CATEGORY_ERROR:
      return { ...state, loading: false }
    default:
      return state
  }
}
