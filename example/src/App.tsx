import React, { useState } from 'react';
import { Button, Input } from 'react-component-library';

export default function App() {
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: 20 }}>
      <h1>Testing My Component Library</h1>
      <Input 
        value={value} 
        onChange={setValue} 
        placeholder="Type here..." 
      />
      <Button label="Click me!" onClick={() => alert('Clicked!')} />
    </div>
  );
}
