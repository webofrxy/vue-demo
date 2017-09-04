import React,{Component} from 'react';
import config from './config.json';


    class greet extends Component{
        render(){
            return (
                <div>
                    {config.greetText}
                </div>
            );
        }
    }
    // var greet = document.createElement('div');
    // greet.textContent= config.greetText;
    // return greet;
export default  greet ;