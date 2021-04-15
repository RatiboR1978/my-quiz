import React from 'react';
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswerList/AnswerList";

const ActiveQuiz = (props) => {

  return (
    <div>
      <h1>Ответьте на все вопросы</h1>
      {
        props.questions.map((item, i) => {
          if (item.showQuestion) {
            return (
              <div className={classes.ActiveQuiz} key={i}>
                <p className={classes.Question}>
                  <span><strong>{i + 1}. </strong>{item.questions}</span>
                  <small>{i + 1} из {props.questions.length}</small>
                </p>
                <AnswersList answers={item.answers}
                             answerHandler={props.answerHandler}
                             correctAnswer={item.correctAnswer}
                             answerState={props.answerState}
                             index={i}/>
              </div>
            )
          }
          return null;
        })
      }
    </div>
  )
}

export default ActiveQuiz;
