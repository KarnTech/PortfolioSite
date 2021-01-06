import React from "react";
import Button from "@material-ui/core/Button";
import "./Project.css";

const Project = ({
  title,
  description,
  image,
  demolink,
  codelink,
  demo,
  code
}) => {
  return (
    <div className="project__card">
      <div className="project__imageone">
        <img className="project__image" src={image} alt={demo} />
        <div class="overlay">
          <div class="text">{description}</div>
        </div>
      </div>
      <h3 className="project__title">{title}</h3>
      <div className="project__button">
        <Button
          target="_blank"
          href={code}
          className="project__codebutton"
          variant="contained"
        >
          Code
        </Button>

        <Button
          target="_blank"
          href={demo}
          className="project__demobutton"
          variant="contained"
        >
          Demo
        </Button>
      </div>
    </div>
  );
};

export default Project;
