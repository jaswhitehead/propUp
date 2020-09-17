import React, { Component } from "react";
import "./styles.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Card } from "@material-ui/core";
import firebase from "../../../auth/";
import LoginString from "../Login/LoginStrings";
const db = firebase.firestore();
class OwnerDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propArray: [],
    };
  }
  // .where("id", "==", ownerID)
  getAll() {
    db.collection("properties")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let ownerID = doc.data().ownerID;
          db.collection("users")
            .get()
            .then((snap) => {
              console.log(snap.name);
              if (snap.length) {
                this.setState((prevState) => ({
                  propArray: [
                    ...prevState.propArray,
                    {
                      name: doc.data().name,
                      address: doc.data().address,
                      description: doc.data().description,
                      minBid: doc.data().minBid,
                      province: doc.data().province,
                      pic: doc.data().pic,
                      zipC: doc.data().zipC,
                      docID: doc.id,
                      ownerID: doc.data().ownerID,
                    },
                  ],
                }));
              }
            });
        });
      });
  }
  componentDidMount() {
    this.getAll();
    console.log(this.state.propArray);
    console.log(localStorage.getItem(LoginString.ID));
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
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE9tG_NFfmLde3aA3q3p2yib1KJslRRNlJQg&usqp=CAU"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4"> {p.name} </p>
                <p className="subtitle is-6">
                  Listed By: <i>{p.owner}</i>
                </p>
              </div>
            </div>
            <div className="content">
              <p>{p.minBid}</p>
              <p>{p.description}</p>
              <a href={`/property/${p.docID}`}>More Info</a>
              <br></br>
              <a href="/renter" className="button" id="bid">
                Make a Bid
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="propresult">
        <div className="column">
          <h1>Top Matches for your Search:</h1>
        </div>
        <div className="columns is-desktop">
          <Card>{displayPosts}</Card>
        </div>
        <nav
          class="pagination is-centered"
          role="navigation"
          aria-label="pagination"
        >
          <a class="pagination-previous">Previous</a>
          <a class="pagination-next">Next page</a>
          <ul class="pagination-list">
            <li>
              <a
                class="pagination-link is-current"
                aria-label="Goto page 1"
                href="/results"
              >
                1
              </a>
            </li>
            <li>
              <a
                class="pagination-link"
                aria-label="Goto page 2"
                href="/results"
              >
                2
              </a>
            </li>
            <li>
              <a
                class="pagination-link"
                aria-label="Page 3"
                aria-current="page"
                href="/results"
              >
                3
              </a>
            </li>
            <li>
              <a
                class="pagination-link"
                aria-label="Goto page 4"
                href="/results"
              >
                4
              </a>
            </li>
          </ul>
        </nav>
        <br></br>
      </div>
    );
  }
}
export default OwnerDash;
