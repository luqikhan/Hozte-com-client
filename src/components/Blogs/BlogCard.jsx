import React from "react";
import { Link } from "react-router-dom";

function BlogCard(props) {
  const { title, date, id, image, totalComment, removePost, loading } = props;
  const isAuthenticated = localStorage.getItem("token");

  return (
    <div className="col-lg-6">
      <div className="post-item-1">
        <img src={image} alt="blog-img" style={{ height: 250 }} />
        <div className="b-post-details">
          <div className="bp-meta">
            <Link to={`/blogs/${id}`}>
              <i className="fal fa-clock"></i>
              {date}
            </Link>
            <Link to={`/blogs/${id}`}>
              <i className="fal fa-comments"></i>
              {totalComment} Comments
            </Link>
          </div>
          <h3>
            <Link to={`/blogs/${id}`}>{title}</Link>
          </h3>

          <div className="row justify-content-between align-items-center">
            <Link className="read-more" to={`/blogs/${id}`}>
              Read More<i className="fal fa-arrow-right"></i>
            </Link>
            {isAuthenticated ? (
              <button
                type="button"
                disabled={loading}
                onClick={() => removePost(id)}
                className="btn btn-outline-danger btn-sm"
              >
                {loading ? "Loading..." : "Delete"}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
