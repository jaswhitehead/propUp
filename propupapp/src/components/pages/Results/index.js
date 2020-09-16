import React , {Component} from "react";
import './styles.css';
import "react-bulma-components/dist/react-bulma-components.min.css";
import Weather from '../Weather/index';
// import Demo4 from '../Results/Demo4.jpg';
// import Demo5 from '../Results/Demo5.jpg';
// import Demo6 from '../Results/Demo6.jpg';
// import Demo7 from '../Results/Demo7.jpg';
import { Card } from "@material-ui/core";
import firebase from "../../../auth/";


const db = firebase.firestore();



class Results extends Component {
    
    constructor(props){
        super(props);
    
        this.state = {
            propArray: []
        }
    }

 getAll() {
    
     db.collection('properties').get().then((snapshot) => (
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
    componentDidMount(){
        this.getAll()
        console.log(this.state.propArray)
    }
         
    

        render(){
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
        <div className="propresult">
            <div className="column">
                <h1>Top Matches for your Search:</h1>
            </div>
            <div className="columns is-desktop">
            <Card>
                {displayPosts}
            </Card>
               {/* <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
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
                                    <p className="title is-4" value={p.name}></p>
                                    <p className="subtitle is-6">Listed By: <i>fix this later</i></p>
                                </div>
                            </div>

                            <div className="content" value={p.description}>
                            
                            <a href="#">#PropUp</a><br></br>
                            <button className="bid">Make a Bid</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src={Demo5} alt="Demo5" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdGEc2Yiel_ggVI9POMM7fFyBRTTHEAwN6mg&usqp=CAU" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Private Oasis</p>
                                    <p className="subtitle is-6">Listed By: <i>David Johnson</i></p>
                                </div>
                            </div>

                            <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris.
                            <a href="#">#PropUp</a><br></br>
                            <button className="bid">Make a Bid</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src={Demo6} alt="Demo6" alt="Placeholder image" />
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
                                    <p className="title is-4">Martin's Nest</p>
                                    <p className="subtitle is-6">Listed By: <i>Todd Martin</i></p>
                                </div>
                            </div>

                            <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. 
                            <a href="/">#PropUp</a><br></br>
                            <button className="bid">Make a Bid</button>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src={Demo7} alt="Demo7" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                    <img src="https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Winter Wonderland</p>
                                    <p className="subtitle is-6">Listed By: <i>Michelle Davis</i></p>
                                </div>
                            </div>

                            <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. 
                            <a href="#">#PropUp</a><br></br>
                            <button className="bid">Make a Bid</button>
                            </div>
                        </div>
                    </div>
                </div> */} 
            </div>
            <nav class="pagination is-centered" role="navigation" aria-label="pagination">
                <a class="pagination-previous">Previous</a>
                <a class="pagination-next">Next page</a>
                <ul class="pagination-list">
                    <li><a class="pagination-link is-current" aria-label="Goto page 1" href='/results'>1</a></li>
                    <li><a class="pagination-link" aria-label="Goto page 2" href='/results'>2</a></li>
                    <li><a class="pagination-link" aria-label="Page 3" aria-current="page" href='/results'>3</a></li>
                    <li><a class="pagination-link" aria-label="Goto page 4" href='/results'>4</a></li>
                </ul>
            </nav>
            <br></br>        
        <Weather />
    </div>
    )
};
}
export default Results;      