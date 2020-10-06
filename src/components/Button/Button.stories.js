import React from 'react';

import Button from './index';

export default {
    component: Button,
    title: 'Button'
}

const Template = (args) => <Button {...args} />;

export const Button1 = Template.bind({});
Button1.args = {
    title: 'Отменить',
    width: '98px',
    height: '40px'
};

export const Button2 = Template.bind({});
Button2.args = {
    title: 'Подать заявку',
    width: '150px',
    height: '40px'
};