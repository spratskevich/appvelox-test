import React from 'react';

import InformationCard from './index';
import CardsTextArea from './CardsTextArea.js';
import PatientInfoCardTextArea from './PatientInfoCardTextArea.js';

import PatientInfoIcon from '../../assets/images/PatientInfoIcon.svg';
import AddInfoIcon from '../../assets/images/AddInfoIcon.svg';
import TestResultsIcon from '../../assets/images/TestResultsIcon.svg';
import AppointmentsHystoryIcon from '../../assets/images/AppointmentsHystoryIcon.svg';

export default {
    component: InformationCard,
    title: 'InformationCard'
};

const Template = args => <InformationCard {...args}/>

export const PatientInfoCard = Template.bind({});
PatientInfoCard.args = {
    cardImg: PatientInfoIcon,
    infoElement: <PatientInfoCardTextArea/>
}

export const AddInfoCard = Template.bind({});
AddInfoCard.args = {
    cardImg: AddInfoIcon,
    infoElement: <CardsTextArea title="Добавить  информацию" text="Добавляйте в свою электронную медицинскую карту новые данные"/>
}

export const TestResultsCard = Template.bind({});
TestResultsCard.args = {
    cardImg: TestResultsIcon,
    infoElement: <CardsTextArea title="Результаты анализов" text="Вы можете узнать здесь результаты своих анализов"/>
}

export const AppointmentsHystoryCard = Template.bind({});
AppointmentsHystoryCard.args = {
    cardImg: AppointmentsHystoryIcon,
    infoElement: <CardsTextArea title="История приемов" text="Вся информация о полученных услугах за все время хранится здесь"/>
}