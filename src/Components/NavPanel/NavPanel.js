import React, {Component} from 'react';
import classes from './NavPanel.module.css'
import {NavLink} from 'react-router-dom'

const links = [
  {
    title: 'Список тестов',
    link: '/'
  },
  {
    title: 'Создать тест',
    link: '/quiz-creator'
  },
  {
    title: 'Авторизация',
    link: '/auth'
  }];

class NavPanel extends Component {
  renderLinks() {
    return links.map((item, i) => <li key={i}><NavLink to={item.link} exact activeClassName={classes.active}>{item.title}</NavLink></li>)
  }

  render() {
    const cls = [
      classes.NavPanel,
      (this.props.isOpen) ? classes.open : ''
    ];
    return (
      <div className={cls.join(' ')}>
        <ul>
          {this.renderLinks()}
        </ul>
      </div>
    )
  }
}

export default NavPanel;
