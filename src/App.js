import './App.css';
import './components/CharCards/style.css'
import './components/Characters/style.css'

import { Characters } from './components/Characters';

import { useState } from 'react'
import { useEffect } from 'react'


function App() {

  const [characterList, setCharacterList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
    .then((response) => response.json())
    .then((data) => setCharacterList(data.results))
  }, [currentPage])

  
  return (
    <div className="App">

      <Characters characterList={characterList}/>

      <button onClick={() => {currentPage > 1 ? setCurrentPage(currentPage -1) : setCurrentPage(currentPage)}}>Previous</button>
      <button onClick={() => {currentPage < 42 ? setCurrentPage(currentPage +1) : setCurrentPage(currentPage)}}>Next</button>

    </div>
  );
}

export default App;
