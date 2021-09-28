import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import updateForm from './updateForm';
import axios from 'axios';
import {withAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




class FavFruit extends React.Component {

  constructor(props){
    super(props);
    this.setState={
     favArray:[],
     showFlag:false,
     dataitem: {},
     id: ''
    }
    }

    componentDidMount = () => {
      const {user}=this.props.auth0;
      const obj ={ownerEmail:user.email}
      axios
      .get(`${process.env.REACT_APP_SERVER}/getFavData`,{params:obj})
      .then(result => {
        this.setState({
          favArray:result.data
        })
      })
      .catch(err => {
      console.log(err);
      })
    
    }
showUpdateForm = (item) => {
  this.setState({
   dataitem:item,
    showFlag:true,
    id: item._id
   })
}


update = (e) => {
e.preventDefault();
const {user}=this.props.auth0;
const obj = { 
  ownerEmail:user.email,
  name:e.target.name.value,
  image:e.target.image.value,
  price:e.target.price.value
};
axios
.put(`${process.env.REACT_APP_SERVER}/updateFav/${this.state.id}`,obj)
.then(result => {
  this.setState({
    favArray:result.data
  })
})
.catch(err => {
console.log(err);
})
this.setState({
   showFlag:false,
  })
}


delete = (id) => {
  const {user}=this.props.auth0;
  const obj ={ownerEmail:user.email}
  axios
.delete(`${process.env.REACT_APP_SERVER}/deleteFav/${id}`, {params: obj})
.then(result => {
  this.setState({
    favArray:result.data
  })
})
.catch(err => {
console.log(err);
})

}


    handleClose = () => {
      this.setState({
   
        showFlag:false,
       })
    }

  render() {
    return(
      <>
      {this.state.showFlag && 
      < updateForm   
      showFlag={this.state.showFlag}
      handleClose={this.handleClose}
      dataitem={this.state.dataitem}
      update={this.update}
      
      />
      }

{this.state.favArray.map((item) => (

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={item.image} />
<Card.Body>
  <Card.Title>{item.name}</Card.Title>
  <Card.Text>
  {item.price}
  </Card.Text>
  <Button variant="primary" onClick={() => this.showUpdateForm(item,item._id)}>Update</Button>
  <Button variant="primary" onClick={() => this.delete(item._id)}>Add To Fav</Button>
</Card.Body>
</Card>


))}

      </>
    )
  }
}

export default withAuth0(FavFruit);