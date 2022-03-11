import React from 'react'
import './App.css'
import { CharacterCard } from './components/character-card'
import { CharacterDisplay } from './components/character-display'
import { useGetCharacters } from './hooks/use-get-characters'
import { CharacterModel } from './models'

function App() {
  const [displayCharacter, setDisplayCharacter] = React.useState<CharacterModel>()

  const handleDisplayCharacter = (newDisplayCharacter: CharacterModel) => {
    setDisplayCharacter(newDisplayCharacter)
  }

  const characters = useGetCharacters()
  return (
    <div className='wrapper'>
    <CharacterDisplay character={displayCharacter} />
    {characters?.map(character => <CharacterCard key={character.name} character={character} onClick={handleDisplayCharacter} />)}
    </div>
  )
}

export default App
