import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignIn from '../components/SignIn/sign-in';
import { getUser } from '../actions/index';

class SignInContainer extends Component {
  static propTypes = {
    user: PropTypes.object,
    uploadUser: PropTypes.func
  }

  uploadUser = (user) => {
    this.props.uploadUser(user);
    this.props.history.push('/main');
  }

  render() {
    return (
      <div>
        <SignIn uploadUser={this.uploadUser} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadUser: (newUser) => {
      dispatch(getUser(newUser));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
