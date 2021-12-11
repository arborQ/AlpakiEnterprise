import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from './login';

export default {
    title: 'Pages/Login',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => {

    return <div>
        <LoginForm {...args} />
    </div>
};

export const Primary = Template.bind({});
Primary.args = {
};
