"use client"

import { useAppContext } from "../context";
import { useState } from "react";
import { getTagFull } from "../tags";
import HR from "./horizontal-line";

export interface ProjectStructI {
    title: string,
    description: string,
    challenges?: string[],
    responsabilities?: string[],
    imageUrl?: string,
    projectUrl?: string,
    gitUrl?: string,
    tags: string[]
}

export default function ProjectCard({ project }: { project: ProjectStructI }) {

    const { tags: activeTags, setTags, setter, setSetter } = useAppContext();

    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
        //console.log(open);
    }

    // NEW: handle open/close so the close animation can play
    function toggleBody() {
        if (isVisible) {
            setIsClosing(true);     // play slideUp
        } else {
            setIsVisible(true);     // show and play slideDown
        }
    }

    function toggleTags(tags: string[]) {
        if (setter === "tag") {
            setSetter("post");
            setTags(tags);
        } else {
            if (activeTags.find((it) => it === tags[0])) {
                setTags(activeTags.filter((it) => it !== tags[0]));
            } else {
                setTags([...activeTags, tags[0]]);
            }
        }

    }

    function disableSelectedTag(tag: string) {
        setTags(activeTags.filter((it) => it !== tag));
    }

    // if not a full fit, then empty
    function searchedTagsFully(tags: string[]): string[] {

        if (!allMatched(tags)) {
            return [];
        }

        return tags.filter((t) => activeTags.includes(t));
    }

    function allMatched(tags: string[]): boolean {
        return activeTags.every((active) => tags.includes(active));
    }

    return (

        <div className={
            ((searchedTagsFully(project.tags).length > 0) ? "selectedProjectCard" : "projectCard")
                // ((activeTags.find((it) => project.tags.find((tag) => tag === it))) ? "selectedProjectCard" : "projectCard")
                .concat(" flex flex-col w-full ")
                .concat((activeTags.length > 0 && searchedTagsFully(project.tags).length === 0) ? " hidden " : "")
        } // hide if not matching tags 100%
        >

            <div className={"grid grid-cols-12  items-center w-full p-4 rounded-t-2xl  ".concat(isVisible ? "openCard" : "")}>
                {/* title */}
                <div className="flex col-span-4 align-top flex-row gap-2 justify-baseline w-full" onClick={() => toggleBody()}>
                    <h1 className="text-xl text-wrap wrap-anywhere" >{project.title}</h1>
                    <div className={isVisible ? "text-xl" : ""}> {/* so they look the same size :D */}
                        {isVisible ? "▼" : "▶"}
                    </div>
                </div>

                {/* tags */}
                {/* </div><div hidden={setter !== "tag"} className=" gap-3 flex flex-row"> */}
                <div className={" gap-3 w-full flex flex-row flex-wrap justify-center".concat(project.projectUrl === undefined && project.gitUrl === undefined ? " max-lg:col-span-8 lg:col-span-7 " : " col-span-7 ")}>
                    {searchedTagsFully(project.tags).sort((a, b) => a.localeCompare(b)).map((it, index) =>
                        <div className="selectedTagPostTitle-lazyDeveloper h-fit pl-1 pr-1" 
                        key={index} 
                        onClick={()=>disableSelectedTag(it)}>
                            {getTagFull(it)}
                        </div>
                    )}
                </div>
                {/* links if any :p */}
                <div className="flex col-span-1 w-full justify-end flex-row gap-2 items-center">

                    <a className="text-nowrap" hidden={project.gitUrl === (undefined)} href={project.gitUrl} target="blank"><img className="h-5" src="GitHub_Logo.png" alt="" /></a>
                    <a className="text-nowrap" hidden={project.projectUrl === (undefined)} href={project.projectUrl} target="blank"><img className="h-5" src="globe.svg" alt="website" /></a>

                </div>

            </div>

            {/* body of project */}
            <div
                hidden={!isVisible && !isClosing}  /* keep mounted while closing to let slideUp run */
                onAnimationEnd={() => {
                    if (isClosing) {
                        setIsClosing(false);
                        setIsVisible(false);       // actually hide after slideUp finishes
                    }
                }}
                className={`${isClosing ? "slideUp" : "slideDown"} flex md:flex-row gap-2 p-4 text-left w-full max-md:flex-col-reverse `}
            >
                {/* the robot did the slide up animation and added it, ngl */}
                <div className="w-5/7 max-md:w-full">
                    {project.description.split("\n").map((it, index) => <span key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{it}<br /></span>)}
                    {project.responsabilities ?
                        <ul>
                            <li><b className="whitespace-pre">&nbsp;&nbsp;&nbsp;&nbsp;My responsabilities:</b></li>
                            {project.responsabilities?.map((resp, index) => <li key={index}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{resp}</li>)}
                        </ul>
                        :
                        null
                    }

                    {project.challenges ?
                        <ul>
                            <li><b className="whitespace-pre">&nbsp;&nbsp;&nbsp;&nbsp;Some of the challenges:</b></li>
                            {project.challenges?.map((chall, index) => <li key={index}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{chall}</li>)}
                        </ul>
                        :
                        null
                    }
                </div>

                <div className={`w-2/7 max-md:w-full flex flex-col gap-2 items-center `}>


                    <div className="flex flex-wrap flex-row gap-3 h-fit">
                        {project.tags.sort((a, b) => a.localeCompare(b)).map((it, index) =>
                            <div
                                key={index}
                                onClick={() => toggleTags([it])}
                                className={`tag pl-1 pr-1  ${activeTags.includes(it) ? "selectedTag" : ""}`}>
                                {getTagFull(it)}
                            </div>
                        )}
                    </div>
                    <div className="md:hidden w-full">
                        <HR></HR>
                    </div>
                    {project.imageUrl ?
                        <div>
                            <div>
                                <img src={project.imageUrl} alt={project.title} className="cursor-pointer" onClick={() => toggleOpen()} />
                            </div>
                            <div className="md:hidden w-full mt-2">
                                <HR></HR>
                            </div>
                        </div>
                        : null}
                </div>


            </div>

            {/* THIS IS THE MODAL, IGNORE IT!!!!!. BUT THIS ONE HELPED ME GPT TO CENTER IT. AND ADDED THAT COOL BACKGROUND. */}
            <div className={`fixed inset-0 flex items-center justify-center bg-black/50`} hidden={!open} onClick={toggleOpen}> {/* backdrop  */}
                <img src={project.imageUrl} alt="project" className="max-w-[80vw] max-h-[80vh]" />
            </div>

        </div>
    )
}
