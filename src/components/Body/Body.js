import React from "react";
import bodyImg from "../../assets/background.jpg";
import FounderImg from "../../assets/founder.jpeg";
import "./Body.css";
import Section1 from "./section-1";
import Section2 from "../Section2/Section2";

function Body() {
    return (
        <main className="main-content">
            <Section1 
                title="Our Journey"
                imageSrc={bodyImg}
                textContent={
                    <>
                        <p><strong>2022</strong> Raise A Child Foundation (RAC) was established to address the needs of vulnerable children in Kenya, providing essential school supplies and amenities.</p>
                        <p><strong>2023</strong> We expanded our reach, focusing on menstrual health, campaigning against teen pregnancies, and eradicating FGM. We began supporting children's homes and promoting education.</p>
                        <p><strong>2024</strong> We continue to raise awareness about menstrual hygiene and provide necessary supplies to needy children. Our efforts to promote education and eradicate early marriages are gaining traction.</p>
                        <p><strong>Future</strong> With your support, we aim to reach more children, visit more schools and orphanages, and create an equal society where all children can thrive.</p>
                    </>
                }
            />

            <Section1 
                title="About the Founder"
                imageSrc={FounderImg}
                textContent={
                    <>
                        <p>
                            Annete Achieng Adero is the passionate founder of Raise A Child Foundation (RAC). Inspired by the challenges faced by young girls and boys in her community, Annete dedicated herself to improving their lives.
                        </p>
                        <p>
                            Her primary goal is to ensure access to education and basic needs, providing comfort and support to school-going children. With a deep commitment to empowering the next generation, Annete leads RAC in its mission to create an equal society where all children can dream and drive significant changes.
                        </p>
                    </>
                }
            />

            <div className="impact-section">
                <Section2 />
            </div>
        </main>
    );
}

export default Body;


