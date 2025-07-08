import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState } from 'react';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: (args) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
      <Form
        {...args}
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Form submitted!', { username, password });
        }}
      >
        <div className="mb-4">
          <Input
            value={username}
            onChange={setUsername}
            placeholder="Username"
          />
        </div>

        <div className="mb-4">
          <Input
            value={password}
            onChange={setPassword}
            placeholder="Password"
          />
        </div>

        <Button label="Submit" />
      </Form>
    );
  },
  args: {
    className: '',
  },
};

export const WithValidation: Story = {
  render: (args) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return (
      <Form
        {...args}
        onSubmit={(e) => {
          e.preventDefault();
          if (!username || !password) {
            setError('Both fields are required!');
          } else {
            setError('');
            console.log('Form submitted!', { username, password });
            // Optionally clear fields:
            // setUsername('');
            // setPassword('');
          }
        }}
      >
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Username
          </label>
          <Input
            value={username}
            onChange={setUsername}
            placeholder="Username"
            type="text"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <Input
            value={password}
            onChange={setPassword}
            placeholder="Password"
            type="password"
          />
        </div>

        {error && (
          <div className="text-sm text-red-600 mb-4 border border-red-300 bg-red-100 p-2 rounded">
            {error}
          </div>
        )}

        <Button label="Submit" />
      </Form>
    );
  },
  args: {
    className: '',
  },
};
