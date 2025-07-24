import type { Meta, StoryObj } from '@storybook/react';
import { KButton } from './Button';


const meta: Meta<typeof KButton> = {
  title: 'Components/Button',
  component: KButton,
};

export default meta;

type Story = StoryObj<typeof KButton>;

export const Primary: Story = {
  args: {
    label: 'Click me!',
  },
};


export const Secondary: Story = {
  args: {
    label: 'Submit',
  },
};
