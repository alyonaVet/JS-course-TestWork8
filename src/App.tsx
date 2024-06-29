import Toolbar from './components/Toolbar/Toolbar';
import AddQuote from './containers/AddQuote/AddQuote';
import {Route, Routes} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import EditQuote from './containers/EditQuote/EditQuote';

const App = () => {

  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add-quote" element={<AddQuote />} />
          <Route path="/quotes/:category" element={<MainPage />} />
          <Route path="/quotes/:id/edit" element={<EditQuote />} />
        </Routes>
      </main>
    </>
  )
};

export default App;
