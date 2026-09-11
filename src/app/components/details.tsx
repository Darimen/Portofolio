"use client";

import HR from "./horizontal-line";
import { useAppContext } from "../context";
import { useEffect, useRef, useState } from "react";
import { projects } from "../projects";
import { ToolAcronym, ToolClassification, tools } from "../tools";


export default function Details() {

  const { tags, setTags, setter, setSetter } = useAppContext();
  const [modalOpen, setModalOpen] = useState(false);

  function toggleTag(tag: string) {
    if (setter != "tag") {
      setTags([tag]);
      setSetter("tag");
    } else {
      if (tags.find((it) => it === tag)) {
        setTags(tags.filter((it) => it !== tag));
      }
      else {
        setTags([...tags, tag]);
      }
    }

  }

  function getPostsCountForTag(tag: string): number {
    let count = 0;

    projects.forEach((project) => {
      if (project.tags.includes(tag)) {
        count++;
      }
    });

    return count;
  }

  function getPostsThatMatchActiveTags(): number {
    if (tags.length === 0) return projects.length;
    let count = 0;
    projects.forEach((project) => {
      let matchesAll = true;
      tags.forEach((tag) => {
        if (!project.tags.includes(tag)) {
          matchesAll = false;
        }
      });
      if (matchesAll) {
        count++;
      }
    });
    return count;
  }

  const [postsThatMatch, setPostsThatMatch] = useState(getPostsThatMatchActiveTags());

  useEffect(() => {
    //console.log("Tags changed: " + tags);
    setPostsThatMatch(getPostsThatMatchActiveTags());
  }, [tags]);

  const formatCategory = (name:string) => {
    return name.charAt(0).concat(name.substring(1).toLowerCase())
  }

  // Build the list from the classifications actually used by the tools so
  // every category with tools is rendered, regardless of enum representation.
  const categories = Array.from(new Set(tools.map((tool) => tool.class)));

  return (
    <div className="flex flex-col items-center pt-4">
      <div className="theme-switch">
        
      </div>
      <img className="w-16 h-16 bg-gray-300 rounded-full mb-4 object-cover" src={"poza.png"} alt="Poza Profil" />
      <h2 className="text-xl font-semibold">Tandea Darius</h2>
      <p className="text-foreground mb-2">Software Engineer Intern</p>

      <h3 className="text-lg">
        Contact
      </h3>

      <div className="flex flex-col mb-2">

        <ul className="flex gap-4 list-none">
          <li>
            <u>
              <a href="mailto:sorin.darius2002@gmail.com" target="blank"> <img className="max-h-6" src="Gmail.png" alt="gmail" /></a>
            </u>
          </li>

          <li>
            <u>
              {/* just found out of invert, but I like more the info with that white background when in dark mode.  */}
              <a href="https://github.com/Darimen" target="blank"> <img className="max-h-6 dark:invert" src="GitHub_Logo.png" alt="github" /></a>
            </u>
          </li>

          <li>
            <u>
              <a href="https://www.linkedin.com/in/sorin-darius-tandea-00a763213/" target="blank"> <img className="max-h-6" src="LinkedIn.png" alt="github" /></a>
            </u>
          </li>
        </ul>

      </div>

      <div className="max-md:hidden">
        <HR></HR>
      </div>
      <ul className="list-decimal gap-12 max-w-2xs text-wrap overflow-y-auto max-h-fit max-md:hidden">

        <li>
          <h2 className="text-xl"> Technical Skills: </h2>
          <ul className="ml-4">

            {categories?.map((category) => (
              <li key={category} className="mb-2">
                <h2 className="text-lg">{formatCategory(Object.values(ToolClassification).at(category)?.toString() ?? "UNDEFINED")}</h2>

                <div className="flex flex-wrap flex-row gap-3">
                  
                  {tools?.filter((tool) => tool.class === category)
                    .map((tool) => {

                      const acronym = Object.values(ToolAcronym).at(tool.acronym)?.toString() ?? "UNDEFINED"
                      const isSelected = tags.includes(acronym);
                      return (
                        <div
                          key={tool.acronym}
                          className={`flex pl-1 pr-1 ${isSelected ? "selectedTag" : "tag"}`}
                          data-tag={tool.acronym}
                          onClick={() => toggleTag(acronym)}
                        >
                          {tool.displayName} ({getPostsCountForTag(acronym)})
                        </div>
                      );
                    })}

                </div>
              </li>
            ))}

          </ul>
        </li>

        <li>
          <h2 className="text-xl"> Spoken Languages: </h2>
          <ul className="ml-4 text-lg">
            <li className=" grid grid-cols-2 max-lg:grid-cols-1"><div className="font-semibold">Romanian:</div> <div className="md:max-lg:indent-1">Native</div></li>
            <li className=" grid grid-cols-2 max-lg:grid-cols-1"><div className="font-semibold">English:</div> <div className="md:max-lg:indent-1">Fluent</div></li>
            <li className=" grid grid-cols-2 max-lg:grid-cols-1"><div className="font-semibold">German:</div> <div className="md:max-lg:indent-1">Basic</div></li>
            <li className=" grid grid-cols-2 max-lg:grid-cols-1"><div className="font-semibold">French:</div> <div className="md:max-lg:indent-1">Basic</div></li>
          </ul>
        </li>

        {/* <li>
          <h2 className="text-xl"> Studies: </h2>
          <ul className="ml-4 text-lg">
            <li className="flex flex-row "><div className="font-semibold">Technical University of Cluj-Napoca: 2021-2025</div></li>
          </ul>
        </li> */}

      </ul>

      <button className="mt-4 mb-4 px-4 py-2 bg-background border rounded-lg md:hidden" onClick={() => { setModalOpen(true); }}>Show Technical Skills & Languages</button>

      {modalOpen &&
        <div className="fixed inset-0 bg-background bg-opacity-20 flex items-center justify-center z-50">
          <div className="bg-background p-6 rounded-lg m-2">
            <h2 className="text-2xl mb-4">Technical Skills & Languages</h2>
            <div className="max-h-[60vh] h-full overflow-y-auto">

              <div>
                <ul className="list-decimal gap-12 max-w-2xs text-wrap">

                  <li>
                    <h2 className="text-xl"> Technical Skills: </h2>
                    <ul className="ml-4">

                      {categories?.map((category) => (
                        <li key={category} className="mb-2">
                          <h2 className="text-lg">{formatCategory(Object.values(ToolClassification).at(category)?.toString() ?? "UNDEFINED")}</h2>

                          <div className="flex flex-wrap flex-row gap-3">
                            
                            {tools?.filter((tool) => tool.class === category)
                              .map((tool) => {

                                const acronym = Object.values(ToolAcronym).at(tool.acronym)?.toString() ?? "UNDEFINED"
                                const isSelected = tags.includes(acronym);
                                return (
                                  <div
                                    key={tool.acronym}
                                    className={`flex pl-1 pr-1 ${isSelected ? "selectedTag" : "tag"}`}
                                    data-tag={tool.acronym}
                                    onClick={() => toggleTag(acronym)}
                                  >
                                    {tool.displayName} ({getPostsCountForTag(acronym)})
                                  </div>
                                );
                              })}

                          </div>
                        </li>
                      ))}

                    </ul>
                  </li>

                  <li>
                    <h2 className="text-xl"> Spoken Languages: </h2>
                    <ul className="ml-4 text-lg">
                      <li className=" grid grid-cols-2"><div className="font-semibold">Romanian:</div> <div>Native</div></li>
                      <li className=" grid grid-cols-2"><div className="font-semibold">English:</div> <div>Fluent</div></li>
                      <li className=" grid grid-cols-2"><div className="font-semibold">German:</div> <div>Basic</div></li>
                      <li className=" grid grid-cols-2"><div className="font-semibold">French:</div> <div>Basic</div></li>
                    </ul>
                  </li>

                  {/* <li>
          <h2 className="text-xl"> Studies: </h2>
          <ul className="ml-4 text-lg">
            <li className="flex flex-row "><div className="font-semibold">Technical University of Cluj-Napoca: 2021-2025</div></li>
          </ul>
        </li> */}

                </ul>

              </div>

            </div>
            <div className="flex flex-row justify-end items-center mt-4">
              <div className="mt-4 px-4 py-2 rounded-lg">
                There{" "}
                {postsThatMatch === 0 ? (
                  "are no posts"
                ) : postsThatMatch === 1 ? (
                  <>
                    is <span className="text-blue-600 font-semibold">1</span> post
                  </>
                ) : (
                  <>
                    are{" "}
                    <span className="text-blue-600 font-semibold">{postsThatMatch}</span> posts
                  </>
                )}{" "}
                with the selected tags.
              </div>

              <button className="mt-4 px-4 py-2 bg-background border rounded-lg" onClick={() => { setModalOpen(false); }}>Close</button>
            </div>
          </div>
        </div>
      }




    </div>
  );
}

/*
Frontend: HTML5, CSS3, JavaScript/TypeScript, React

Backend: Node.js, Express.js, Java, Spring Boot, .NET, Python, etc.

Databases: SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Redis)

DevOps / Cloud: Docker, Kubernetes, AWS, Azure, GCP, CI/CD pipelines

Version Control: Git, GitHub/GitLab/Bitbucket

Testing: Jest, Mocha, JUnit, Cypress, Selenium

Other: REST APIs, GraphQL, WebSockets
*/