import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta : Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,   
}

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        value: '',
        onChange: (value) => console.log("Changed!", value),
        placeholder: 'Type here...',
    },
};

     

