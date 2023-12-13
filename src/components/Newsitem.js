import React from "react";

const Newsitem = (props) => {
  let { title, description, urlToImage, newsUrl, author, publishedAt, source } =
    props;
  const publishedDate = new Date(publishedAt);

  // Define custom date options to get like "2 October 2023" format
  const dateFormatOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  return (
    <div>
      <div className="card" style={{ margin: "10px 0px" }} data-bs-theme={props.darkmode}>
        <span className={`position-absolute top-0 start-50 translate-middle badge rounded-pill bg-${props.btnColor} text-${props.darkmode}`}>
          {source}
        </span>
        <img
          src={urlToImage}
          className="card-img-top"
          alt="Currently Img is not Available"
        />

        <div className="card-body">
          <h5 className="card-title">
            {/* {title.length <= 49 ? title : `${title.slice(0, 49)}...`} */}
            {title}
          </h5>
          <div className="card-text">
            {/* {description.length <= 95
                ? description
                : `${description.slice(0, 95)}...`} */}
            {description}
            {/* This is the structure of ternary operator => condition ? expressionIfTrue : expressionIfFalse */}
            <p className="card-text">
              <small className="text-body-secondary">
                By {author} on{" "}
                {publishedDate.toLocaleDateString(undefined, dateFormatOptions)}{" "}
                at {publishedDate.toLocaleTimeString()}
              </small>
            </p>
          </div>
          <a
            href={newsUrl}
            target="_blank"
            className={`btn btn-sm btn-${props.btnColor}`}
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
