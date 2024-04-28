import './keyboard.css'
import { dic_alphabet } from '../data/dictionnary'



type KeyboardProps = {
    keys: string[],
    activeLetter: string[],
    inactiveLetter: string[],
    addGuessLetter: (letter: string) => void,
    disabled: boolean,
    sign?: boolean
}

const Keyboard = ({
    keys,
    activeLetter,
    inactiveLetter,
    addGuessLetter,
    disabled = false,
    sign = false
}: KeyboardProps) => {
  return (
    <div className='grid grid-cols-6 lg:grid-cols-75 gap-1 lg:gap-2'>
      {keys.map((key: string) => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetter.includes(key);
        const src:string = dic_alphabet[key.toUpperCase()]
        return (
          <button
            onClick={() => addGuessLetter(key)}
            className={`btn
            ${isActive ? 'active' : ''}
            ${isInactive ? 'inactive' : ''}`}
            disabled={isInactive || isActive || disabled}
            key={key}>
              {
              !sign 
                ? key 
                : <img  src={src} alt={key} className='w-12 auto' />
              }
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard