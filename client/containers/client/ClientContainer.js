import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

// Components
import ClientForm from '../../components/clients/ClientForm';
import ClientTable from '../../components/clients/ClientTable';

import { CLIENTS } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';

const styles = {
  spacingDivider: {
    margin: '20px 0 20px 0'
  }
};

class ClientContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newOne: false,
      btnText: 'Create new client'
    };
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchAll(CLIENTS);
  }

  submitForm(formProps) {
    this.props.actions.submitForm(CLIENTS, formProps);
  }

  createNewOne = (e, newOne, btnText) => {
    e.preventDefault();
    this.setState({ newOne, btnText });
  };

  render() {
    const { btnText, newOne } = this.state;
    const { classes, clients } = this.props;

    return (
      <>
        {!newOne ? (
          <div>
            <Button variant="contained" onClick={(e) => this.createNewOne(e, true, 'Back')}>
              {btnText} ➕
            </Button>
            <Divider className={classes.spacingDivider} />
            {clients && <ClientTable rows={clients.data} />}
          </div>
        ) : (
          <div>
            <Button variant="contained" onClick={(e) => this.createNewOne(e, false, 'Create new client')}>
              {btnText}
            </Button>
            <Divider className={classes.spacingDivider} />
            <ClientForm onSubmit={this.submitForm} />
          </div>
        )}
      </>
    );
  }
}

/**
 * Map the actions to props.
 */
const mapStateToProps = (state) => ({
  clients: state.crud.client
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ClientContainer));
