import "../index.css"
import {HeroSection} from "../Components/HeroSection";
import {FeaturedProducts} from "../Components/FeaturedProducts";
import {CustomFurniture} from "../Components/CustomFurniture";
import {NewsLetter} from "../Components/NewsLetter";

export function Home() {
    return (
        <>
            <HeroSection/>
            <FeaturedProducts/>
            <CustomFurniture/>
            <NewsLetter/>
        </>
    );
}