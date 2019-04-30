import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {DateInput, DateInputSimple, DateTimeInput, DateTimeInputSimple} from 'react-hichestan-datetimepicker';

import { create } from 'jss';
import rtl from 'jss-rtl';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  direction: "rtl",
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Nahid',
    ].join(','),
  },  
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();

class Example extends Component {
  state = {
    value1: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render(){
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <div style={{width: 250}}>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="خروجی"
            value={this.state.value1}
            onChange={this.handleChange('value1')}
            margin="normal"
            style={{width: '100%'}}
          />
          <br/>
          <TextField
            id="standard-name"
            label="ورودی تاریخ با پاپ‌آپ"
            onChange={this.handleChange('value1')}
            value={this.state.value1}
            style={{width: '100%'}}
            InputProps={{
              inputComponent: DateInput,
              inputProps: {},
            }}
          />
          <br/>
          <TextField
            id="standard-name"
            label="ورودی تاریخ بدون پاپ‌آپ"
            value={this.state.value1}
            onChange={this.handleChange('value1')}
            margin="normal"
            style={{width: '100%'}}
            InputProps={{
              inputComponent: DateInputSimple,
              inputProps: {},
            }}
          />
          <br/>
          <TextField
            id="standard-name"
            label="ورودی زمان با پاپ‌آپ"
            value={this.state.value1}
            onChange={this.handleChange('value1')}
            margin="normal"
            style={{width: '100%'}}
            InputProps={{
              inputComponent: DateTimeInput,
              inputProps: {},
            }}
          />
          <br/>
          <TextField
            id="standard-name"
            label="ورودی زمان بدون پاپ‌آپ"
            noDialog
            value={this.state.value1}
            onChange={this.handleChange('value1')}
            margin="normal"
            style={{width: '100%'}}
            InputProps={{
              inputComponent: DateTimeInputSimple,
              inputProps: {},
            }}
          />
        </form>
          <br/>
          <br/>
          <br/>
          <p style={{height: 1000}}>
          خروجی زمان استاندارد را در دیتابیس استفاده کنید
          </p>
          <br/>
        </div>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export default Example;