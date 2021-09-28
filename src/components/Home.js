import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import Dataitem from './Dataitem'

class Home extends React.Component {


constructor(props){
super(props);
this.setState= {
  allData: []
}
}

componentDidMount = () => {
  axios
  .get(`${process.env.REACT_APP_SERVER}/getAllData`)
  .then(result => {
    this.setState({
      allData: result.data
    })
  })
  .catch(err => {
  console.log(err);
  })

}


  render() {
    return (
      <>
        {this.state.allData.map((item) => (
          <Dataitem item={item} />
        ))}
      </>
    )
  }
}

export default Home;
