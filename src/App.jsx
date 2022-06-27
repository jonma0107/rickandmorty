import React from 'react'

import CharacterList from './components/CharacterList';
import Character from './components/Character';

function App () {
  return <div className='bg-dark text-white'>
    <h1 className='text-center display-1 pt-4'>Rick <span className='text-danger'>&</span> Morty</h1>
    <h2 className="text-center "> <span className='text-danger'>Todos</span> los <span className='text-primary'>Personajes</span></h2>
    <CharacterList/>

  </div>
  }
export default App
