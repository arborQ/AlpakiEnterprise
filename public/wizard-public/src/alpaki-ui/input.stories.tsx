import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './input';

export default {
    title: 'AlpakiUI/Input',
    component: Input,
    argTypes: {
        onChange: { action: 'changed' } 
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: 'test value',
    label: 'tes label'
};
