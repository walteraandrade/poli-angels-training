import { CharacterModel } from "../../models"
import './character-display.css'

interface CharacterDisplayProps {
  character?: CharacterModel
}

export const CharacterDisplay: React.FC<CharacterDisplayProps> = ({character}) => {
  return (
    <div className='display'>
      <h2>
        {character?.name}
      </h2>
      <img src={character?.image} alt={character?.name} height='500px'/>
      <p>
        {character?.status}
      </p>
      <p>
        {character?.species}
      </p>
    </div>
  )
}