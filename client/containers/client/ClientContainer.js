import React, { Component } from 'react';

import ClientForm from '../../components/clients/ClientForm';

class ClientContainer extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Submit the form.
   *
   * @param {object} formProps
   */
  submitForm(formProps) {
    this.props.actions.submitForm('', formProps);
  }

  render() {
    return <ClientForm onSubmit={this.submitForm} />;
  }
}

export default ClientContainer;
