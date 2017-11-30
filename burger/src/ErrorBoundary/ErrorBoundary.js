import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errMsg: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errMsg: error
    })
  }

  render(){
    if(this.state.hasError){
      return (<h1>{this.state.errMsg}</h1>);
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;