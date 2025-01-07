import { useEffect } from "react";
import { FaDiscord } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Navbar() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: ".scroll-page",
            start: "top 100%",
            end: "top 300%",
            onUpdate: (self) => {
                const progress = self.progress;
                const yPosition = -100 + progress * 100;
                const opacity = progress;

                gsap.to(".navbar", {
                    y: yPosition,
                    opacity: opacity,
                    duration: 0.1,
                    ease: "power2.out",
                });
            },
        });
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
