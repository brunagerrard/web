import React from 'react';

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';

export interface Teacher {
    id: string;
    avatar: string;
    bio: string;
    cost: string;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    &pound;&#47;hour:
                    <strong>&pound; {teacher.cost}</strong>
                </p>
                <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Contact me here!
                </a>

            </footer>
        </article>

  )
}

export default TeacherItem;