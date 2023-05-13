import React, {useEffect, useState} from "react";
import "../index.css"
import {useGlobalContextAPI} from "../context";
import {HeroSection} from "../Components/HeroSection";
import {FeaturedProducts} from "../Components/FeaturedProducts";
import {CustomFurniture} from "../Components/CustomFurniture";

export function Home() {
    return (
        <>
            <HeroSection/>
            <FeaturedProducts/>
            <CustomFurniture/>
        </>
    );
}