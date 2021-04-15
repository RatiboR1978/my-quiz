import React, {Component} from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from "../../Components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../Components/FinishedQuiz/FinishedQuiz";
import NavigationBtn from "../../Components/NavigationBtn/NavigationBtn";
import NavPanel from "../../Components/NavPanel/NavPanel";
import ShadowBlock from "../../Components/ShadowBlock/ShadowBlock";

class Quiz extends Component {
  state = {
    endOfQuiz: false,
    answerState: null,
    correctAnswers: 0,
    isOpenNav: false,
    listQuestions: [
      {
        showQuestion: true,
        questions: 'Какой цвет у неба?',
        correctAnswer: 2,
        answers: ['Черного', 'Розового', 'Синего'],
        btnAnswerShow: false,
        answerState: null,
        replied: 0
      },
      {
        showQuestion: false,
        questions: 'Столица России?',
        correctAnswer: 1,
        answers: ['Ереван', 'Москва', 'Вашингтон'],
        btnAnswerShow: false,
        answerState: null,
        replied: 0
      },
      {
        showQuestion: false,
        questions: 'Когда наступает новый год?',
        correctAnswer: 0,
        answers: ['1 января', '8 марта', '23 февраля'],
        btnAnswerShow: false,
        answerState: null,
        replied: 0
      }
    ]
  }

  reset = () => {
    let arr = [...this.state.listQuestions];
    arr.map((item, i) => {
      item.replied = 0;
      (i === 0) ? item.showQuestion = true : item.showQuestion = false;
      return item
    })
    this.setState({
      endOfQuiz: false,
      answerState: null,
      listQuestions: arr,
      correctAnswers: 0
    });
  }

  goToNextQuestion = (i) => {
    const timeout = setTimeout(() => {
      if (i + 1 === this.state.listQuestions.length) {
        this.setState({endOfQuiz: true});
      } else {
        let arr = [...this.state.listQuestions];
        arr[i + 1].showQuestion = true;
        arr[i].showQuestion = false;
        this.setState({listQuestions: arr});
        this.setState({answerState: null});
      }
      window.clearTimeout(timeout)
    }, 500)
  }

  onAnswerClickHandler = (i, idAnswer, correctAnswer) => {
    if (idAnswer === correctAnswer) {
      let arr = [...this.state.listQuestions];
      arr[i].replied = 1;
      let result = this.state.correctAnswers;
      result++;
      this.setState({
        answerState: {
          [idAnswer]: 'success'
        },
        listQuestions: arr,
        correctAnswers: result
      });
      this.goToNextQuestion(i);
    } else {
      this.setState({
        answerState: {
          [idAnswer]: 'error'
        }
      });
      this.goToNextQuestion(i);
    }
  }

  toggleHandlerBtn = () => {
    this.setState({
        isOpenNav: !this.state.isOpenNav
    });
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <NavigationBtn isOpen={this.state.isOpenNav} toggleHandlerBtn={this.toggleHandlerBtn}/>
        <NavPanel isOpen={this.state.isOpenNav}/>
        <ShadowBlock isOpen={this.state.isOpenNav} toggleHandlerBlock={this.toggleHandlerBtn}/>
        <div className={classes.QuizWraper}>
          {(this.state.endOfQuiz) ?
            <FinishedQuiz questions={this.state.listQuestions}
                          reset={this.reset}
                          correctAnswers={this.state.correctAnswers}/> :
            <ActiveQuiz questions={this.state.listQuestions}
                        answerHandler={this.onAnswerClickHandler}
                        answerState={this.state.answerState}/>}
        </div>
      </div>
    );
  }
}

export default Quiz;
