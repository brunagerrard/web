import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.png';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        {
            week_day: 0, 
            from: '', 
            to: ''
        },
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(event: FormEvent) {
        event.preventDefault();

        api.post('/classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert("You're all set!");
            history.push('/');
        }).catch(() => {
            alert("Something went wrong, try again.");
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Imparting knowledge is the best!"
                description="get started by filling in this form :)"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>

                        <legend>Your information</legend>

                        <Input 
                            name="name" 
                            label="Full name:" 
                            value={name} 
                            onChange={(event) => { setName(event.target.value) }} 
                        />
                        <Input 
                            name="avatar" 
                            label="Link to your avatar:" 
                            value={avatar} 
                            onChange={(event) => { setAvatar(event.target.value) }} 
                        />
                        <Input 
                            name="whatsapp" 
                            label="WhatsApp ID:" 
                            value={whatsapp} 
                            onChange={(event) => { setWhatsapp(event.target.value) }} 
                        />
                        <Textarea 
                            name="bio" 
                            label="Tell me a little bit about yourself." 
                            value={bio} 
                            onChange={(event) => { setBio(event.target.value) }} 
                        />

                    </fieldset>

                    <fieldset>
                        
                        <legend>About your class</legend>

                        <Select 
                            name="subject" 
                            label="Subject you'll teach:"
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
                        <Input 
                            name="cost" 
                            label="Cost per hour:"
                            value={cost} 
                            onChange={(event) => { setCost(event.target.value) }} 
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Available hours:
                            <button type="button" onClick={addNewScheduleItem}>
                                + add options
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select 
                                        name="week_day" 
                                        label="Choose a day"
                                        value={scheduleItem.week_day}
                                        onChange={event => setScheduleItemValue(index, 'week_day', event.target.value)}
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
                                        name="from" 
                                        label="From" 
                                        value={scheduleItem.from}
                                        type="time" 
                                        onChange={event => setScheduleItemValue(index, 'from', event.target.value)}
                                    />
                                    <Input 
                                        name="to" 
                                        label="To" 
                                        value={scheduleItem.to}
                                        type="time" 
                                        onChange={event => setScheduleItemValue(index, 'to', event.target.value)}
                                    />
                                </div>
                            );
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Warning sign"/>
                            Make sure to fill in all the data, please.
                        </p>
                        <button type="submit">
                            Save
                        </button>
                    </footer>
                </form>
            </main>
        </div>
        )
}

export default TeacherForm;