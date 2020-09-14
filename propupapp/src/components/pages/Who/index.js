import React from "react";
import './styles.css';
import "react-bulma-components/dist/react-bulma-components.min.css";
import Chip from '../Who/Chip.jpg';
import Jason from '../Who/Jason.jpg';
import Mason from '../Who/Mason.jpg';
import Micah from '../Who/Micah.jpg';


const Who = () => {
    return (
        <div className="who-container">
            <div className="columns is-desktop">
                <div className="column">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image">
                                <img src={Jason} alt="Jason Whitehead" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>Jason Whitehead</strong>&nbsp;&nbsp;&nbsp;<i className="fab fa-twitter"></i><small> @JasonWhitehead2</small>
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenean efficitur sit amet massa fringilla egestas. Nullam
                                    condimentum luctus turpis.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenean efficitur sit amet massa fringilla egestas. Nullam
                                    condimentum luctus turpis.
                                </p>
                            </div>
                            <nav className="level is-desktop">
                                <div className="level-left">
                                    <a className="level-item" aria-label="reply" href="mailto:jaswhitehead@gmail.com">
                                        <span className="icon">
                                            <i className="fas fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a className="level-item" aria-label="linkedIn" href="https://www.linkedin.com/in/jasonwhitehead1/" target="blank">
                                        <span className="icon">
                                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a className="level-item" aria-label="github" href="https://github.com/jaswhitehead" target="blank">
                                        <span className="icon">
                                            <i className="fab fa-github" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </article>
                </div>

                <div className="column">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image">
                                <img src={Chip} alt="Chip Johnson" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>Chip Johnson</strong>&nbsp;&nbsp;&nbsp;<i className="fab fa-twitter"></i><small> @chipjohsnon</small>
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenean efficitur sit amet massa fringilla egestas. Nullam
                                    condimentum luctus turpis.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aenean efficitur sit amet massa fringilla egestas. Nullam
                                    condimentum luctus turpis.
                                </p>
                            </div>
                            <nav className="level is-mobile">
                                <div className="level-left">
                                    <a className="level-item" aria-label="reply" href="mailto:jaswhitehead@gmail.com" target="blank">
                                        <span className="icon">
                                            <i className="fas fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a className="level-item" aria-label="linkedIn" href="https://www.linkedin.com/in/chip-johnson-17077839/" target="blank">
                                        <span className="icon">
                                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a className="level-item" aria-label="github" href="https://github.com/cjohnson1580" target="blank">
                                        <span className="icon">
                                            <i className="fab fa-github" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </article>
                </div>
            </div>

            <div className="columns">
                <div className="column">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image">
                                <img src={Micah} alt="Micah Lea" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>Micah Lea</strong>&nbsp;&nbsp;&nbsp;<i className="fab fa-twitter"></i><small> @MicahLea</small>
                                    <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Aenean efficitur sit amet massa fringilla egestas. Nullam
                                        condimentum luctus turpis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Aenean efficitur sit amet massa fringilla egestas. Nullam
                                        condimentum luctus turpis.
                                    </p>
                            </div>
                            <nav className="level is-mobile">
                                <div className="level-left">
                                    <a className="level-item" aria-label="reply" href="mailto:jaswhitehead@gmail.com">
                                        <span className="icon">
                                            <i className="fas fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a className="level-item" aria-label="retweet">
                                        <span className="icon">
                                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a className="level-item" aria-label="like" href="https://github.com/micahslea" target="blank">
                                        <span className="icon">
                                            <i className="fab fa-github" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </article>
                </div>
                <div className="column">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image">
                                <img src={Mason} alt="Mason Shadrick" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>Mason Shadrick</strong>&nbsp;&nbsp;&nbsp;<i className="fab fa-twitter"></i><small> @masonshadrick</small>
                                    <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Aenean efficitur sit amet massa fringilla egestas. Nullam
                                        condimentum luctus turpis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Aenean efficitur sit amet massa fringilla egestas. Nullam
                                        condimentum luctus turpis.
                                    </p>
                            </div>
                            <nav className="level is-mobile">
                                <div className="level-left">
                                    <a className="level-item" aria-label="reply" href="mailto:jaswhitehead@gmail.com">
                                        <span className="icon">
                                            <i className="fas fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a className="level-item" aria-label="linkedIn" href="https://www.linkedin.com/in/masondshadrick/" target="blank">
                                        <span className="icon">
                                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a className="level-item" aria-label="github" href="https://github.com/Mason-Shadrick" target="blank">
                                        <span className="icon">
                                            <i className="fab fa-github" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </article>
                </div>
            </div>
        </div>

    )
};

export default Who;