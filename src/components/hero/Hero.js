import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";



const Hero = () => {

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <HeroImage />
                <HeroContent />
            </div>
        </div>
    )
};

export default Hero;