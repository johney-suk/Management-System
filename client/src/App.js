import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import CutomerAdd from './components/CustomerAdd';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing * 2
  }
});


class App extends Component {

  // 비동기적으로 가져온 데이터는 실제로 존재하는 데이터가 아님 
  // 처음 구동된 상태는 customers가 비어있어 오류를 뱉음
  // state = {
  //   customers: "",
  //   completed: 0
  // }
  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
  }
  
  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
    .then(res => this.setState({ customers: res }))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 })
  }


  render() {
    const { classes } = this.props
    return (
      <div>
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
              <TableCell>설정</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {this.state.customers ? this.state.customers.map(c => {
              return (
                <Customer stateRefresh={this.stateRefresh}
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            }) : 
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
      <CutomerAdd stateRefresh={this.stateRefresh}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
