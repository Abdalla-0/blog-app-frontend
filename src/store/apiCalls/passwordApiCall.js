import { passwordActions } from "../slices/passwordSlice";
import domain from "../../utils/domain";
import { toast } from "react-toastify";

// Forgot Password
export function forgotPassword(email) {
  return async () => {
    try {
      const { data } = await domain.post("/api/password/reset-password-link", {
        email,
      });
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Get Reset Password
export function getResetPassword(userId, token) {
  return async (dispatch) => {
    try {
      await domain.get(`/api/password/reset-password/${userId}/${token}`);
    } catch (error) {
      console.log(error);
      dispatch(passwordActions.setError());
    }
  };
}

// Reset The Password
export function resetPassword(newPassword, user) {
  return async () => {
    try {
      const { data } = await domain.post(
        `/api/password/reset-password/${user.userId}/${user.token}`,
        { password: newPassword }
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
