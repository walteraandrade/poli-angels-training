
import './number.css'

interface NumberCardProps {
  value: string
}

const NumberCard: React.FC<NumberCardProps> = ({ value }) => {
  return (
    <div className='container'>
      <h4>{value}</h4>
    </div>
  )
}

export default NumberCard;