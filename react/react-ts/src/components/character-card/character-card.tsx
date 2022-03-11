import { CharacterModel } from "../../models"
import '../numbers-container/number.css'
interface CharacterCardProps {
  character: CharacterModel
  onClick: (character: CharacterModel) => void
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick }) => {
  return (
  <div className='container' onClick={() => onClick(character)}>
    <h3>{character.name}</h3>
    <img src={character.image} alt={character.name} />
  </div>
  )
}