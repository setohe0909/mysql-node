import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRandomColor } from '../../utils/commonUtil';
import { CLIENTS } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';

import { orange } from '@material-ui/core/colors';
import { Grid, Card, CardHeader } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

import { Business, Face } from '@material-ui/icons';

import { PieChart, Pie, Legend, Tooltip } from 'recharts';

import SummaryBox from './SummaryBox';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 }
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 }
];

const styles = {
  spacingDivider: {
    margin: '20px 0 20px 0'
  }
};

class Dashboard extends Component {
  componentDidMount() {
    this.props.actions.fetchAll(CLIENTS);
  }

  render() {
    const { clients, classes } = this.props;

    return (
      <div>
        <h1>Dashboard</h1>
        <Divider className={classes.spacingDivider} />
        {clients && (
          <Grid container spacing={4} style={{ marginBottom: '15px' }}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <SummaryBox Icon={Business} color={orange[600]} title="Total Clients" value={clients.data.length} />
            </Grid>
          </Grid>
        )}
        <Card>
          <CardHeader className={classes.cardHeader} title="Number of visits by city:" />
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx={200}
              cy={200}
              outerRadius={80}
              fill={getRandomColor()}
              label
            />
            <Pie
              dataKey="value"
              data={data02}
              cx={500}
              cy={200}
              innerRadius={40}
              outerRadius={80}
              fill={getRandomColor()}
            />
            <Tooltip />
          </PieChart>
        </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));
