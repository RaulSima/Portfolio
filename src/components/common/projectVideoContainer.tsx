import "../../styles/projects.css";

type ComponentProps = {
  video: string;
  description: string;
};

const ProjectVideoContainer = ({ video, description }: ComponentProps) => {
  return (
    <div className="project-info-container">
      <video
        className="project-video"
        src={video}
        width="550"
        height="308"
        controls
      ></video>
      <div className="info-text">{description}</div>
    </div>
  );
};

export default ProjectVideoContainer;
