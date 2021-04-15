import React from 'react';
import classes from './NavigationBtn.module.css'

const NavigationBtn = (props) => {
  let cls = [
    classes.NavigationBtn,
    'fa fa-2x',
    (props.isOpen) ? 'fa-times ' + classes.close: 'fa-align-justify'
  ];

  return (
    <div>
      <i className={cls.join(' ')} onClick={props.toggleHandlerBtn}/>
    </div>
  )
}

export default NavigationBtn;
