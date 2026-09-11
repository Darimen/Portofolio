'use client'

import { diplomas } from "../achievements";
import { useState } from "react";

const DiplomaCarousel = () => {
    const [index, setIndex] = useState(0);
    return (
        <>
        <div className="max-lg:mb-10">
            {
                <div className="w-fit m-auto">
                    <a href={diplomas.at(index)?.link}>
                        <img src={diplomas.at(index)?.img} className=" p-4 min-lg:max-w-[25vw]" alt={diplomas.at(index)?.description} />
                    </a>
                    <div className="text-gray-500">
                        {diplomas.at(index)?.description} - {diplomas.at(index)?.date}
                    </div>
                </div>
            }

        </div>

<div className="relative mx-auto mt-4 w-fit px-12">
    <button
        type="button"
        className="absolute left-0 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-gray-200"
        onClick={() =>
            setIndex(index === 0 ? diplomas.length - 1 : index - 1)
        }
    >
        {"<"}
    </button>

    <div className="flex justify-center gap-1">
        {diplomas.map((_, i) => (
            <button
                type="button"
                key={i}
                onClick={() => setIndex(i)}
                className={`h-10 w-10 rounded-full ${
                    i === index
                        ? "bg-gray-500 text-white"
                        : "bg-gray-300"
                }`}
            >
                {i}
            </button>
        ))}
    </div>

    <button
        type="button"
        className="absolute right-0 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-gray-200"
        onClick={() =>
            setIndex(index === diplomas.length - 1 ? 0 : index + 1)
        }
    >
        {">"}
    </button>
</div>
            </>
    );
};

export default DiplomaCarousel;
