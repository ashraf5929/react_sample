import logo from './logo.svg';
import './App.css';
import ItemForm from './pages/itemForm/itemForm';
import ListItems from './pages/listItems/listItems';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header/header';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" Component={ItemForm} />

            <Route path="/list" Component={ListItems} />
          </Routes>
        </Router>
      </QueryClientProvider>


    </>
  );
}

export default App;
