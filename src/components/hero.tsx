import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./magicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}


            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Dynamic Web Magic with Next.js
                    </p>

                    {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
                    <TextGenerateEffect
                        words="Transforming Concepts into Seamless User Experiences"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-stone-200">
                        Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
                    </p>
                    <div className="flex space-x-2">
                        <a href="#about">
                            <MagicButton
                                title="Resume"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                        <a href="#about">
                            <MagicButton
                                title="portfolio"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;