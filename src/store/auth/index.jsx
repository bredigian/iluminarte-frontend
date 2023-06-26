import { CLEAR_FORM, UPDATE_FORM } from "../../utils/authForm"

export const initialState = {
  email: { value: "", errorMessage: "", clicked: false, hasError: false },
  password: { value: "", errorMessage: "", clicked: false, hasError: false },
  isFormatValid: false,
}

export const formStore = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { type, value, hasError, errorMessage, clicked, isValid } =
        action.data
      return {
        ...state,
        [type]: {
          ...state[type],
          value,
          hasError,
          errorMessage,
          clicked,
        },
        isFormatValid: isValid,
      }
    case CLEAR_FORM:
      return initialState
    default:
      return state
  }
}
