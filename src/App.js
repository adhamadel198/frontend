import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddArticlePage from './pages/AddArticlePage';
import Articlespage from './pages/ArticlesPage';
import SearchPage from './pages/SearchPage';
import Layout from './components/Layout';
import DraftsPage from './pages/drafts';
import UpdateDraftPage from './pages/UpdateDraftPage';


const App=() =>{
  return(
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>}/>
      <Route path="/articles" element={<Articlespage/>}/>
      <Route path="/articles/add" element={<AddArticlePage/>}/>
      <Route path="/search-results/:searchTerm" element={<SearchPage/>}/>
      <Route path="/drafts" element={<DraftsPage/>}/>
      <Route path="/updatedraftpage/:id" element={<UpdateDraftPage />} />
    </Routes>
    </Layout>
    </BrowserRouter>
  );
};

export default App