import React from 'react';
import classes from './AnswerList.module.css';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = (props) => {
  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((item, i) => {
        return <AnswerItem answer={item}
                           key={i}
                           index={props.index}
                           idAnswer={i}
                           answerHandler={props.answerHandler}
                           correctAnswer={props.correctAnswer}
                           answerState={props.answerState ? props.answerState[i] : null}/>
      })}
    </ul>
  )
}

export default AnswersList;
