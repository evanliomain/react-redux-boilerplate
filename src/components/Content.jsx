import React, { Component, PropTypes } from 'react';

import HeaderContainer from '../containers/HeaderContainer';

import { className } from './Content.less';


import { logo } from './Logo';


export class Content extends Component {

  render() {
    return <div className={className}>
      <HeaderContainer logo={logo}>
        React Redux boilerplate {this.props.scroll}
      </HeaderContainer>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste officia cum ratione, sed modi possimus, odio odit voluptatum quaerat id fuga, ad nulla consectetur eos ipsam quod deleniti porro soluta.
      </div>
    </div>;
  }

  handleScroll(event) {
    this.props.onScrollChange(event.srcElement.body.scrollTop);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
}

Content.propTypes = {
  scroll         : PropTypes.number,
  onScrollChange : PropTypes.func.isRequired
};
