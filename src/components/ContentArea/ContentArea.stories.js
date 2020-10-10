import React from 'react';

import ContentArea from './index';
import * as CardsStories from '../AppointmentCard/AppointmentCard.stories';

export default {
    component: ContentArea,
    title: 'ContentArea'
}

const Template = (args) => <ContentArea {...args} />;

export const Default = Template.bind({});
Default.args = {
    appointmentsDataList: [
        { ...CardsStories.Default.args },
        { ...CardsStories.Default.args },
        { ...CardsStories.Default.args },
        { ...CardsStories.Default.args },
        { ...CardsStories.Default.args },
        { ...CardsStories.Default.args }
    ]
};