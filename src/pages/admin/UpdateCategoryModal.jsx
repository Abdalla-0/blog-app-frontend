import { useState } from "react";
import "./update-item-modal.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateCategory } from "../../store/apiCalls/categoryApiCall";

const UpdateCategoryModal = ({ currentCategory, setIsModalOpen }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(currentCategory?.title);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Title is required");

    dispatch(updateCategory(currentCategory?._id, { title }));
    setIsModalOpen(false);
  };

  return (
    <div className="update-item">
      <form onSubmit={formSubmitHandler} className="update-item-form">
        <abbr title="close">
          <i
            onClick={() => setIsModalOpen(false)}
            className="bi bi-x-circle-fill update-item-form-close"
          ></i>
        </abbr>
        <h1 className="update-item-title">Edit Category</h1>
        <label>Title</label>
        <input
          type="text"
          className="update-item-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="update-item-btn">
          Edit Category
        </button>
      </form>
    </div>
  );
};

export default UpdateCategoryModal;
