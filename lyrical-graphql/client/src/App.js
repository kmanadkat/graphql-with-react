import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Song from './components/Song';
import SongList from './components/SongList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SongList />} />
        <Route path='/songs/:id' element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
