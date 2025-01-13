import React from 'react';
import Section1 from '../../components/Body/section-1';
import bodyImg from "../../assets/background.jpg";
import C2 from "../../assets/images/C2.jpeg";
import G8 from "../../assets/images/G8.jpeg";

const AboutUs = () => {
    return (
        <div>
            <Section1
                title="About Us"
                imageSrc={bodyImg}
                textContent={
                    <>
                        <h1>About Us</h1>
                        <p>
                            <strong>Raise A Child Foundation (RAC)</strong> is a Kenyan non-governmental organization dedicated to improving the lives of needy children in our society. Founded by <strong>Annete Achieng Adero</strong>, our mission is to create an equal society where all children can dream and drive significant changes.
                        </p>

                        <h2>Our Mission</h2>
                        <p>
                            To create an equal society where all children can dream and drive significant changes by providing access to education and basic needs, promoting menstrual health, and campaigning against teen pregnancies and female genital mutilation (FGM).
                        </p>

                        <h2>Our Vision</h2>
                        <p>
                            To promote the growth, development, and education of children in the community by seeking to meet their needs and mitigate their day-to-day challenges, ultimately empowering them to reach their full potential.
                        </p>

                       
                    </>
                }
            />
            <div className="spacer">
            <Section1 
                title = "Our Focus"
                imageSrc={G8}
                textContent={
                    <>
                        {/* <h2>Our Focus</h2> */}
                        <ul>
                            <li>
                                <strong>Education and Basic Needs:</strong> We provide essential amenities such as shoes, school bags, uniforms, and stationery to school-going children, focusing on those in dire need.
                            </li>
                            <li>
                                <strong>Girls' Empowerment:</strong> We promote menstrual health, campaign against teen pregnancies, and work to eradicate female genital mutilation (FGM). We also educate girls about menstrual hygiene and the dangers of early marriages.
                            </li>
                            <li>
                                <strong>Community Support:</strong> We reach out to children's homes, sharing their vision and helping them thrive by providing necessary supplies such as foodstuff, clothes, and monetary donations.
                            </li>
                        </ul>

                    </>
                }
            />
            <div className="spacer"></div>
                <Section1
                    title="Our Journey"
                    imageSrc={C2}
                    textContent={
                        <>
                            {/* <h2>Our Journey</h2> */}
                            <div className="journey-timeline">
                                <div className="timeline-item">
                                    <h3>2022: The Beginning</h3>
                                    <p>Our foundation took its first steps in 2022, driven by the desire to address the challenges faced by school-going children. We started by providing basic amenities such as shoes, school bags, uniforms, and stationery to those in dire need.</p>
                                </div>
                                <div className="timeline-item">
                                    <h3>2023: Expanding Our Reach</h3>
                                    <p>As we grew, we expanded our efforts to include campaigns against teen pregnancies, promoting menstrual health, and eradicating female genital mutilation (FGM). We began visiting children's homes, sharing their vision, and helping them attain the education they need by providing necessary supplies.</p>
                                </div>
                                <div className="timeline-item">
                                    <h3>2024: Empowering the Community</h3>
                                    <p>This year, we have continued to create awareness about menstrual hygiene and provide necessary supplies to needy children. Our efforts to promote education and eradicate early marriages are gaining momentum.</p>
                                </div>
                                <div className="timeline-item">
                                    <h3>Looking Ahead</h3>
                                    <p>Our journey is far from over. We aim to reach out to more donors, visit more schools and orphanages, and continue to make a positive impact on the lives of young boys and girls. With your support, we can create an equal society where all children can dream and drive significant changes.</p>
                                </div>
                            </div>
                        </>
                    }
                />
                <div className="spacer"></div>
                <Section1
                    title="Join Us"
                    imageSrc={bodyImg}
                    textContent={
                        <>
                            {/* <h2>Join Us</h2> */}
                            <p>
                                With your support, we can make a lasting impact on the lives of young boys and girls, creating a brighter future for our community. Together, we can ensure that every child has the opportunity to thrive and succeed.
                            </p>

                            <h2>Contact Us</h2>
                            <p>
                                <strong>Address:</strong> Raise A Child Foundation (RAC), [Your Address Here]<br />
                                <strong>Phone:</strong> +254 728 759 690<br />
                                <strong>Email:</strong> aderoannete@gmail.com
                            </p>
                            <p>
                                Follow us on social media for the latest updates and news:
                            </p>
                        </>
                    }
                />
                <div className="spacer"></div>
                <hr />
            </div>
        </div>
    );
};

export default AboutUs;
