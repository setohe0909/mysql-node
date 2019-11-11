import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ClientForm from '../../components/clients/ClientForm';

import { CLIENTS } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';

class ClientContainer extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(formProps) {
    this.props.actions.submitForm(CLIENTS, formProps);
  }

  render() {
    return <ClientForm onSubmit={this.submitForm} />;
  }
}

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(ClientContainer);
