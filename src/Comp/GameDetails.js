import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "react-slideshow-image/dist/styles.css";
import Comment from "./Comment";

const GameDetails = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userReview, setUserReview] = useState({
    name: "",
    comment: "",
    stars: 0,
    dateTime: null,
  });
  const [showUserReview, setShowUserReview] = useState(false);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=88de0b77186a41b7960ab1e61efd24da`
        );

        setGameDetails(response.data);
      } catch (error) {
        console.error("Error fetching game details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id]);

  useEffect(() => {
    const storedReview = JSON.parse(localStorage.getItem("userReview")) || {};
    setUserReview(storedReview);
    setShowUserReview(Object.keys(storedReview).length > 0);
  }, []);

  const handleReviewSubmit = () => {
    const dateTime = new Date();
    const updatedReview = { ...userReview, dateTime };
    localStorage.setItem("userReview", JSON.stringify(updatedReview));
    setUserReview(updatedReview);
    setShowUserReview(true);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!gameDetails) {
    return <p>Unable to fetch game details.</p>;
  }

  return (
    <div className="container my-4">
      <div className="card mb-3">
        <h1 className="card-header text-center">{gameDetails.name}</h1>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              className="img-fluid rounded-start"
              src={gameDetails.background_image}
              alt={gameDetails.name}
            />
            <div className="p-3">
              <p>
                <strong>Developer:</strong>{" "}
                {gameDetails.developers && gameDetails.developers.length > 0
                  ? gameDetails.developers[0].name
                  : "N/A"}
              </p>
              <p>
                <strong>Publisher:</strong>{" "}
                {gameDetails.publishers && gameDetails.publishers.length > 0
                  ? gameDetails.publishers[0].name
                  : "N/A"}
              </p>
              <p>
                <strong>Release Year:</strong> {gameDetails.released}
              </p>
              <p>
                <strong>Platforms: </strong>
                {gameDetails.platforms && gameDetails.platforms.length > 0
                  ? gameDetails.platforms.map((platform) => (
                      <Link
                        key={platform.platform.id}
                        to={`/store/${platform.platform.slug}`}
                        className="btn btn-outline-secondary btn-sm me-2 mb-2"
                      >
                        {platform.platform.name}
                      </Link>
                    ))
                  : "N/A"}
              </p>
              <p>
                <strong>Tags: </strong>
                {gameDetails.tags && gameDetails.tags.length > 0
                  ? gameDetails.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="badge bg-secondary me-2 mb-2"
                      >
                        {tag.name}
                      </span>
                    ))
                  : "N/A"}
              </p>
              <p>
                <strong>Rating:</strong> {gameDetails.rating}
              </p>
              <p>
                <strong>Top Rating:</strong> {gameDetails.rating_top}
              </p>
              {gameDetails.ratings && gameDetails.ratings.length > 0 && (
                <>
                  <h3>Comments</h3>
                  <ul className="list-unstyled">
                    {gameDetails.ratings.map((rating, index) => (
                      <li key={index}>
                        {rating.title}: {rating.percent}%
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title">Description:</h3>
              <p className="card-text rounded">{gameDetails.description_raw}</p>
              <Link to="/" className="btn btn-secondary rounded-pill mt-3">
                Back to All Games
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 card">
        <div className="col-md-12">
          <h3 className="text-center mt-3 card-header bg-secondary rounded">
            Screenshots
          </h3>
          <Carousel className="m-2">
            {gameDetails.short_screenshots &&
            gameDetails.short_screenshots.length > 0 ? (
              gameDetails.short_screenshots.map((screenshot, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={screenshot.image}
                    className="d-block w-100"
                    alt={`Screenshot ${index + 1}`}
                  />
                </Carousel.Item>
              ))
            ) : (
              <Carousel.Item>
                <img
                  src={gameDetails.background_image}
                  className="d-block w-100"
                  alt={gameDetails.name}
                />
              </Carousel.Item>
            )}
          </Carousel>
        </div>
      </div>

      <div>
        <Comment />
      </div>

    </div>
  );
};

export default GameDetails;
