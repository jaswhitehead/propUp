import React, { Component } from "react";
import "./styles.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Weather from "../Weather/index";
// import Demo4 from '../Results/Demo4.jpg';
// import Demo5 from '../Results/Demo5.jpg';
// import Demo6 from '../Results/Demo6.jpg';
// import Demo7 from '../Results/Demo7.jpg';
import { Card } from "@material-ui/core";
import firebase from "../../../auth/";
import LoginString from "../Login/LoginStrings";

const db = firebase.firestore();
class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      propArray: [],
    };
  }

  getAll() {
    db.collection("property")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let docName = localStorage.getItem(LoginString.ID);
          // console.log("docname = ", docName);
          db.collection("user")
            .where("id", "==", doc.data().ownerID)
            .get()
            .then((snap) => {
              snap.forEach((doc2) => {
                // console.log("doc.data().name = " + doc.data().name);
                // console.log("doc.data().city = " + doc.data().city);
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
                      owner: doc2.data().name,
                      ownerPic: doc2.data().URL,
                      docID: doc.id,
                    },
                  ],
                }));
              });
            });
        });
      });
  }
  componentDidMount() {
    this.getAll();
  }

  render() {
    let displayPosts = this.state.propArray.map((p) => {
      return (
        <div className="column is-desktop propCard propSingleCard">
          <div className="card animate__animated animate__fadeInUp">
            <div className="card-image">
              <figure className="image is-2by2">
                <img
                  src={p.pic[0]}
                  alt="House1"
                  alt="Placeholder image"
                  className="propPic"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure>
                    <img
                      className="image is-48x48"
                      src={
                        p.ownerPic.length
                          ? p.ownerPic
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE9tG_NFfmLde3aA3q3p2yib1KJslRRNlJQg&usqp=CAU"
                      }
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
                <h6>Current Bid: </h6>
                <p>${p.minBid}</p>
                <h6>Description:</h6>
                <p>
                  {p.description.length > 144
                    ? p.description.substring(0, 75) + "..."
                    : p.description}
                </p>
                <br></br>
                <a href={`/property/${p.docID}`} className="button" id="bid">
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="propresult">
        <div className="column">
          <h1>Top Matches for your Search:</h1>
        </div>
        <div className="columns is-desktop propCard">
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
        <Weather />
      </div>
    );
  }
}
export default Results;
