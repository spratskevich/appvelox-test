import React from 'react';

import Navigation from './index';

export default {
    component: Navigation,
    title: 'Navigation'
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'asdf'
};