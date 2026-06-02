import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import PageNotFound from "./PageNotFound";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <PageNotFound />;
  }

  return <div>{project.description}</div>;
}

export default ProjectPage;
