import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CLIENTS } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';

import { pink, orange } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import { Business, Face } from '@material-ui/icons';

import SummaryBox from './SummaryBox';

class Dashboard extends Component {
  componentDidMount() {
    this.props.actions.fetchAll(CLIENTS);
  }

  render() {
    const { clients } = this.props;

    return (
      <div>
        <h1 style={{ paddingBottom: '15px' }}>Dashboard</h1>
        {clients && (
          <Grid container spacing={4} style={{ marginBottom: '15px' }}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <SummaryBox Icon={Business} color={pink[600]} title="Total Clients" value={clients.data.length} />
            </Grid>
          </Grid>
        )}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
