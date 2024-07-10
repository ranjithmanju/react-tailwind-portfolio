const ProjectGallery = (projectImages) => {
  console.log(projectImages.images);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {projectImages.images.map((project) => {
        return (
          <div className="mb-10 sm:mb-0 rounded-xl" key={project.id}
          style={{
            boxShadow:
              "0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1)", 
          }}
          >
            <img
              src={project.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none w-full h-full "
              alt={project.title}
              key={project.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGallery;
