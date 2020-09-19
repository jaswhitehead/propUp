import React, { Component } from "react";
import Modal from "react-awesome-modal";
import LoginString from "../Login/LoginStrings";
import firebase from "../../../auth";

export default class ProfileModal extends Component {
  fileArray = [];

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.currentPhotoFile = [];
  }

  onChoosePhoto = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.currentPhotoFile.unshift(event.target.files);
      this.prefixFileType = event.target.files[0].type.toString();
      const file = event.target.files;
      for (let i = 0; i < file.length; i++) {
        this.files = file[i];
        console.log(`onChoose-files = ${this.files}`);
      }

      for (let i = 0; i < this.currentPhotoFile[0].length; i++) {
        if (this.prefixFileType.indexOf("image/") === 0) {
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
      localStorage.setItem(LoginString.PhotoURL, this.fileArray[0]);

      const uploadTask = firebase
        .storage()
        .ref(localStorage.getItem(LoginString.ID) + "/")
        .child("ProfilePhoto")
        .put(this.files);

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
  };

  openModal() {
    this.setState({
      visible: true,
    });
    console.log("opened modal");
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <section>
        <img
          className="ProfilePicture is-rounded"
          src={localStorage.getItem(LoginString.PhotoURL)}
          alt=""
          type="button"
          value="Open"
          onClick={() => this.openModal()}
        />
        {/* <input type="button" value="Open" onClick={() => this.openModal()} /> */}
        <Modal
          visible={this.state.visible}
          width="400"
          height="500"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <h1 className="centerStuff">
              {localStorage.getItem(LoginString.Name)}
            </h1>
            <img
              className="centerPic is-rounded"
              id="ProfilePicture"
              //   src={this.props.currentUserPhoto}
              src={localStorage.getItem(LoginString.PhotoURL)}
              alt=""
            />
            <label className="label centerStuff">
              <i class="fas fa-camera-retro"></i> Change Your Profile Picture:
            </label>

            <button
              type="button"
              id="avatar"
              className="centerButt icOpenGallery"
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
              className="centerStuff viewInputGallery"
              accept="image/*"
              type="file"
              onChange={this.onChoosePhoto}
            />
            <br />
            <br />

            <a
              className="centerStuff"
              href="javascript:void(0);"
              onClick={() => this.closeModal()}
            >
              Close
            </a>
          </div>
        </Modal>
      </section>
    );
  }
}