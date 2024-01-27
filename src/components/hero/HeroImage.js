import home_hero_img from '../../assets/images/home-hero.svg';


const HeroImage = () => {

    return (
        <div className="col-10 col-sm-8 col-lg-6">
            <img 
                src={ home_hero_img } 
                className="d-block mx-lg-auto img-fluid" 
                alt="Bootstrap Themes" 
                width="700" 
                loading="lazy" 
            />
        </div>
    )
};

export default HeroImage;