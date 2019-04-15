import React, { Component } from 'react';
import Axios from 'axios'
import {Link} from 'react-router-dom'

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
    { return <Link key={index} to={`/student/${elem.id}`}g><h3 >{elem.first_name} {elem.last_name}</h3></Link>
              })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {displayArray}
        <Link to='/'><button>Home</button></Link>
      </div>
    )
  }
}