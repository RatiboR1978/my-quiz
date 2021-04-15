import React from 'react';
import classes from './FinishedQuiz.module.css'
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {
  return (
    <div>
      <h1>Результат теста</h1>
      <div className={classes.FinishedQuiz}>
        {props.questions.map((item, i) => {
          if (item.replied) {
            return <p key={i} className={classes.FinishedText}><strong>{i + 1}.</strong> {item.questions} - <i className={"fa fa-check " + classes.succes}/></p>;
          } else {
            return <p key={i} className={classes.FinishedText}><strong>{i + 1}.</strong> {item.questions} - <i className={"fa fa-times " + classes.error}/></p>;
          }
        })}
        <p className={classes.FinishedTextResult}>Правильных
          ответов {props.correctAnswers} из {props.questions.length}</p>
        <Button onClick={props.reset} type='primary'>Повторить</Button>
        <Button type='success'>Перейти в список тестов</Button>
      </div>
    </div>
  )
}

export default FinishedQuiz;
