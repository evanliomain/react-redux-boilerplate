import React, { Component, PropTypes } from 'react';

import { className } from './Content.less';

export class Content extends Component {

  render() {
    return <div className={className}>Hello World {this.props.scroll}</div>;
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
  scroll         : React.PropTypes.number,
  onScrollChange : PropTypes.func.isRequired
};
