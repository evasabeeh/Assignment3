import { useEffect } from "react";
import { FaDiscord } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Navbar() {

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".navbar",
            {
                y: -100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".scroll-page",
                    start: "top 100%",
                    end: "bottom top",
                    onEnter: () => {
                        gsap.to(".navbar", {
                            y: 0,
                            opacity: 1,
                            duration: 0.3,
                            ease: "power2.out",
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(".navbar", {
                            y: -100,
                            opacity: 0,
                            duration: 0.1,
                            ease: "power2.in",
                        });
                    },
                },
            }
        );
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-links">
                <a href="#" className="nav-link active">Home</a>
                <a href="#" className="nav-link">HumanPods</a>
                <a href="#" className="nav-link">NatureOS</a>
                <a href="#" className="nav-link">Mission</a>
            </div>

            <div className="center-logo">
                Natura Umana
            </div>

            <div className="nav-buttons">
                <button className="btn-primary">Join Waitlist</button>
                <button className="btn-secondary">
                    <FaDiscord className="discord-icon" />
                    Join Server
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
