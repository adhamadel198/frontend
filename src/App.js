import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddArticlePage from './pages/AddArticlePage';
import Articlespage from './pages/ArticlesPage';
import HomePage from './pages/homePage.js';
import SearchPage from './pages/SearchPage';
import Layout from './components/Layout';
import DraftsPage from './pages/drafts';
import UpdateDraftPage from './pages/UpdateDraftPage';
import Register from "./pages/Register.js";
import Profile from "./pages/Profile.js";
import Password from "./pages/password.js";
import UserName from "./pages/userName.js";
import Topic from "./pages/Topic.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserName />} />
        <Route path="/password" element={<Password />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/home" element={<Layout><HomePage /></Layout>}/>
        <Route path="/articles"element={<Layout><Articlespage /></Layout>}/>
        <Route path="/articles/add"element={<Layout><AddArticlePage /></Layout>}/>
        <Route path="/search-results/:searchTerm"element={<Layout><SearchPage /></Layout>}/>
        <Route path="/drafts"element={<Layout><DraftsPage /></Layout>}/>
        <Route path="/updatedraftpage/:id"element={<Layout><UpdateDraftPage /></Layout>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
