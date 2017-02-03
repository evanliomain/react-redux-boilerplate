import React, { Component, PropTypes } from 'react';

import { className, logoWrapper, titleWrapper, contentContainer, toolbar }
from './Header.less';


export class Header extends Component {

  render() {
    return <header
      style={{
        transform : `translate3d(0px, ${this.props.headerTranslate}px, 0px)`
      }}
      className={className}>
      <div
        className={contentContainer}>
        <div
          className={toolbar}>
          <div
            style={{
              width     : `${this.props.headerLogoWrapperWidth}px`,
              transform : `translateY(${this.props.headerLogoWrapperTranslate}px)`
            }}
            className={logoWrapper}>
            <div
              style={{
                transformOrigin : 'bottom left',
                transform       : `scale(${this.props.headerLogoScale})`
              }}>
              {this.props.logo}
            </div>
          </div>
          <div className={titleWrapper}>
            <h1 style={{
              transformOrigin : 'bottom left',
              transform       : `scale(${this.props.headerTitleScale})`
            }}>
              {this.props.children}
            </h1>
          </div>
        </div>
      </div>
    </header>;
  }
}

            // <img
            //   style={{
            //     transformOrigin : 'bottom left',
            //     transform       : `scale(${this.props.headerLogoScale})`
            //   }}
            //   className="logo"
            //   src={logoSvg}
            //   alt="logo"/>


Header.propTypes = {
  logo : PropTypes.node,

  headerTranslate            : PropTypes.number,
  headerLogoScale            : PropTypes.number,
  headerLogoWrapperWidth     : PropTypes.number,
  headerLogoWrapperTranslate : PropTypes.number,
  headerTitleScale           : PropTypes.number
};
