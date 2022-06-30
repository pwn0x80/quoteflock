import { AuthService } from "../src/authService";

export const ContextCalls = async (dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await AuthService.loginWithGoogle({ dispatch });
  } catch (e) {
    console.error(e);
  }
};
