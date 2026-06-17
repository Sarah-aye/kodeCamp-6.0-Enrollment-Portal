import React, { Component } from "react";

// class based component differ from functional components when accessing props "this" keyword must be applied to refer to the class context, where as in components the this keyword is not needed.

class ClassButton extends Component {
  render() {
    const { title, onclick, className = "", disabled = false } = this.props;

    return (
      <button onClick={onclick} className={className} disabled={disabled}>
        {title}
      </button>
    );
  }
}

export default ClassButton;
