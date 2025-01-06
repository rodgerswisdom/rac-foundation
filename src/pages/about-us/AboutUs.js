import React from 'react';
import Section1 from '../../components/Body/section-1';
import bodyImg from "../../assets/background.jpg";

const AboutUs = () => {
    return (
        <div>
            <Section1 
                title="About Us"
                imageSrc={bodyImg}
                textContent={
                    <>
                        <p>
                            <strong>Raise A Child Foundation (RAC)</strong> is a Kenyan non-governmental organization 
                            dedicated to improving the lives of needy children in our society. Founded by 
                            <strong> Annete Achieng Adero</strong>, our mission is to create an equal society where all children can dream and drive significant changes.
                        </p>
                        <h3>Our Focus:</h3>
                        <ul>
                            <li>
                                <strong>Education and Basic Needs:</strong> We provide essential amenities such as shoes, school bags, uniforms, and stationery to school-going children.
                            </li>
                            <li>
                                <strong>Girls' Empowerment:</strong> We promote menstrual health, campaign against teen pregnancies, and work to eradicate female genital mutilation (FGM).
                            </li>
                            <li>
                                <strong>Community Support:</strong> We reach out to children's homes, sharing their vision and helping them thrive by providing necessary supplies.
                            </li>
                        </ul>
                        <h3>Our Vision:</h3>
                        <p>
                            To promote the growth, development, and education of children in the community by meeting their needs and mitigating their day-to-day challenges.
                        </p>
                        <h3>Join Us:</h3>
                        <p>
                            With your support, we can make a lasting impact on the lives of young boys and girls, creating a brighter future for our community.
                        </p>
                    </>
                }
            />
            <div className="spacer">
                <hr />
            </div>
        </div>
    );
};

export default AboutUs;
