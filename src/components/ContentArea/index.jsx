import React, { useState } from 'react';

import StyledContentArea from './StyledContentArea.js';
import AppointmentCard from '../AppointmentCard';
import InformationCard from '../InformationCard/index';
import CardsTextArea from '../InformationCard/CardsTextArea.js';
import PatientInfoCardTextArea from '../InformationCard/PatientInfoCardTextArea.js';
import AppointmentsCardsList from '../AppointmentCardsList';
import Calendar from '../Calendar';

import PatientInfoIcon from '../../assets/images/PatientInfoIcon.svg';
import AddInfoIcon from '../../assets/images/AddInfoIcon.svg';
import TestResultsIcon from '../../assets/images/TestResultsIcon.svg';
import AppointmentsHystoryIcon from '../../assets/images/AppointmentsHystoryIcon.svg';
import backToNotesArrow from '../../assets/images/backToNotesArrow.svg';

const ContentArea = (props) => {
    const { appointmentsDataList } = props;
    let [isDetailsVisible, showDetail] = useState(true);

    let content= (
        <>
            <header className="appointments-header">Записи на приём</header>
            {appointmentsDataList[0] ? <AppointmentCard {...appointmentsDataList[0]} top='49px' left='20px' positioned/>:null}
            {appointmentsDataList[1] ? <AppointmentCard {...appointmentsDataList[1]} top='49px' left='515px' positioned/>:null}
            <div className="cnt-detail">
                {appointmentsDataList.length > 2 ? 
                (<p>{`Ещё ${appointmentsDataList.length - 2} записи`}</p>) : null}
                {appointmentsDataList.length > 0 ? 
                (<button onClick={() => showDetail(true)}>Подробнее</button>) : null}
            </div>
                <InformationCard
                    cardImg={PatientInfoIcon}
                    infoElement={<PatientInfoCardTextArea/>}
                    top="292px" left="20px"/>
                <InformationCard
                    cardImg={AddInfoIcon}
                    infoElement={<CardsTextArea
                        title="Добавить  информацию"
                        text="Добавляйте в свою электронную медицинскую карту новые данные"/>}
                        top="292px" left="576px"/>
                <InformationCard
                    cardImg={TestResultsIcon}
                        infoElement={<CardsTextArea
                            title="Результаты анализов"
                            text="Вы можете узнать здесь результаты своих анализов"/>}
                            top="490px" left="20px"/>
                <InformationCard
                    cardImg={AppointmentsHystoryIcon}
                    infoElement={<CardsTextArea
                        title="История приемов"
                        text="Вся информация о полученных услугах за все время хранится здесь"/>}
                        top="490px" left="576px"/>
            <header className="e-card-header">Электронная карта</header>
        </>
    );;

    if(isDetailsVisible) {
        content = (
           <>
                <header className="back-to-notes" onClick={() => showDetail(false)}><img src={backToNotesArrow} alt="Back to notes"/>Мои записи</header>
                <AppointmentsCardsList cardsList={appointmentsDataList} top="47px" left="18px"/>
                <Calendar appointmentsDates={appointmentsDataList}/>
           </>
        );
    }

    return (
        <StyledContentArea>
            {content}
        </StyledContentArea>
    );
};

export default ContentArea;