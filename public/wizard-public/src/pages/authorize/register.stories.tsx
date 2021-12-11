import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RegisterForm } from './register';

export default {
    title: 'Pages/Register',
    component: RegisterForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => {

    return <div>
        <RegisterForm {...args} />
    </div>
};

export const Primary = Template.bind({});
Primary.args = {
};
