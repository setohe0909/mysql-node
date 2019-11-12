import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
});

export default function SimpleTable(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">NIT</TableCell>
              <TableCell align="right">Full Name</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Credit Limit</TableCell>
              <TableCell align="right">Available Credit</TableCell>
              <TableCell align="right">Visit Percentage</TableCell>
              <TableCell align="right">Visit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left">
                  <DeleteForeverIcon onClick={(e) => props.removeRow(e, row.nit)} />
                </TableCell>
                <TableCell align="left">
                  <Checkbox />
                </TableCell>
                <TableCell align="right">{row.nit}</TableCell>
                <TableCell align="right">{row.full_name}</TableCell>
                <TableCell align="right">{row.country}</TableCell>
                <TableCell align="right">{row.credit_limit}</TableCell>
                <TableCell align="right">{row.available_credit}</TableCell>
                <TableCell align="right">{row.visit_percentage}%</TableCell>
                <TableCell align="right">{row.visits}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
