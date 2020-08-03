import React from 'react';

import { Link } from 'react-router-dom';

import goBackIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

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
      </div>
    </header>
  )
}

export default PageHeader;