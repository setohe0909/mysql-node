import React from 'react';
import { pink, orange } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import { Business, Face } from '@material-ui/icons';

import SummaryBox from './SummaryBox';
import Product from './Product';

const data = {
  recentProducts: [
    { id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.' },
    { id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System' },
    { id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G ' },
    { id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop' }
  ]
};

const Dashboard = () => {
  return (
    <div>
      <h2 style={{ paddingBottom: '15px' }}>Dashboard</h2>

      <Grid container spacing={4} style={{ marginBottom: '15px' }}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SummaryBox Icon={Business} color={pink[600]} title="Total Clients" value="1500k" />
        </Grid>

        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <SummaryBox Icon={Face} color={orange[600]} title="Total users" value="248" />
        </Grid>
      </Grid>

      <Grid container spacing={24} style={{ marginBottom: '15px' }}>
        <Grid item xs>
          <Product data={data.recentProducts} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
