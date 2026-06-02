import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  return <div>{project.description}</div>;
}

export default ProjectPage;
