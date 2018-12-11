import React, { Component } from 'react';

export default class ApiFetch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies : []
    }
  }

  componentWillMount() {
    fetch ("http://127.0.0.1:5000/return/movies", {
      method: "GET",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {return response.json();})
    .then(responseData => {return responseData })
    .then(data => {this.setState({movies: data});})
    .catch(err => {
      console.log("Fetch error " + err)
    })

  }

  render() {
    return (
      <div className='api-fetch'>
        <h2>Here are the current movies:</h2>
        {this.state.movies.map((data, index) => {
          return (
          <div key={index}>
            <p>Title: {data[0]}</p>
            <p>Rating: {data[1]}</p>
          </div>
          )
          
        } )}
      </div>
    );
  }
}
