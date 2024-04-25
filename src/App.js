import { Route, Routes } from "react-router-dom";

import UserListPage from "./pages/UserListPage/UserListPage";
import AlbumPage from "./pages/AlbumPage/AlbumPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


function App() {
  return (
   <Routes>
    <Route path="/" element={<UserListPage />} />
    <Route path="/album/:id" element={<AlbumPage />} />
    <Route path="/photos/:id" element={<PhotosPage />} />
    <Route path="*" element={<ErrorPage />} />
   </Routes>
  );
}

export default App;
