import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeTheme } from '../redux/actions';

import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';

class Header extends Component {
  render() {
    const { theme, changeTheme } = this.props;

    return (
      <header className="flex justify-between items-center">
        <h1 className="header-title">TODO</h1>
        {theme === 'light' ? (
          <img
            src={moon}
            alt="moon icon"
            onClick={changeTheme}
            className="header-icon"
          />
        ) : (
          <img
            src={sun}
            alt="sun icon"
            onClick={changeTheme}
            className="header-icon"
          />
        )}
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.controlTheme.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: () => dispatch(changeTheme()),
});

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
