import React from 'react';

import Calendar from './index';

export default {
    component: Calendar,
    title: 'Calendar'
};

const Template = args => <Calendar {...args} />;
export const Default = Template.bind({});
Default.args = {
    appointmentsDates: ['7, October, 2020']
};