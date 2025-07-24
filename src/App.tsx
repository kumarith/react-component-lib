import  {useState} from 'react'
import { Input } from './index';
import { KButton } from './components/Button/Button';

const App = () => {
const [text, setText] = useState('')

  return (
    <div>
      <h1>Testingng component library</h1>
      <Input
        value={text}
        onChange={setText}
        placeholder="Type something..."
      />
      <KButton
        onClick={() => alert(`You typed: ${text}`)}
        label="Show Text"
      />

      <KButton
        onClick={() => console.log('Button clicked')}
        label="Console Log"
      />
     
    </div>
  )
}

export default App