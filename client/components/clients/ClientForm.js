import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';

// Import custom components
import renderText from '../common/form/renderText';

const styles = {
  root: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '15%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  card: {
    padding: 20,
    overflow: 'auto'
  },
  cardHeader: {
    textAlign: 'center'
  },
  btnDiv: {
    textAlign: 'center'
  },
  btn: {
    marginTop: 21
  }
};

const ClientForm = (props) => {
  const { handleSubmit, onSubmit, classes } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader} title="Create new client:" />
        <CardContent>
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <Field type="text" name="nit" component={renderText} label="Nit:" />
            <br />
            <Field type="text" name="full_name" component={renderText} label="Full Name:" />
            <br />
            <Field type="text" name="address" component={renderText} label="Address:" />
            <br />
            <Field type="text" name="phone" component={renderText} label="Phone:" />
            <br />
            <Field type="text" name="city" component={renderText} label="City:" />
            <br />
            <Field type="text" name="state" component={renderText} label="State:" />
            <br />
            <Field type="text" name="country" component={renderText} label="Country:" />
            <br />
            <Field type="number" name="credit_limit" component={renderText} label="Credit Limit:" />
            <br />
            <Field type="number" name="available_credit" component={renderText} label="Available Credit:" />
            <br />
            <Field type="number" name="visit_percentage" component={renderText} label="Visit Percentage:" />
            <br />
            <Field type="number" name="visits" component={renderText} label="Visits:" />
            <br />
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
