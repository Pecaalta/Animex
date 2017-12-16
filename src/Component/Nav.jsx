import React, { Component } from 'react';

//--  Sector Nav  -->
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Search  : ""
    }
  }
  handleKeyPress = (e) => {
    if (e.key === 'Enter') ()=>{this.props.Load(e.target.value)}
  }
  render(){
    return (
      <nav id={"Nav"} className="ActiveTop">
        <div className="Logo">{this.props.Title}</div>
        <div className="header">
          <input type="Text" className={"Search_input "+this.state.Search }  onKeyPress={this.handleKeyPress}/>
          <a onClick={()=>{this.setState({ Search: "active" })}} className="material-icons">search</a>
        </div>
      </nav>
    )
  }
};
export default Nav;