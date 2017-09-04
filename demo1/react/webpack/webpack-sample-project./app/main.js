// const greeter = require('./greeter');

// document.querySelector("#root").appendChild(greeter());
import React from 'react'
import {render} from 'react-dom'
import Greeter from './greeter'
import './main.css'

render(<Greeter />, document.getElementById('root'));//react中的标签名称必须大写，否则不显示