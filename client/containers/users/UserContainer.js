import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { USERS } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';

// Components
import UsersTable from '../../components/users/UsersTable';

class UserContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.fetchAll(USERS);
  }

  render() {
    const { users } = this.props;

    return <div>{users && <UsersTable rows={users.data} />}</div>;
  }
}

/**
 * Map the actions to props.
 */
const mapStateToProps = (state) => ({
  users: state.crud.users
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
