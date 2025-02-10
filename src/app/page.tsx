import _ from "lodash";
import ProjectsBlock from "@/components/blocks/projectsBlock";

export default function Home() {
    return (
        <>
            <section className="section-dark pb-14 min-h-screen flex flex-col justify-end">
                <div className="container">
                    <div className="text-center">
                        <h1>European-Quality Microcement</h1>
                        <p className="text-medium">
                            and wall painting with a durability guarantee and a personalized approach.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-24">
                <div className="container">
                    <div className="text-center">
                        <p className="text-subtitle">services</p>
                        <h2>Satisfy your needs.</h2>
                    </div>
                    <div className="pt-14 pb-24 grid grid-cols-3 gap-4">
                        {_.times(3, (serviceIndex) => (
                            <div className="block-service flex flex-col gap-6" key={serviceIndex}>
                                <div className="img-block bg-amber-200 h-[600px]">

                                </div>
                                <div>
                                    <p className="text-subtitle">Walls</p>
                                    <h4>Lorem ipsum</h4>
                                    <p className="pe-9 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Adipisci alias architecto consequatur dolores eius error </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pt-24">
                        <hr/>
                        <div className="grid grid-cols-4 gap-9 pt-9">
                            {_.times(4, (statIndex) => (
                                <div className="flex flex-col w-full text-center" key={statIndex}>
                                    <div className="text-7xl leading-none font-openSans text-beige-400">
                                        99+
                                    </div>
                                    <p>Years on market</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-dark py-24">
                    <div className="text-center">
                        <p className="text-subtitle">Portfolio</p>
                        <h2>Our works.</h2>
                    </div>
                    <ProjectsBlock/>
            </section>
        </>
    );
}
