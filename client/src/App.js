import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
     overflowX: "auto"
  },
  table : {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '석현일',
    'birthday': '950222',
    'gender': '남자',
    'job': '개발자'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '탐사수',
    'birthday': '950111',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://w.namu.la/s/51f656cb58ffc529724fc1f62dc055430f035f937344cda61f6abcfa0e5001e2bc0cd13ae4a192b30962943a5526da6554ae6445388ced9d468e24369ed4b1f716496cefb2ab0cac148ea830d216ba46d82b0a0c33d2f54759c22ea53cb73ba1d1cd07bf3b24a15227412f7deae9425d',
    'name': '피카츄',
    'birthday': '961011',
    'gender': '남자',
    'job': '포켓몬'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
            <TableCell>num</TableCell>
            <TableCell>image</TableCell>
            <TableCell>name</TableCell>
            <TableCell>birthday</TableCell>
            <TableCell>gender</TableCell>
            <TableCell>job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {customers.map(c => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.jab}
                />
              );
            })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
