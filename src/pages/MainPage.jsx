import Navbar from "../components/Navbar";
import ScrollPage from "../components/ScrollPage";

function MainPage() {
    return (
        <div className="main-page">

           <Navbar/>

            <div className="main-content">
                <p>We combine <em>AI hardware </em> 
                    <span> 
                        <img className="para-icon-1" src="natura-os.png"></img>
                    </span>
                    <span className="micro">
                        <sup>(HumanPods) </sup>
                    </span>
                    and software 
                    <span>
                        <img className="para-icon-2" src="human-pods.png"></img>
                    </span>
                    <span className="micro">
                        <sup>(NatureOS) </sup>
                    </span>
                to let you speak with <em>AI People</em> that can do things in your place, so you can focus on what matters.</p>
            </div>
            
            <ScrollPage/>
            
        </div>
    );
}

export default MainPage;