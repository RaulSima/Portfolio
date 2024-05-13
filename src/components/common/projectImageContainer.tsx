import "../../styles/projects.css";

type ComponentProps = {
  image: string;
  description: string;
};

const ProjectImageContainer = ({ image, description }: ComponentProps) => {
  return (
    <div className="project-info-container">
      <img
        className="project-video"
        src={image}
        alt="remote controled car"
        width="550"
        height="308"
      />
      <div className="info-text">{description}</div>
    </div>
  );
};

export default ProjectImageContainer;
