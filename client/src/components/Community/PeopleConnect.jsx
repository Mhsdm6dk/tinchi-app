import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Community } from "./Community";

class PeopleConnect extends Component
{
    render ()
    {
        return (
            <div className="container d-flex align-items-center flex-wrap mt-3 flex-column">
                <div className="row mb-3">
                    <Community
                        img='./svg/Community.svg'
                        heading='Community'
                        body='Connect with people who are in the same boat as you and build a community!'
                    />
                </div>
                <div className="row mb-3">
                    <Community
                        img='./svg/MedicalProfessional.svg'
                        heading='Medical Professional'
                        body='Get in touch with experienced Diabetologists, Physicians and Psychologists.'
                    />
                </div>
                <div className="row mb-3">
                    <Community
                        img='./svg/MedicalEducators.svg'
                        heading='Medical Educators'
                        body='Ask as many questions as you want about diabetes and connect with a Medical Educator.'
                    />
                </div>
                <div className="row mb-3">
                    <Community
                        img='./svg/PersonalTrainer.svg'
                        heading='Personal Trainer'
                        body='Depend on a professional to motivate you everyday!'
                    />
                </div>
            </div>
        );
    }
}

export default PeopleConnect;