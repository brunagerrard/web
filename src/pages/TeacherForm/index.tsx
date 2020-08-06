import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';

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

                    <div className="input-block">
                        <label htmlFor="name">Full name:</label>
                        <input type="text" id="name"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="avatar">Avatar:</label>
                        <input type="text" id="avatar"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="whatsapp">WhatsApp:</label>
                        <input type="text" id="whatsapp"/>
                    </div>
                </fieldset>
            </main>
        </div>
        )
}

export default TeacherForm;