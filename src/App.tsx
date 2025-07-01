import  {useState} from 'react'
import { Button, Input } from './index';

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
      <Button
        onClick={() => alert(`You typed: ${text}`)}
        label="Show Text"
      />

      <Button
        onClick={() => console.log('Button clicked')}
        label="Console Log"
      />
     
    </div>
  )
}

export default App