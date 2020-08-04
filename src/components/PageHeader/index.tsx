import React from 'react';

import { Link } from 'react-router-dom';

import goBackIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import './styles.css'

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
          <Link to="/">
              <img src={goBackIcon} alt="Go back" className="small-icons"/>
          </Link>
          <img src={logoImg} alt="GoLearn logo"/>
      </div>

      <div className="header-content">
          <strong>{props.title}</strong>
          {props.children}
      </div>
    </header>
  )
}

export default PageHeader;