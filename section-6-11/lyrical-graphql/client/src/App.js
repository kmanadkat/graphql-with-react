import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import SongList from './components/SongList';
import CreateSong from './components/CreateSong';
import SongDetail from './components/SongDetail';

function App() {
  return (
    <BrowserRouter>
      <nav className='py-4 bg-gray-200 mb-12'>
        <div className='w-3/4 mx-auto flex'>
          <h1 className='brand font-semibold'>Lyrical GraphQL</h1>
          <ul className='ml-auto'>
            <li><NavLink to="/">Home</NavLink></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<SongList />} />
        <Route path='/songs/create' element={<CreateSong />} />
        <Route path='/songs/:id' element={<SongDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
