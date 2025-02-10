import React from 'react';
import _ from "lodash";
import Link from "next/link";
import { ArrowLongRightIcon } from '@heroicons/react/16/solid';

function ProjectsBlock() {
    return (
        <div className="project-block grid grid-cols-1 gap-4">
            {_.times(4,(projectIndex: number) => (
                <div className="container h-[720px] bg-gray-900 flex flex-col" key={projectIndex}>
                    <div className="section-dark h-full pb-14 flex flex-col justify-end">
                        <div className="grid grid-cols-3 gap-14">
                            <div className="col-span-1">
                                <h4>Attera Home</h4>
                            </div>
                            <div className="grid grid-cols-1 gap-14 col-span-2">
                                <div className="flex justify-between">
                                    <p className="pe-36 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <Link href="#" className="flex-shrink-0">Learn more </Link>
                                </div>
                                <hr/>
                                <div className="grid grid-cols-4">
                                    {_.times(4,(projectIndex) => (
                                        <div className="flex flex-col" key={projectIndex}>
                                            <p className="text-subtitle">
                                                Material
                                            </p>
                                            <p>Microcement</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectsBlock;