import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner } from './spinner';

export default {
    title: 'AlpakiUI/Spinner',
    component: Spinner,
    argTypes: {
    },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 48
};

