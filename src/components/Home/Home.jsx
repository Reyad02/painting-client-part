import ArtCraftSection from "../ArtCraftSection/ArtCraftSection";
import Craft_Section from "../Craft_Section/Craft_Section";
import Swiper_Part from "../Swiper/Swiper_Part";

const Home = () => {
    return (
        <div className="">
            <Swiper_Part></Swiper_Part>
            <Craft_Section></Craft_Section>
            <ArtCraftSection></ArtCraftSection>
        </div>
    );
};

export default Home;