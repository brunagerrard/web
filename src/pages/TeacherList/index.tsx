import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(event: FormEvent) {
        event.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are our availabe teachers.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject" 
                        label="Choose a subject"
                        value={subject}
                        onChange={(event) => { setSubject(event.target.value) }}
                        options={[
                            { value: 'Leadership', label: 'Leadership'},
                            { value: 'Rage', label: 'Rage'},
                            { value: 'Motivation', label: 'Motivation'},
                            { value: 'Dribbling', label: 'Dribbling'},
                            { value: 'Keeping your Cool', label: 'Keeping your Cool'},
                            { value: 'No-look Goals', label: 'No-look Goals'},
                        ]} 
                    />
                    
                    <Select 
                        name="week_day" 
                        label="Choose a day"
                        value={week_day}
                        onChange={(event) => { setWeekday(event.target.value) }}
                        options={[
                            { value: '0', label: 'Sunday'},
                            { value: '1', label: 'Monday'},
                            { value: '2', label: 'Tuesday'},
                            { value: '3', label: 'Wednesday'},
                            { value: '4', label: 'Thursday'},
                            { value: '5', label: 'Friday'},
                            { value: '6', label: 'Saturday'},
                        ]} 
                    />

                    <Input 
                        type="time" 
                        name="time" 
                        label="Time" 
                        value={time}
                        onChange={(event) => { setTime(event.target.value) }}    
                    />

                    <button type="submit">
                        Go
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    )
}

export default TeacherList;