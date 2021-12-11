import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
    title: 'AlpakiUI/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' } 
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "test primary"
};

export const Processing = Template.bind({});
Processing.args = {
    children: "click for processing",
    onClick: () => new Promise(resolve => {
        setTimeout(() => resolve(1), 1000);
    })
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: "I'm disabled",
    disabled: true
};
