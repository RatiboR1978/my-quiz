import React, {Component} from 'react';
import classes from './NavPanel.module.css'

const links = ['Ссылка1', 'Ссылка2', 'Ссылка3'];

class NavPanel extends Component {
  renderLinks() {
    return links.map((item, i) => <li key={i}><a href="">{item}</a></li>)
  }

  render() {
    const cls = [
      classes.NavPanel,
      (this.props.isOpen) ? classes.open: ''
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
