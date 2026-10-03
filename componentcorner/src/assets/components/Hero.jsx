import './Hero.css';

function Hero ({title, image, alt, subtitle, callToAction}) {
    return(
        <div className = 'hero-card'>
            <img src={image} alt={alt} />
            <div className= "hero-text">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <button>{callToAction}</button>
            </div>
        </div>
    );
}

export default Hero;