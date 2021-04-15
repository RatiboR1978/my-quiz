import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = (props) => {
  let cls = [classes.AnswerItem];
  if (props.answerState) {
    cls.push(classes[props.answerState])
  }
  return (
    <li className={cls.join(' ')}
        onClick={() => props.answerHandler(props.index, props.idAnswer, props.correctAnswer)}>{props.answer}</li>
  )
}
export default AnswerItem;
