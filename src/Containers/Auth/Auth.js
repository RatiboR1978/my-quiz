import React, {Component} from 'react';
import classes from "./Auth.module.css";
import Button from "../../Components/UI/Button/Button";
import Input from "../../Components/UI/Input/Input";

export default class Auth extends Component {
  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = (e) => {
    e.preventDefault()
  }

  validateControl (value, validation) {
    if (!validation) {
      return true;
    }

    const isValid = true;
  }

  onChangeHandler = (e, controlName) => {
    console.log(controlName)
    const formControls = {...this.state.formControls};
    const control = {...formControls[controlName]};
    control.value = e.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);
    formControls[controlName] = control;
    this.setState({
      formControls
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={(e) => this.onChangeHandler(e, controlName)}
        />
      )
    });
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            {this.renderInputs()}
            <Button
              type="success"
              onClick={this.loginHandler}>
              Войти
            </Button>
            <Button
              type="primary"
              onClick={this.registerHandler}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    )
  }
}