import { categoryActions } from "../slices/categorySlice";
import domain from "../../utils/domain";
import { toast } from "react-toastify";

// Fetch All Categories
export function fetchCategories() {
  return async (dispatch) => {
    try {
      const { data } = await domain.get("/api/categories");
      dispatch(categoryActions.setCategories(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Create Category
export function createCategory(newCategory) {
  return async (dispatch, getState) => {
    try {
      const { data } = await domain.post("/api/categories", newCategory, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(categoryActions.addCategory(data));
      toast.success("category created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Update Category
export function updateCategory(categoryId, updatedCategory) {
  return async (dispatch, getState) => {
    try {
      const { data } = await domain.put(
        `/api/categories/${categoryId}`,
        updatedCategory,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );
      dispatch(categoryActions.setUpdateCategory(data));
      toast.success("category updated successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Delete Category
export function deleteCategory(categoryId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await domain.delete(`/api/categories/${categoryId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(categoryActions.deleteCategory(data.categoryId));
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
