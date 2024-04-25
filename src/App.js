import { Route, Routes } from "react-router-dom";

import UserListPage from "./pages/UserListPage/UserListPage";
import AlbumPage from "./pages/AlbumPage/AlbumPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";


function App() {
  return (
    <div>
   <Routes>
    <Route path="/" element={<UserListPage />} />
    <Route path="/album/:id" element={<AlbumPage />} />
    <Route path="/photos/:id" element={<PhotosPage />} />
   </Routes>
   </div>
  );
}

export default App;
