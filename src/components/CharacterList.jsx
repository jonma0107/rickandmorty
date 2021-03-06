import {useEffect, useState} from 'react'
import Character from './Character';

function NavPage(props) {
  return (
    <div className='d-flex justify-content-around align-items-center p-5'>
      <button className='btn btn-primary btn-sm' onClick={() => props.setPage(props.page-1)}>
        Página Anterior: {props.page-1} </button>
      <p>Página Actúal: {props.page}</p>
      <button className='btn btn-primary btn-sm' onClick={() => props.setPage(props.page+1)}>
        Página Siguiente: {props.page+1} </button>
    </div>
  )


}

function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)


  useEffect(() =>{
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character?page='+ page); // consulta asincrona
      const data = await response.json();
      setLoading(false)
      setCharacters(data.results);

    }

    fetchData()

  },[page]);

  if (loading) {
    return (
      <h1>Cargando...</h1>
    )
  }

  return (
    <div className='container'>

      <NavPage page={page} setPage={setPage}/>

      <div className="row">
        {characters.map(character => {
          return (
            <div className='col-md-4' key={character.id}>
              <Character character={character}/>
            </div>
          )
        })}
      </div>

      <NavPage page={page} setPage={setPage}/>

    </div>
  );
}

export default CharacterList
