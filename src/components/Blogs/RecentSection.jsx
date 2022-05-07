import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function RecentPost(props) {
  const { id, image, title, date } = props;
  return (
    <div className="popular-post">
      <Link to={`/blogs/${id}`}>
        <img src={image} alt="blog-img" />
      </Link>
      <h5>
        <Link to={`/blogs/${id}`}>{title}</Link>
      </h5>
      <span>{date.split("T")[0]}</span>
    </div>
  );
}

const RecentSection = (props) => {
  const { blogs } = props;

  return (
    <>
      <div className="col-lg-4 col-md-5">
        <div className="blog-sidebar">
          <aside className="widget widget-trend-post">
            <h3 className="widget-title">Recent Posts</h3>
            {blogs?.length > 0 ? (
              blogs.map((blog) => (
                <Fragment key={blog._id}>
                  <RecentPost
                    title={blog?.title}
                    image={blog?.postImage}
                    date={blog?.createdAt}
                    id={blog._id}
                  />
                </Fragment>
              ))
            ) : (
              <p>No blog found!</p>
            )}
          </aside>
        </div>
      </div>
    </>
  );
};

export default RecentSection;
