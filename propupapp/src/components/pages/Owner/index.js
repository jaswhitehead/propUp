import React, { Component } from "react";
import "./styles.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import LoginString from "../Login/LoginStrings";
import firebase from "../../../auth";

class Owner extends Component {
  fileArray = [];

  componentDidMount() {
    if (!localStorage.getItem(LoginString.ID)) {
      this.props.history.push("/");
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      ownerID: localStorage.getItem(LoginString.FirebaseDocumentId),
      name: "",
      address: "",
      province: "",
      zipC: "",
      minBid: "",
      pic: [null],
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChoosePhoto = this.onChoosePhoto.bind(this);
    this.currentPhotoFile = [];
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  }
  handleSubmit(event) {
    event.preventDefault();

    const db = firebase.firestore();

    db.collection("properties")
      .doc(this.state.name)
      .set({
        ownerID: this.state.ownerID,
        name: this.state.name,
        address: this.state.address,
        province: this.state.province,
        zipC: this.state.zipC,
        minBid: this.state.minBid,
        pic: this.fileArray,
        description: this.state.description,
      })
      .then(() => {
        console.log("prop submitted");
        console.log(this.state.ownerID);
        // this.setState({
        //   name: "",
        //   address: "",
        //   province: "",
        //   zipC: "",
        //   minBid: "",
        //   pic: [null],
        //   description: "",
        // });
        window.location.reload(false);
      });
  }

  onChoosePhoto = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.currentPhotoFile.unshift(event.target.files);
      const prefixFileType = event.target.files[0].type.toString();
      for (let i = 0; i < this.currentPhotoFile[0].length; i++) {
        if (prefixFileType.indexOf("image/") === 0) {
          this.fileArray.push(URL.createObjectURL(this.currentPhotoFile[0][i]));
        }
        this.setState({
          pic: this.fileArray,
        });
        this.uploadPhoto();
      }
    }
  };

  uploadPhoto = (e) => {
    if (this.fileArray.length) {
      const timestamp = Date.now().toString();
      const uploadTask = firebase
        .storage()
        .ref()
        .child(timestamp)
        .put(this.fileArray);
      uploadTask.on(
        LoginString.UPLOAD_CHANGED,
        null,
        (err) => {
          this.setState({ isLoading: false });
          this.props.showToast(0, err.message);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.setState({
              isLoading: false,
            });
          });
        }
      );
    } else {
      this.setState({ isLoading: false });
      this.props.showToast(0, "File is null");
    }
    document.getElementById("form").reset();
  };

  render() {
    return (
      <div className="hero">
        <form onSubmit={this.handleSubmit} id="form">
          <div className="columns is-mobile">
            <div className="column">
              <div className="field">
                <div className="control">
                  <label className="label">Property Name</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Sherwood Forest Getaway"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="field">
                <div className="control">
                  <label className="label">Street Address</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g 123 Spooner St."
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="field">
                <div className="control">
                  <label className="label">State Drop Down Will Go Here</label>
                  <input
                    className="input"
                    placeholder="Please Choose Your State"
                    name="province"
                    value={this.state.province}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="field">
                <div className="control">
                  <label className="label">Zip Code</label>
                  <input
                    className="input"
                    placeholder="37129"
                    name="zipC"
                    value={this.state.zipC}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="columns is-mobile">
            <div className="column">
              <div className="field">
                <div className="control">
                  <label className="label">
                    Desired Starting Bid (per night)
                  </label>
                  <input
                    className="input"
                    type="text"
                    placeholder="$300"
                    name="minBid"
                    value={this.state.minBid}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="field">
                <div className="control">
                  <label className="label">Picture Upload Will Go Here</label>
                  {/* <button type="button">Upload Image</button> */}
                  {/* <img src={this.state.pic}></img> */}
                  {(this.fileArray || []).map((url) => (
                    <img className="image" src={url} alt="Property Image" />
                  ))}
                  <button
                    type="button"
                    className="icOpenGallery"
                    alt="input_file"
                    onClick={() => {
                      this.refInput.click();
                    }}
                  >
                    Upload Image
                  </button>
                  <input
                    ref={(el) => {
                      this.refInput = el;
                    }}
                    className="viewInputGallery"
                    accept="image/*"
                    type="file"
                    onChange={this.onChoosePhoto}
                  />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="field">
                <div className="control">
                  <label className="label">Property Description</label>
                  <textarea
                    className="textarea"
                    placeholder="Textarea"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Owner;
