import "./Foundation.css";
import bgImage from "../../assets/background.jpg";
import Button1 from "../Button/Button-1";
import Button2 from "../Button/Button-2";

function Foundation() {
    return (
        <div className="foundation-cont">
            <img src={bgImage} alt="Background" className="background-image" />
            <div className="overlay"></div> {/* Overlay element */}
            <div className="content">
                <h1 className="foundation">Raise a Child Foundation</h1>
                <p className="p-text">Aid a child, improve the community</p>
                {/* <div className="btn-container">
                    <Button1 />
                    <Button2 />
                </div> */}
            </div>
        </div>
    );
}

export default Foundation;
