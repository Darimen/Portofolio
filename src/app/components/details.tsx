"use client";

import HR from "./horizontal-line";
import { useAppContext } from "../context";
import { useEffect, useState } from "react";
import { projects } from "../projects";


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

  return (
    <div className="flex flex-col items-center pt-4">
      <div className="theme-switch">
        
      </div>
      <img className="w-16 h-16 bg-gray-300 rounded-full mb-4 object-cover" src={"poza.png"} alt="Poza Profil" />
      <h2 className="text-xl font-semibold">Tandea Darius</h2>
      <p className="text-foreground mb-2">Junior Full-Stack Web Developer</p>

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

            <li className="mb-2">
              <h2 className="text-lg">Frontend:</h2>
              <div className="flex flex-wrap flex-row gap-3 ">
                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "HTML") ? "selectedTag" : "tag")} data-tag="HTML" onClick={() => toggleTag("HTML")}>
                  HTML ({getPostsCountForTag("HTML")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "CSS") ? "selectedTag" : "tag")} data-tag="CSS" onClick={() => toggleTag("CSS")}>
                  CSS ({getPostsCountForTag("CSS")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "JS") ? "selectedTag" : "tag")} data-tag="JS" onClick={() => toggleTag("JS")}>
                  Javascript ({getPostsCountForTag("JS")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "JQ") ? "selectedTag" : "tag")} data-tag="JQ" onClick={() => toggleTag("JQ")}>
                  jQuery ({getPostsCountForTag("JQ")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "AJX") ? "selectedTag" : "tag")} data-tag="AJX" onClick={() => toggleTag("AJX")}>
                  Ajax ({getPostsCountForTag("AJX")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "AXO") ? "selectedTag" : "tag")} data-tag="AXO" onClick={() => toggleTag("AXO")}>
                  Axios ({getPostsCountForTag("AXO")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "TCSS") ? "selectedTag" : "tag")} data-tag="TCSS" onClick={() => toggleTag("TCSS")}>
                  TailwindCSS ({getPostsCountForTag("TCSS")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "NJS") ? "selectedTag" : "tag")} data-tag="NJS" onClick={() => toggleTag("NJS")}>
                  NextJS ({getPostsCountForTag("NJS")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "RJS") ? "selectedTag" : "tag")} data-tag="RJS" onClick={() => toggleTag("RJS")}>
                  ReactJS ({getPostsCountForTag("RJS")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "TS") ? "selectedTag" : "tag")} data-tag="TS" onClick={() => toggleTag("TS")}>
                  Typescript ({getPostsCountForTag("TS")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "JSX") ? "selectedTag" : "tag")} data-tag="JSX" onClick={() => toggleTag("JSX")}>
                  JSX ({getPostsCountForTag("JSX")})
                </div>

              </div>
            </li>

            <li className="mb-2">
              <h2 className="text-lg">Backend:</h2>
              <div className="flex flex-wrap flex-row gap-3">
                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "SB") ? "selectedTag" : "tag")} data-tag="SB" onClick={() => toggleTag("SB")}>
                  Spring Boot ({getPostsCountForTag("SB")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "DGS") ? "selectedTag" : "tag")} data-tag="DGS" onClick={() => toggleTag("DGS")}>
                  Netflix DGS ({getPostsCountForTag("DGS")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "JAV") ? "selectedTag" : "tag")} data-tag="JAV" onClick={() => toggleTag("JAV")}>
                  Java ({getPostsCountForTag("JAV")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "RMQ") ? "selectedTag" : "tag")} data-tag="RMQ" onClick={() => toggleTag("RMQ")}>
                  RabbitMQ ({getPostsCountForTag("RMQ")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "RST") ? "selectedTag" : "tag")} data-tag="RST" onClick={() => toggleTag("RST")}>
                  REST ({getPostsCountForTag("RST")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "GRPC") ? "selectedTag" : "tag")} data-tag="GRPC" onClick={() => toggleTag("GRPC")}>
                  GRPC ({getPostsCountForTag("GRPC")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "GQL") ? "selectedTag" : "tag")} data-tag="GQL" onClick={() => toggleTag("GQL")}>
                  GraphQL ({getPostsCountForTag("GQL")})
                </div>

              </div>
            </li>

            <li className="mb-2">
              <h2 className="text-lg">Databases:</h2>
              <div className="flex flex-wrap flex-row gap-3">
                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "SQL") ? "selectedTag" : "tag")} data-tag="SQL" onClick={() => toggleTag("SQL")}>
                  SQL ({getPostsCountForTag("SQL")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "PSQL") ? "selectedTag" : "tag")} data-tag="PSQL" onClick={() => toggleTag("PSQL")}>
                  ProgreSQL ({getPostsCountForTag("PSQL")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "MDB") ? "selectedTag" : "tag")} data-tag="MDB" onClick={() => toggleTag("MDB")}>
                  MongoDB ({getPostsCountForTag("MDB")})
                </div>

              </div>
            </li>

            <li className="mb-2">
              <h2 className="text-lg">DevOps:</h2>
              <div className="flex flex-wrap flex-row gap-3">
                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "DOCK") ? "selectedTag" : "tag")} data-tag="DOCK" onClick={() => toggleTag("DOCK")}>
                  Docker ({getPostsCountForTag("DOCK")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "EC2") ? "selectedTag" : "tag")} data-tag="EC2" onClick={() => toggleTag("EC2")}>
                  AWS EC2 ({getPostsCountForTag("EC2")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "GCPS") ? "selectedTag" : "tag")} data-tag="GCPS" onClick={() => toggleTag("GCPS")}>
                  GCP Bucket ({getPostsCountForTag("GCPS")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "LIN") ? "selectedTag" : "tag")} data-tag="LIN" onClick={() => toggleTag("LIN")}>
                  Linux ({getPostsCountForTag("LIN")})
                </div>
              </div>
            </li>

            <li className="mb-2">
              <h2 className="text-lg">Other:</h2>
              <div className="flex flex-wrap flex-row gap-3">
                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "GIT") ? "selectedTag" : "tag")} data-tag="GIT" onClick={() => toggleTag("GIT")}>
                  GitHub ({getPostsCountForTag("GIT")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "PMAN") ? "selectedTag" : "tag")} data-tag="PMAN" onClick={() => toggleTag("PMAN")}>
                  Postman ({getPostsCountForTag("PMAN")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "CF") ? "selectedTag" : "tag")} data-tag="CF" onClick={() => toggleTag("CF")}>
                  Cloudflare ({getPostsCountForTag("CF")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "NGINX") ? "selectedTag" : "tag")} data-tag="NGINX" onClick={() => toggleTag("NGINX")}>
                  nginx ({getPostsCountForTag("NGINX")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "CERTBOT") ? "selectedTag" : "tag")} data-tag="CERTBOT" onClick={() => toggleTag("CERTBOT")}>
                  Certbot ({getPostsCountForTag("CERTBOT")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "TRA") ? "selectedTag" : "tag")} data-tag="TRA" onClick={() => toggleTag("TRA")}>
                  Traefik ({getPostsCountForTag("TRA")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "PY") ? "selectedTag" : "tag")} data-tag="PY" onClick={() => toggleTag("PY")}>
                  Python ({getPostsCountForTag("PY")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "C/C++") ? "selectedTag" : "tag")} data-tag="C/C++" onClick={() => toggleTag("C/C++")}>
                  C/C++ ({getPostsCountForTag("C/C++")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "C#") ? "selectedTag" : "tag")} data-tag="C#" onClick={() => toggleTag("C#")}>
                  C# ({getPostsCountForTag("C#")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "UNITY") ? "selectedTag" : "tag")} data-tag="UNITY" onClick={() => toggleTag("UNITY")}>
                  Unity ({getPostsCountForTag("UNITY")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "INO") ? "selectedTag" : "tag")} data-tag="INO" onClick={() => toggleTag("INO")}>
                  Arduino IDE ({getPostsCountForTag("INO")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "3D") ? "selectedTag" : "tag")} data-tag="3D" onClick={() => toggleTag("3D")}>
                  3D Modelling ({getPostsCountForTag("3D")})
                </div>

                <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "BLENDER") ? "selectedTag" : "tag")} data-tag="BLENDER" onClick={() => toggleTag("BLENDER")}>
                  Blender ({getPostsCountForTag("BLENDER")})
                </div>


              </div>
            </li>
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

                      <li className="mb-2">
                        <h2 className="text-lg">Frontend:</h2>
                        <div className="flex flex-wrap flex-row gap-3 ">
                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "HTML") ? "selectedTag" : "tag")} data-tag="HTML" onClick={() => toggleTag("HTML")}>
                            HTML ({getPostsCountForTag("HTML")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "CSS") ? "selectedTag" : "tag")} data-tag="CSS" onClick={() => toggleTag("CSS")}>
                            CSS ({getPostsCountForTag("CSS")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "JS") ? "selectedTag" : "tag")} data-tag="JS" onClick={() => toggleTag("JS")}>
                            Javascript ({getPostsCountForTag("JS")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "JQ") ? "selectedTag" : "tag")} data-tag="JQ" onClick={() => toggleTag("JQ")}>
                            jQuery ({getPostsCountForTag("JQ")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "AJX") ? "selectedTag" : "tag")} data-tag="AJX" onClick={() => toggleTag("AJX")}>
                            Ajax ({getPostsCountForTag("AJX")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "AXO") ? "selectedTag" : "tag")} data-tag="AXO" onClick={() => toggleTag("AXO")}>
                            Axios ({getPostsCountForTag("AXO")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "TCSS") ? "selectedTag" : "tag")} data-tag="TCSS" onClick={() => toggleTag("TCSS")}>
                            TailwindCSS ({getPostsCountForTag("TCSS")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "NJS") ? "selectedTag" : "tag")} data-tag="NJS" onClick={() => toggleTag("NJS")}>
                            NextJS ({getPostsCountForTag("NJS")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "RJS") ? "selectedTag" : "tag")} data-tag="RJS" onClick={() => toggleTag("RJS")}>
                            ReactJS ({getPostsCountForTag("RJS")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "TS") ? "selectedTag" : "tag")} data-tag="TS" onClick={() => toggleTag("TS")}>
                            Typescript ({getPostsCountForTag("TS")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "JSX") ? "selectedTag" : "tag")} data-tag="JSX" onClick={() => toggleTag("JSX")}>
                            JSX ({getPostsCountForTag("JSX")})
                          </div>

                        </div>
                      </li>

                      <li className="mb-2">
                        <h2 className="text-lg">Backend:</h2>
                        <div className="flex flex-wrap flex-row gap-3">
                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "SB") ? "selectedTag" : "tag")} data-tag="SB" onClick={() => toggleTag("SB")}>
                            Spring Boot ({getPostsCountForTag("SB")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "DGS") ? "selectedTag" : "tag")} data-tag="DGS" onClick={() => toggleTag("DGS")}>
                            Netflix DGS ({getPostsCountForTag("DGS")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "JAV") ? "selectedTag" : "tag")} data-tag="JAV" onClick={() => toggleTag("JAV")}>
                            Java ({getPostsCountForTag("JAV")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "RMQ") ? "selectedTag" : "tag")} data-tag="RMQ" onClick={() => toggleTag("RMQ")}>
                            RabbitMQ ({getPostsCountForTag("RMQ")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "RST") ? "selectedTag" : "tag")} data-tag="RST" onClick={() => toggleTag("RST")}>
                            REST ({getPostsCountForTag("RST")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "GRPC") ? "selectedTag" : "tag")} data-tag="GRPC" onClick={() => toggleTag("GRPC")}>
                            GRPC ({getPostsCountForTag("GRPC")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "GQL") ? "selectedTag" : "tag")} data-tag="GQL" onClick={() => toggleTag("GQL")}>
                            GraphQL ({getPostsCountForTag("GQL")})
                          </div>

                        </div>
                      </li>

                      <li className="mb-2">
                        <h2 className="text-lg">Databases:</h2>
                        <div className="flex flex-wrap flex-row gap-3">
                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "SQL") ? "selectedTag" : "tag")} data-tag="SQL" onClick={() => toggleTag("SQL")}>
                            SQL ({getPostsCountForTag("SQL")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "PSQL") ? "selectedTag" : "tag")} data-tag="PSQL" onClick={() => toggleTag("PSQL")}>
                            ProgreSQL ({getPostsCountForTag("PSQL")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "MDB") ? "selectedTag" : "tag")} data-tag="MDB" onClick={() => toggleTag("MDB")}>
                            MongoDB ({getPostsCountForTag("MDB")})
                          </div>

                        </div>
                      </li>

                      <li className="mb-2">
                        <h2 className="text-lg">DevOps:</h2>
                        <div className="flex flex-wrap flex-row gap-3">
                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "DOCK") ? "selectedTag" : "tag")} data-tag="DOCK" onClick={() => toggleTag("DOCK")}>
                            Docker ({getPostsCountForTag("DOCK")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "EC2") ? "selectedTag" : "tag")} data-tag="EC2" onClick={() => toggleTag("EC2")}>
                            AWS EC2 ({getPostsCountForTag("EC2")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "GCPS") ? "selectedTag" : "tag")} data-tag="GCPS" onClick={() => toggleTag("GCPS")}>
                            GCP Bucket ({getPostsCountForTag("GCPS")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "LIN") ? "selectedTag" : "tag")} data-tag="LIN" onClick={() => toggleTag("LIN")}>
                            Linux ({getPostsCountForTag("LIN")})
                          </div>
                        </div>
                      </li>

                      <li className="mb-2">
                        <h2 className="text-lg">Other:</h2>
                        <div className="flex flex-wrap flex-row gap-3">
                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "GIT") ? "selectedTag" : "tag")} data-tag="GIT" onClick={() => toggleTag("GIT")}>
                            GitHub ({getPostsCountForTag("GIT")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "PMAN") ? "selectedTag" : "tag")} data-tag="PMAN" onClick={() => toggleTag("PMAN")}>
                            Postman ({getPostsCountForTag("PMAN")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "CF") ? "selectedTag" : "tag")} data-tag="CF" onClick={() => toggleTag("CF")}>
                            Cloudflare ({getPostsCountForTag("CF")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "NGINX") ? "selectedTag" : "tag")} data-tag="NGINX" onClick={() => toggleTag("NGINX")}>
                            nginx ({getPostsCountForTag("NGINX")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "CERTBOT") ? "selectedTag" : "tag")} data-tag="CERTBOT" onClick={() => toggleTag("CERTBOT")}>
                            Certbot ({getPostsCountForTag("CERTBOT")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "TRA") ? "selectedTag" : "tag")} data-tag="TRA" onClick={() => toggleTag("TRA")}>
                            Traefik ({getPostsCountForTag("TRA")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "PY") ? "selectedTag" : "tag")} data-tag="PY" onClick={() => toggleTag("PY")}>
                            Python ({getPostsCountForTag("PY")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "C/C++") ? "selectedTag" : "tag")} data-tag="C/C++" onClick={() => toggleTag("C/C++")}>
                            C/C++ ({getPostsCountForTag("C/C++")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "C#") ? "selectedTag" : "tag")} data-tag="C#" onClick={() => toggleTag("C#")}>
                            C# ({getPostsCountForTag("C#")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "UNITY") ? "selectedTag" : "tag")} data-tag="UNITY" onClick={() => toggleTag("UNITY")}>
                            Unity ({getPostsCountForTag("UNITY")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "INO") ? "selectedTag" : "tag")} data-tag="INO" onClick={() => toggleTag("INO")}>
                            Arduino IDE ({getPostsCountForTag("INO")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "3D") ? "selectedTag" : "tag")} data-tag="3D" onClick={() => toggleTag("3D")}>
                            3D Modelling ({getPostsCountForTag("3D")})
                          </div>

                          <div className={"flex pl-1 pr-1 ".concat(tags.find((it) => it === "BLENDER") ? "selectedTag" : "tag")} data-tag="BLENDER" onClick={() => toggleTag("BLENDER")}>
                            Blender ({getPostsCountForTag("BLENDER")})
                          </div>


                        </div>
                      </li>
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