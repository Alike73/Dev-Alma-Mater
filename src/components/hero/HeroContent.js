import HeroButton from "./HeroButton";
import HeroText from "./HeroText";
import HeroTitle from "./HeroTitle";


const HeroContent = () => {

    return (
        <div className="col-lg-6">
            <HeroTitle />
            <HeroText />
            <HeroButton />
        </div>
    )
};

export default HeroContent;