import bodyImg from "../../assets/background.jpg";
import "./Body.css";
import Button2 from "../Button/Button-2";

function Body() {
    return (
        <>
        <div className="body-container">
            <div className="content-1">
                <h1>Our Journey</h1>
                <div className="body-content">
                    <img src={bodyImg} alt="body-image" className="journey-image" />
                    <div className="text-content">
                        <p><strong>2022:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        <p><strong>2023:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        <p><strong>2024:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        <Button2 />
                    </div>
                </div>
            </div>
        
        <div className="content-1">
            <h1>About the Founder</h1>
            <div className="body-content">
                <img src={bodyImg} alt="body-image" className="journey-image" />
                <div className="text-content">
                    <p><strong>2022:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                    <p><strong>2023:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                    <p><strong>2024:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                    <Button2 />
                </div>
            </div>
        </div>
        <div>
            <div className="content-3">
                <h1>Our Causes</h1>
                <div className="images-container">
                    <figure className="image-text">
                        <img src={bodyImg} alt="body-image-2022" className="journey-image" />
                        <h4>Lorem Ipsum</h4>
                        <p><strong>2022:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        <Button2 />
                    </figure>
                    <figure className="image-text">
                        <img src={bodyImg} alt="body-image-2022" className="journey-image" />
                        <h4>Lorem Ipsum</h4>
                        <p><strong>2022:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        <Button2 />
                    </figure>
                    <figure className="image-text">
                        <img src={bodyImg} alt="body-image-2022" className="journey-image" />
                        <h4>Lorem Ipsum</h4>
                        <p><strong>2022:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        <Button2 />
                    </figure>
                </div>
            </div>
        </div>
        </div>
    </>
    );
}

export default Body;
