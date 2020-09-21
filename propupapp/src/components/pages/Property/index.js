import React, { Component } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import firebase from "../../../auth/";
import LoginString from "../Login/LoginStrings";

const db = firebase.firestore();

class Property extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newBid: 0,
      name: "",
      address: "",
      description: "",
      minBid: "",
      province: "",
      pic: [],
      zipC: "",
      owner: "",
      highBidder: "",
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.bidCheck = this.bidCheck.bind(this);
  }

  componentDidMount() {
    this.getOne();
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

  bidCheck(e) {
    e.preventDefault();
    let bidref = db.collection("property").doc(this.state.name);

    let res = "";

    db.collection("property")
      .doc(this.state.name)
      .onSnapshot((snapshot) => {
        console.log("minimum bid: " + snapshot.get("minBid"));
        // query db checking if current bid exists
        let minBid = snapshot.get("minBid");
        if (minBid) {
          //comparing new bid to current bid
          if (this.state.newBid > snapshot.get("minBid")) {
            //if more update currentBid to newBid
            this.setState({
              highBidder: localStorage.getItem(LoginString.ID),
            });
            bidref.update({
              minBid: this.state.newBid,
              highBidder: this.state.highBidder,
            });
            console.log("updated bid from checking current bid");
          } else {
            console.log("bid not higher than current bid");
          }

          //if no currentBid compare against the minBid
          // } else {

          //   if (this.state.newBid > snapshot.get("minBid")){
          //     //if more update currentBid to newBid
          //      bidref.update({currentBid: this.state.newBid});
          //     console.log("updated bid from min bid")
        } else {
          console.log("bid not higher than min bid");
        }
      });
    console.log(res);
  }

  getOne() {
    db.collection("property")
      .doc(this.props.match.params.id)
      .get()
      .then((doc) => {
        db.collection("user")
          .doc(doc.data().ownerID)
          .get()
          .then((snap) => {
            this.setState({
              name: doc.data().name,
              address: doc.data().address,
              description: doc.data().description,
              minBid: doc.data().minBid,
              province: doc.data().province,
              pic: doc.data().pic,
              zipC: doc.data().zipC,
              owner: snap.data().name,
              docID: doc.id,
            });
          });
      });
  }

  render() {
    let displayPics = this.state.pic.map((pics) => {
      console.log(`pics = ${pics}`);
      return <img src={pics} alt="House1" />;
    });
    return (
      <div className="column">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              {/* <img src={this.state.pic[0]} alt="House1" /> */}
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
                <p className="title is-4"> {this.state.name} </p>
                <p className="subtitle is-6">
                  Listed By: <i>{this.state.owner}</i>
                </p>
              </div>
            </div>

            <div className="content">
              <p>{this.state.description}</p>
              <a href={`/property/${this.state.docID}`}>More Info</a>
              <br></br>
              <input
                type="text"
                name="newBid"
                value={this.state.newBid}
                onChange={this.updateInputValue}
              />
              <button className="bid" onClick={this.bidCheck}>
                {" "}
                Make a Bid{" "}
              </button>
            </div>
          </div>
        </div>
        {displayPics}
      </div>
    );
  }
}
export default Property;
