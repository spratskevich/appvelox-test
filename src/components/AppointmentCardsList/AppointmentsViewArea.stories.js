import React from 'react';

import AppointmentsViewArea from './index';
import * as CardsStories from '../AppointmentCard/AppointmentCard.stories';

export default {
    component: AppointmentsViewArea,
    title: 'AppointmentCardsList',

};

const Template = args => <AppointmentsViewArea {...args} />;

export const Default = Template.bind({});
Default.args = {
    cardsList: [
        { ...CardsStories.Default.args },
        { ...CardsStories.Default.args },
        { ...CardsStories.Default.args },
        { ...CardsStories.Default.args },
        { ...CardsStories.Default.args },
        { ...CardsStories.Default.args },
    ]
}

export const WithoutScroll = Template.bind({});
WithoutScroll.args = {
    cardsList: [
        { ...CardsStories.Default.args },
        { ...CardsStories.Default.args },
        { ...CardsStories.Default.args }
    ]
}