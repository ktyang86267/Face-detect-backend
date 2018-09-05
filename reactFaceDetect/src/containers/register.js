import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Register from '../components/Register/register';
import { getUser } from '../actions';

class RegisterContainer extends Component {
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
        <Register uploadUser={this.uploadUser} />
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
