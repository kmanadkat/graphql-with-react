import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Song from './components/Song';
import SongList from './components/SongList';

function App() {
  return (
    <BrowserRouter>
      <nav className='py-4 bg-gray-200'>
        <div className='w-3/4 mx-auto flex'>
          <h1 className='brand font-semibold'>Lyrical GraphQL</h1>
          <ul className='ml-auto'>
            <li><NavLink to="/">Home</NavLink></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<SongList />} />
        <Route path='/songs/:id' element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
