import React from "react";
import './styles.css';
import "react-bulma-components/dist/react-bulma-components.min.css";
import Demo1 from '../Results/Demo1.jpg';
import Demo2 from '../Results/Demo2.jpg';
import Demo3 from '../Results/Demo3.jpg';
import Demo4 from '../Results/Demo4.jpg';
import Demo5 from '../Results/Demo5.jpg';
import Demo6 from '../Results/Demo6.jpg';
import Demo7 from '../Results/Demo7.jpg';


const Results = () => {
    return (
        <div className="propresult">
            <div className="column">
                <h1>Here are the Top 4 matches to your search:</h1>
            </div>
            <div className="columns is-mobile">
                <div className="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <img src={Demo4} alt="Demo4" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                            </div>

                            <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <img src={Demo5} alt="Demo5" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                            </div>

                            <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <img src={Demo6} alt="Demo6" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                            </div>

                            <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <img src={Demo7} alt="Demo7" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                            </div>

                            <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br></br>
            
        <div class="columns is-mobile">
            <div class="column is-6 is-offset-3">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Demo1} alt="Demo1" />
                        </div>
                        <div class="carousel-item">
                            <img src={Demo2} alt="Demo2" />
                        </div>
                        <div class="carousel-item">
                            <img src={Demo3} alt="Demo3" />
                        </div>
                        <div class="carousel-item">
                            <img src={Demo4} alt="Demo4" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        <span class="prev">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="next">Next</span>
                        <span class="carousel-control-next-icon"></span>
                        
                    </a>
                </div>    
            </div>
        </div>
    </div>
    )
};

export default Results;      