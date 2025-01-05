import bodyImg from "../../assets/background.jpg";
import FounderImg from "../../assets/founder.jpeg";
import "./Body.css";
import Button3 from "../Button/Button-3";

function Body() {
    return (
        <>
        <div className="body-container">
            <div className="content-1">
                <h1 className="h1-title"><b>Our Journey</b></h1>
                <div className="body-content">
                    <img src={bodyImg} alt="body-image" className="journey-image-1" />
                    <div className="text-content">
                        <p><strong>2022:</strong> Raise A Child Foundation (RAC) was established to address the needs of vulnerable children in Kenya, providing essential school supplies and amenities.</p>
                        <p><strong>2023:</strong> We expanded our reach, focusing on menstrual health, campaigning against teen pregnancies, and eradicating FGM. We began supporting children's homes and promoting education.</p>
                        <p><strong>2024:</strong> We continue to raise awareness about menstrual hygiene and provide necessary supplies to needy children. Our efforts to promote education and eradicate early marriages are gaining traction.
                        Looking Ahead: With your support, we aim to reach more children, visit more schools and orphanages, and create an equal society where all children can thrive.</p>
                        <Button3 />
                    </div>
                </div>
            </div>
        <div className="spacer">
            <hr></hr>
        </div>
        <div className="content-1">
            <h1 className="h1-title"><b>About the Founder</b></h1>
            <div className="body-content">
                <img src={FounderImg} alt="body-image" className="journey-image-1" />
                <div className="text-content">
                    <p>Annete Achieng Adero is the passionate founder of Raise A Child Foundation (RAC). Inspired by the challenges faced by young  girls and boys in her community, Annete dedicated herself to improving  their lives. Her primary goal is to ensure access to education and basic needs, providing comfort and support to school-going children. With a  deep commitment to empowering the next generation, Annete leads RAC in  its mission to create an equal society where all children can dream and  drive significant changes.</p>
                    <Button3 />
                </div>
            </div>
        </div>
        <div className="spacer">
            <hr></hr>
        </div>
        <div>
            <div className="content-3">
                <h1 className="h1-title"><b>Our Causes</b></h1>
                <div className="images-container">
                    <figure className="image-text">
                        <img src={bodyImg} alt="body-image-2022" className="journey-image" />
                        <h4>Lorem Ipsum</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        <Button3 />
                    </figure>
                    <figure className="image-text">
                        <img src={bodyImg} alt="body-image-2022" className="journey-image" />
                        <h4>Lorem Ipsum</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        <Button3 />
                    </figure>
                    <figure className="image-text">
                        <img src={bodyImg} alt="body-image-2022" className="journey-image" />
                        <h4>Lorem Ipsum</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        <Button3 />
                    </figure>
                </div>
            </div>
        </div>
        </div>
    </>
    );
}

export default Body;
