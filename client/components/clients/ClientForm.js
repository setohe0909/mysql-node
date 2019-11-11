import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

// Import custom components
import renderText from '../common/form/renderText';

const styles = {
  card: {
    padding: 20,
    overflow: 'auto'
  },
  cardHeader: {
    textAlign: 'left'
  },
  btnDiv: {
    textAlign: 'center'
  },
  btn: {
    margin: '21px',
    float: 'right'
  }
};

const ClientForm = (props) => {
  const { handleSubmit, onSubmit, classes } = props;

  return (
    <div>
      <Card>
        <CardHeader className={classes.cardHeader} title="Create new client:" />
        <CardContent>
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4} style={{ marginBottom: '15px' }}>
              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Field className={classes.formRow} type="text" name="nit" component={renderText} label="Nit:" />
              </Grid>

              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Field type="text" name="full_name" component={renderText} label="Full Name:" />
              </Grid>

              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Field type="text" name="address" component={renderText} label="Address:" />
              </Grid>

              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Field type="number" name="phone" component={renderText} label="Phone:" />
              </Grid>

              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Field type="text" name="city" component={renderText} label="City:" />
              </Grid>

              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Field type="text" name="state" component={renderText} label="State:" />
              </Grid>

              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Field type="text" name="country" component={renderText} label="Country:" />
              </Grid>

              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Field type="number" name="credit_limit" component={renderText} label="Credit Limit:" />
              </Grid>

              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Field type="number" name="available_credit" component={renderText} label="Available Credit:" />
              </Grid>

              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Field type="number" name="visit_percentage" component={renderText} label="Visit Percentage:" />
              </Grid>

              <Grid item lg={6} sm={6} xl={3} xs={12}>
                <Field type="number" name="visits" component={renderText} label="Visits:" />
              </Grid>
            </Grid>
            <div className={classes.btnDiv}>
              <Button className={classes.btn} type="submit" variant="contained" color="primary">
                Create
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const validateSignUp = (values) => {
  const errors = {};

  const requiredFields = [
    'nit',
    'full_name',
    'address',
    'phone',
    'city',
    'state',
    'country',
    'credit_limit',
    'available_credit',
    'visit_percentage',
    'visits'
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = '(The ' + field + ' field is required.)';
    }
  });

  return errors;
};

ClientForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default reduxForm({
  form: 'ClientForm', // a unique identifier for this form
  validate: validateSignUp // ←Callback function for client-side validation
})(withStyles(styles)(ClientForm));
