import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../App';
import { getUser } from '../actions/index';

class AppContainer extends Component {
  static propTypes = {
    user: PropTypes.object,
    onGetUser: PropTypes.func
  }
  
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    }
  }

  updateUserEntries = (count) => {
    const { user } = this.props;
    const newUser = { ...user, entries: count };
    this.props.onGetUser(newUser);
  }

  render() {
    return (
      <div>
        <App updateUserEntries={this.updateUserEntries} user={this.props.user} />
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
    onGetUser: (newUser) => {
      console.log(newUser);
      dispatch(getUser(newUser));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
