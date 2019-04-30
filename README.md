# Material-ui component for date and time input

A material-ui persian(jalaali, jalali, shamsi) date input with picker, 
which allows the user to type or select the date from the picker.

The component is compatible with react 16.

This component is material-ui/core 1.4 compatible, if you need it for newer version see the instruction below or take look at the [example.js](https://github.com/karianpour/material-ui-hichestan-datetimepicker/blob/master/src/Example.js) file.

This component is only a material-ui wrapper around [react-hichestan-datetimepicker](https://github.com/karianpour/react-hichestan-datetimepicker). For features check that component's page.

Thanks for the beautiful font [Nahid](https://rastikerdar.github.io/nahid-font/)

## Demo

Here you can experience a live [demo](https://karianpour.github.io/material-ui-hichestan-datetimepicker/)

## Installation

Use `npm i material-ui-hichestan-datetimepicker` in order to install the module, but you do not neet it for material version 3.


## Usage
For material version 1, use version 0 of this repository on npm.

For material version 3 :
```
npm i react-hichestan-datetimepicker
```
and use the component as follow in your code:
```
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

```
Instead of `DateInput` you can also use `DateInputSimple`, `DateTimeInput`, `DateTimeInputSimple`

You may pass some props to the `DataInput` via `inputProps` object.


### Contribution
Feel free to fork and add some feature. If you have time to do improvement on the U/I that will be appreciated.
If some one for any reason wants to sand the date and time format in any other format than ISO 8601, we need to inject a date and time formatter into the component.

To start, make a clone and run:
```bash
npm install
npm start
```
and browse [http://localhost:3000](http://localhost:3000)

For publishing
```bash
./build-examples.sh
npm run build
npm publish
```

### Acknowledgement
The project is bootstrapped by create-component-lib.


### License

<sub>MIT License</sub>  
<sub>Copyright (c) 2017 Kayvan Arianpour (<karianpour@gmail.com>)</sub>  
<sub>Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:</sub>

<sub>The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.</sub>

<sub>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.</sub>





