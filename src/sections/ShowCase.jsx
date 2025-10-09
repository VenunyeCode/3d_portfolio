import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const project1 = useRef(null);
    const project2 = useRef(null);
    const project3 = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const projects = [project1.current, project2.current, project3.current];

        projects.forEach((project, index) => {
            gsap.fromTo(
                project,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.1 * (index + 1),
                    scrollTrigger: {
                        trigger: project,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={project1} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/spotify_clone.png" alt="Spotify Clone" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Spotify Clone
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                A spotify clone using SpringBoot and Angular
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                 <img
                                    src="/images/socialNetwork.png"
                                    alt="A social network platform"
                                />
                            </div>
                            <h2>Social Network platform</h2>
                        </div>

                          <div className="project" ref={project3}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <img src="/images/lexical-analyzer.png" alt="lexical analyzer app" />
                            </div>
                            <h2>A lexical analyzer lab</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;
