import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './card';

export default {
    title: 'AlpakiUI/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {

    return <div>
        <Card {...args} />
    </div>
};

export const Primary = Template.bind({});
Primary.args = {
    children: "test primary"
};
