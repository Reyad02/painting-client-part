import ArtCraftSection from "../ArtCraftSection/ArtCraftSection";
import Clubs from "../Clubs/Clubs";
import Comments from "../Comments/Comments";
import Craft_Section from "../Craft_Section/Craft_Section";
import Statistics from "../Statistics/Statistics";
import Swiper_Part from "../Swiper/Swiper_Part";

const Home = () => {
    return (
        <div className="">
            <Swiper_Part></Swiper_Part>
            <Craft_Section></Craft_Section>
            <ArtCraftSection></ArtCraftSection>
            <Comments></Comments>
            <Statistics></Statistics>
            <Clubs></Clubs>
        </div>
    );
};

export default Home;