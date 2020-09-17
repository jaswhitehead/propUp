import React, { Component } from "react";
import "./styles.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import firebase from "../../../auth/";
import LoginString from "../Login/LoginStrings";
import { Card } from "@material-ui/core";


const db = firebase.firestore();
class Renter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      propArray: []
    };

    this.updateInputValue = this.updateInputValue.bind(this);
   
  }

  componentDidMount() {
    this.getAllWhere();
    if (!localStorage.getItem(LoginString.ID)) {
      this.props.history.push("/");
    }
  }

  updateInputValue(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
    console.log(evt.target.value);
  }

  getAllWhere() {
    
    db.collection('properties').where("city", "==", this.props.match.params.location).get().then((snapshot) => (
       snapshot.forEach((doc) => (
           db.collection('users').doc(doc.data().ownerID).get().then((snap) => {
               console.log("doc.id = " + doc.id)
               console.log("doc.data().id = " + doc.data().id)
           this.setState((prevState) => ({
              propArray:[ ...prevState.propArray, 
               {
               name: doc.data().name,
               address: doc.data().address,
               description: doc.data().description,
               minBid: doc.data().minBid,
               province: doc.data().province,
               pic: doc.data().pic,
               zipC: doc.data().zipC,
               owner: snap.data().name,
               docID: doc.id
              }
           ]
           }))
           })
       ))
       ))

   }

  render() {
    let displayPosts = this.state.propArray.map((p) => (
      <div className="column is-desktop">
          <div className="card animate__animated animate__fadeInUp">
              <div className="card-image">
                  <figure className="image is-2by2">
                  <img src={p.pic[0]} alt="House1" alt="Placeholder image" />
                  </figure>
              </div>
              <div className="card-content">
                  <div className="media">
                      <div className="media-left">
                          <figure className="image is-48x48">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE9tG_NFfmLde3aA3q3p2yib1KJslRRNlJQg&usqp=CAU" alt="Placeholder image" />
                          </figure>
                      </div>
                      <div className="media-content">
                          <p className="title is-4" > {p.name} </p>
                          <p className="subtitle is-6">Listed By: <i>{p.owner}</i></p>
                      </div>
                  </div>

                  <div className="content">
                  <p>{p.description}</p>
                  <a href={`/property/${p.docID}`}>More Info</a><br></br>
                  <a href="/renter" className="button" id="bid">Make a Bid</a>
                  </div>
              </div>
          </div>
      </div>
  ))
    return (
      <Card>
        {displayPosts}
      </Card>
    );
  }
}

export default Renter;
