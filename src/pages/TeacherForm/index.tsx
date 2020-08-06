import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.png';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Imparting knowledge is the best!"
                description="get started by filling in this form :)"
            />

            <main>
                <fieldset>

                    <legend>Your information</legend>

                    <Input name="name" label="Full name:" />
                    <Input name="avatar" label="Link to your avatar:" />
                    <Input name="whatsapp" label="WhatsApp ID:" />

                </fieldset>

                <fieldset>
                    
                    <legend>About your class</legend>

                    <Input name="subject" label="Subject you'll teach:" />
                    <Input name="cost" label="Cost per hour:" />

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Warning sign"/>
                        Make sure to fill in all the data, please.
                    </p>
                    <button type="button">
                        Save
                    </button>
                </footer>
            </main>
        </div>
        )
}

export default TeacherForm;