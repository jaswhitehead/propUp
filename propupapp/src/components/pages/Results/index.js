import React from "react";
import './styles.css';
import "react-bulma-components/dist/react-bulma-components.min.css";
import Weather from '../Weather/index';
import Demo4 from '../Results/Demo4.jpg';
import Demo5 from '../Results/Demo5.jpg';
import Demo6 from '../Results/Demo6.jpg';
import Demo7 from '../Results/Demo7.jpg';


const Results = () => {
    return (
        <div className="propresult">
            <div className="column">
                <h1>Top Matches for your Search:</h1>
            </div>
            <div className="columns is-desktop">
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src={Demo4} alt="House1" alt="Placeholder image" />
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
                                    <p className="title is-4">Secluded Getaway</p>
                                    <p className="subtitle is-6">Listed By: <i>John Smith</i></p>
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
                </div>
            </div><br></br>        
        <Weather />
    </div>
    )
};

export default Results;      