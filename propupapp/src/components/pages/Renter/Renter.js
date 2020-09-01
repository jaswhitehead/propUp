
import './Renter.css';
import config from "../../../auth/auth"
import firebase from "firebase"
import React, { Component } from "react";
// import bidCheck from "../../bidding/bidding"

// import {newBid} from "../../bidding/bidding"
// const bid = useState("")
firebase.initializeApp(config)

const db = firebase.firestore();
class Renter extends Component {
//  componentDidMount(){
//   !firebase.apps.length 
//   ? firebase.initializeApp(config).firestore()
//   : firebase.app().firestore();
//  }
  constructor(props) {
    super(props);
    
    this.state = {
      newBid: 0
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.bidCheck = this.bidCheck.bind(this)
  }

  updateInputValue(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
    console.log(evt.target.value)
  }

 bidCheck(e) {
   e.preventDefault();
   const bidref = db.collection("bids").doc("test")

   const res = ""
   

   db.collection("bids").doc("test").onSnapshot( snapshot => {
     console.log("current bid: " + snapshot.get("currentBid"))
     console.log("minimum bid: " + snapshot.get("minBid"))
    // query db checking if current bid exists
    let currentBid = snapshot.get("currentBid")
    if (currentBid){
       
      //comparing new bid to current bid
        if(this.state.newBid > snapshot.get("currentBid")){
           
          //if more update currentBid to newBid
             bidref.update({currentBid: this.state.newBid});
            console.log("updated bid from checking current bid")
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
      console.log("bid not higher than min bid")
    }
})
console.log(res)
}
  //  db.collection("bids").doc("test").set({currentBid: this.state.newBid});


 render(){
  return ( 
<div>
        <form autoComplete="off" onSubmit= {this.bidCheck.bind(this)}>
          <div>
            <input
           type = "text" name = "newBid" value = {this.state.newBid} onChange={this.updateInputValue}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
  )
  }
};

export default Renter;



