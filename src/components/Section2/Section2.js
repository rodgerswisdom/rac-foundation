import React from "react";
import Card1 from "../Body/card-1";
import C1 from "../../assets/images/C1.jpeg";
import  C2 from "../../assets/images/C2.jpeg";
import  C3 from "../../assets/images/C3.jpeg";
import "./Section2.css";

function Section2() {
    const causes = [
        {
            imageSrc: C1,
            title: "Education for All",
            description: "Every child deserves the opportunity to learn and grow. We provide essential school supplies and amenities to ensure that no child is left behind due to lack of resources. Join us in empowering the next generation through education.",
        },
        {
            imageSrc: C2,
            title: "Menstrual Health & Empowerment",
            description: "Promoting menstrual hygiene and education is crucial for the well-being of young girls. We campaign against teen pregnancies and work to eradicate female genital mutilation (FGM), ensuring that girls can thrive with dignity and confidence.",
        },
        {
            imageSrc: C3,
            title: "Community Support",
            description: "We reach out to children's homes and vulnerable communities, providing necessary supplies and support. Our goal is to create a nurturing environment where every child feels valued and has the opportunity to succeed.",
        },
    ];

    return (
        <div className="our-causes">
            <h1 className="our-causes-title"><b>Our Causes</b></h1>
            <div className="our-causes-container">
                {causes.map((cause, index) => (
                    <Card1
                        key={index}
                        imageSrc={cause.imageSrc}
                        title={cause.title}
                        description={cause.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Section2;
