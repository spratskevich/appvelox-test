import React from 'react';

import AppointmentCard from './index';

export default {
    component: AppointmentCard,
    title: 'AppointmentCard'
};

const Template = args => <AppointmentCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    dateTime: 'Понедельник 15.06.20 | 15:30',
    institutionName: 'СПБ ГБУЗ "Городская поликлиника №25"',
    address: 'пр. Солидарности, д. 1, к. 1, лит. А',
    medicInfo: {
        name: 'Малушко Т. Н.',
        specialization: 'Хирургия',
        avatarImg: '/image7.png'
    }
};