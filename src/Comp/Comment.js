import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

export default function Add() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [totalStars, setTotalStars] = useState(5);
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [storedComments, setStoredComments] = useState([]);

  useEffect(() => {
    const storedComments =
      JSON.parse(localStorage.getItem("userComments")) || [];
    setStoredComments(storedComments.reverse());
  }, []);

  const handleStarClick = (stars) => {
    setRating(stars);
  };

  const handleDangerButtonClick = () => {
    const newComment = {
      comment,
      userName,
      stars: rating,
      timestamp: new Date().toISOString(),
    };

    const updatedComments = [newComment, ...storedComments];
    localStorage.setItem("userComments", JSON.stringify(updatedComments));
    setStoredComments(updatedComments);

    window.scrollTo(0, document.body.scrollHeight);

    setComment("");
    setUserName("");
    setRating(null);
    setHover(null);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <section className="vh-100">
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" lg="8" xl="6">
            <MDBCard>
              <MDBCardBody className="p-4">
                <div className="d-flex flex-start w-100">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                    alt="User Avatar"
                    width="65"
                    height="65"
                  />

                  <div className="w-100">
                    <MDBTypography tag="h5">Add a comment</MDBTypography>
                    <div>
                    {[...Array(totalStars)].map((star, index) => {
                      const currentRating = index + 1;

                      return (
                        <label key={index} style={{ display: "inline-block", position: "relative" }}>
                          <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onChange={() => handleStarClick(currentRating)}
                            style={{ display: "none" }}
                          />
                          <span
                            className="star"
                            style={{
                              color:
                                currentRating <= (hover || rating)
                                  ? "#ffc107"
                                  : "#e4e5e9",
                            }}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                            onClick={() => handleStarClick(currentRating)}  
                          >
                            &#9733;
                          </span>
                        </label>
                      );
                    })}
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        value={userName}
                        onChange={handleUserNameChange}
                      />
                    </div>

                    <MDBTextArea
                      label="What is your view?"
                      rows={4}
                      value={comment}
                      onChange={handleCommentChange}
                    />

                    <div className="d-flex justify-content-between mt-3">
                      <MDBBtn
                        color="success"
                        style={{ width: "100px", height: "40px" }}
                        onClick={handleDangerButtonClick}
                      >
                        Post
                      </MDBBtn>
                      <MDBBtn
                        color="danger"
                        style={{ width: "100px", height: "40px" }}
                      >
                        Send <MDBIcon fas icon="long-arrow-alt-right ms-1" />
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
            <div
              className="comments-wrapper"
              style={{ maxHeight: '200px', overflowY: 'auto' }}
            >
              {storedComments.map((storedComment, index) => (
                <div
                  key={index}
                  className="p-4 mt-4"
                  style={{ backgroundColor: "#fff" }}
                >
                  <h5>{`${storedComment.userName}'s Comment:`}</h5>
                  <p>{storedComment.comment}</p>
                  <div>
                    <span>Stars: {storedComment.stars}</span>
                    <span className="mx-2">|</span>
                    <span>
                      {calculateTimeDifference(storedComment.timestamp)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

function calculateTimeDifference(timestamp) {
  const currentTime = new Date();
  const commentTime = new Date(timestamp);
  const timeDifference = Math.floor((currentTime - commentTime) / 1000); // in seconds

  if (timeDifference < 60) {
    return `${timeDifference} seconds ago`;
  } else if (timeDifference < 3600) {
    return `${Math.floor(timeDifference / 60)} minutes ago`;
  } else if (timeDifference < 86400) {
    return `${Math.floor(timeDifference / 3600)} hours ago`;
  } else {
    return `${Math.floor(timeDifference / 86400)} days ago`;
  }
}
