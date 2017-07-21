import React,{Component, PropTypes} from 'react'

export default class App extends Component {

  render(){
    return(
      <div>
        <div>App Nav</div>
        <div>{this.props.children}</div>
        <div>App footer</div>
      </div>
    )
  }
}
