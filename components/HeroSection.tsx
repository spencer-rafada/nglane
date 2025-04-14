"use client";
import Image from 'next/image';
import { Component } from 'react';
import { StaticImageData } from 'next/image'; // Importing StaticImageData

type HeroSectionProps = {
  leftImage: StaticImageData;
  rightImage: StaticImageData;
  heading: string;
  
  button1Text: string;
  button2Text: string;
};

class HeroSection extends Component<HeroSectionProps> {
  componentDidMount() {
    console.log("HeroSection mounted");
  }

  render() {
    const { leftImage, rightImage, heading,  button1Text, button2Text } = this.props;

    return (
      <section className="relative bg-lime-100 bg-cover bg-center min-h-[100vh] w-full flex items-center justify-center text-white">
        <div className="relative w-full h-full flex">
          {/* Left Image - Always visible */}
          <div className="relative w-full md:w-1/2 h-[80vh] md:h-[100vh]">
            <Image
              src={leftImage}
              alt="Left Image"
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
              className="absolute inset-0"
            />
          </div>

          {/* Right Image - Only visible on larger screens */}
          <div className="hidden md:block relative w-1/2 h-[50vh] md:h-[100vh]">
            <Image
              src={rightImage}
              alt="Right Image"
              fill
              style={{ objectFit: 'cover' }}
              priority={false}
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Text and Buttons */}
        <div className="text-center absolute z-20 px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-black">{heading}</h1>
          
          <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-black text-white px-10 py-2 rounded-md shadow-lg hover:bg-gray-700">
              {button1Text}
            </button>
            <button className="bg-black text-white px-10 py-2 rounded-md shadow-lg hover:bg-gray-700">
              {button2Text}
            </button>
          </div>
          <p className="mt-4 text-sm md:text-base">Exclusions Apply</p>
        </div>
      </section>
    );
  }
}

export default HeroSection;
