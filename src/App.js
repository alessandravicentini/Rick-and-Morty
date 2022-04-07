import './App.css';
import './components/CharCards/style.css'
import './components/Characters/style.css'

import { Characters } from './components/Characters';

import { useState } from 'react'
import { useEffect } from 'react'


function App() {

  const [characterList, setCharacterList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pages, setPages] = useState()

  const totalPages = []

  const allPages = () => {

    for(let i = 1; i < pages; i++){
      totalPages.push(i)
    }

  }

  allPages()

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
    .then((response) => response.json())
    .then((data) => {
      setPages(data.info.pages)
      setCharacterList(data.results)})

  }, [currentPage])

  const previousPage = () => {
    currentPage > 1 ? setCurrentPage(Number(currentPage) -1) : setCurrentPage(currentPage)
  }

  const nextPage = () => {
    currentPage < pages ? setCurrentPage(Number(currentPage) +1) : setCurrentPage(currentPage)
  }

  
  return (
  
    <div className="App">

      <Characters characterList={characterList}/>

      <div className='div-pages'>
      {totalPages.map((page) => <button id={page} className={page === currentPage ? 'button-page-selected' : 'button-page'} onClick={(event) => setCurrentPage(event.target.innerText)}>{page}</button>)}
      </div>

      <div className='div-buttons'>
      <button className={currentPage > 1 ? 'change-page' : 'change-page-hidden'} id={currentPage} onClick={previousPage}>Previous</button>
      <p>- {currentPage} -</p>
      <button className={currentPage < 42 ? 'change-page' : 'change-page-hidden'} onClick={nextPage}>Next</button>
      </div>

    </div>

   
  );
}

export default App;
