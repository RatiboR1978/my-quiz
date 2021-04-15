import React from 'react';
import classes from './ShadowBlock.module.css'

const ShadowBlock = (props) => {
  let cls = [
    classes.ShadowBlock,
    (props.isOpen) ? classes.close : null
  ];

  return (
    <div className={cls.join(' ')} onClick={props.toggleHandlerBlock}></div>
  )
}

export default ShadowBlock;
