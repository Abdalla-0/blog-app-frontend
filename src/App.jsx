import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/layouts/Footer/Footer";
import Header from "./components/layouts/Header/Header";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoriesTable from "./pages/admin/CategoriesTable";
import CommentsTable from "./pages/admin/CommentsTable";
import PostsTable from "./pages/admin/PostsTable";
import UsersTable from "./pages/admin/UsersTable";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Category from "./pages/category/Category";
import CreatePost from "./pages/create-post/CreatePost";
import Home from "./pages/home/Home";
import PostDetails from "./pages/post-details/PostDetails";
import PostsPage from "./pages/posts/PostsPage";
import Profile from "./pages/profile/Profile";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import NotFound from "./pages/not-found/NotFound";
import { useSelector } from "react-redux";
import VerifyEmail from "./pages/verify-email/VerifyEmail";

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="posts">
              <Route index element={<PostsPage />} />
              <Route
                path="create"
                element={!user ? <Navigate to="/login" /> : <CreatePost />}
              />
              <Route path="details/:id" element={<PostDetails />} />
              <Route path="categories/:category" element={<Category />} />
            </Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
            <Route
              path="/users/:userId/verify/:token"
              element={!user ? <VerifyEmail /> : <Navigate to="/" />}
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/reset-password/:userId/:token"
              element={<ResetPassword />}
            />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="admin-dashboard">
              <Route
                index
                element={
                  user?.isAdmin ? <AdminDashboard /> : <Navigate to="/" />
                }
              />
              <Route
                path="users-table"
                element={user?.isAdmin ? <UsersTable /> : <Navigate to="/" />}
              />
              <Route
                path="posts-table"
                element={user?.isAdmin ? <PostsTable /> : <Navigate to="/" />}
              />
              <Route
                path="categories-table"
                element={
                  user?.isAdmin ? <CategoriesTable /> : <Navigate to="/" />
                }
              />
              <Route
                path="comments-table"
                element={
                  user?.isAdmin ? <CommentsTable /> : <Navigate to="/" />
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
