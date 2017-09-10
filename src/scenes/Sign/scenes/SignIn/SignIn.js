import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Grid from 'material-ui/Grid'
import { CircularProgress } from 'material-ui/Progress'

import withAnimation from '../../../../hocs/withAnimation'


class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    // In case of success the credentials will be cleaned
    if (!nextProps.isFetching && nextProps.authenticated) {
      this.setState({
        email: '',
        password: ''
      })
    }
    // In case of error just the password will be cleaned
    if (this.props.isFetching && !nextProps.isFetching && !nextProps.authenticated) {
      this.setState({
        password: ''
      })
    }
  }
  handleChange (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  handleClick () {
    const { email, password } = this.state
    this.props.signIn(email, password)
  }
  render () {
    return (
      <Grid container justify='center' spacing={0}>
        <Grid item md={3} xs={6}>
          <Paper style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              label='Email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              type='email'
              margin='normal'
              style={{ marginLeft: 16, marginRight: 16 }}
            />
            <TextField
              label='Password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              type='password'
              margin='normal'
              style={{ marginLeft: 16, marginRight: 16 }}
            />
            <div style={{ color: 'red', textAlign: 'center', fontSize: 12 }}> {this.props.errorMsg} </div>
            <div style={{ margin: 16, alignSelf: 'center' }}>
              {!this.props.isFetching && <Button raised color='primary' onClick={this.handleClick}>Sign in</Button> }
              {this.props.isFetching && <CircularProgress />}
            </div>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}


export default withAnimation(SignIn)
