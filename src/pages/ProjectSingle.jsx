import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects";
import { useSingleProject } from "../context/SingleProjectContext";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const ProjectSingle = () => {
  const { id } = useParams();
  const { getProjectById } = useSingleProject();
  const project = getProjectById(parseInt(id));

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 0.2 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      {/* Check if project data is available */}
      {project && (
        <>
          <ProjectHeader project={project} />
          <ProjectGallery images={project.ProjectImages} />
          <ProjectInfo project={project} />
          {/* <ProjectRelatedProjects relatedProjects={project.RelatedProject.Projects} /> */}
        </>
      )}
    </motion.div>
  );
};

export default ProjectSingle;
