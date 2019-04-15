import React, { Component } from 'react';
import Axios from 'axios'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: [],
    }
  }
componentDidMount() {
Axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
.then(res => this.setState({students: res.data})).catch(err=> console.log('err',err))
}
  render() {
    let displayArray = this.state.students.map((elem,index)=>
    { return <h3 key={index}>{elem.first_name} {elem.last_name}</h3>
              })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {displayArray}

      </div>
    )
  }
}