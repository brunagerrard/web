import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are our availabe teachers.">
                <form id="search-teachers">
                    <Input name="subject" label="Subject" />
                    <Input name="weekday" label="Weekday" />
                    <Input type="time" name="time" label="Time" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;