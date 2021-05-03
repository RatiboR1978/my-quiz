import React, {Component} from 'react';
import classes from "./Layout.module.css";
import NavigationBtn from "../../Components/NavigationBtn/NavigationBtn";
import NavPanel from "../../Components/NavPanel/NavPanel";
import ShadowBlock from "../../Components/ShadowBlock/ShadowBlock";

class Layout extends Component {
  state = {
    isOpenNav: false
  }

  toggleHandlerBtn = () => {
    this.setState({
      isOpenNav: !this.state.isOpenNav
    });
  }

  render() {
    return (
      <div className={classes.Layout}>
        <NavigationBtn isOpen={this.state.isOpenNav} toggleHandlerBtn={this.toggleHandlerBtn}/>
        <NavPanel isOpen={this.state.isOpenNav}/>
        <ShadowBlock isOpen={this.state.isOpenNav} toggleHandlerBlock={this.toggleHandlerBtn}/>
          <main>{this.props.children}</main>
      </div>
    )
  }
}

export default Layout;
