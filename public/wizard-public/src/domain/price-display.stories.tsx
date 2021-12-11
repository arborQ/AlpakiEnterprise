import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PriceDisplay } from './price-display';

export default {
    title: 'Domain/PriceDisplay',
    component: PriceDisplay,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PriceDisplay>;

const Template: ComponentStory<typeof PriceDisplay> = (args) => {

    return <div>
        <PriceDisplay {...args} />
    </div>
};

export const Primary = Template.bind({});
Primary.args = {
    price: 1,
    currency: "PLN"
};
