
import ProjectCard from "./project-card";
import { projects } from "../projects";
import { useEffect, useRef, useState } from "react";

export default function Content() {

  const [height, setHeight] = useState(0);
  const ref = useRef<any>(null);


  useEffect(() => {
    setHeight(ref.current.clientHeight);
    //console.log("Height set to: " + ref.current.clientHeight);
  }, [setHeight]);

  return (
    <div className="text-center w-full min-lg:min-w-[100%] flex-col flex max-md:items-center pt-4 pb-4">
      <div className="mb-4 h-fit" ref={ref}>
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-700 ">
          Here you’ll find projects I’ve worked on, with brief descriptions, 
          screenshots, and the technologies used
        </p>
        <p className="text-lg text-gray-700">
          My main focus is web development, and I also explore server management,
          game development and Cisco networking.
        </p>
        <p className="text-lg text-gray-700 mb-2">
          Feel free to explore and reach out if you have any questions!
        </p>
        <h2 className="text-2xl font-bold mb-2">Projects:</h2>
      </div>
      {/* min-lg:h-[calc(100vh-${height}px)] */}

      <div style={{ height: `calc(95vh - ${height}px)` }} className={`flex flex-col gap-4  overflow-y-scroll w-full  max-md:w-[99vw]`}>

        {/* <h2 className="text-2xl font-bold mb-2">Work experience:</h2> -- none relevant yet*/}
        {/* <h2 className="text-2xl font-bold mb-2">Certifications:</h2> --none official */}

        {projects.sort((a, b) => b.tags.length - a.tags.length).map((it, index) => <ProjectCard key={index} project={it} />)}

      </div>
    </div>
  );
}