import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import BookDetailsView from './views/BookDetailsView';
import NotFoundView from './views/NotFoundView';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />}>
          
        </Route>

        <Route path="/authors" element={<AuthorsView />}>
          
        </Route>

        <Route path="/books" element={<BooksView />}>
          
        </Route>

        <Route path="/books/:bookId" element={<BookDetailsView />}>
          
        </Route>

        <Route element={<NotFoundView />}>
          
        </Route>
      </Routes>
    </Container>
  );
}
