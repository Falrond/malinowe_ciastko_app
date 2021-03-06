import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { image_links } from '../other/constant_data';
import 'react-alice-carousel/lib/alice-carousel.css';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const handleDragStart = e => e.preventDefault();

// const items = [
//   <img src="../images/2.jpeg" onDragStart={handleDragStart} />,
//   <img src="../images/3.jpeg" onDragStart={handleDragStart} />,
//   <img src="../images/4.jpeg" onDragStart={handleDragStart} />,
//   <img src="../images/5.jpeg" onDragStart={handleDragStart} />,
// ];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = image_links.map((item, index) => {
  const { url } = item;
  return (
    <div className="h-96 m-4 shadow-lg">
      <img src={url} className="object-cover h-full w-full" />
    </div>
  );
});

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const onSlideChanged = ({ item }) => setActiveIndex(item);
  return (
    <section className="relative overflow-hidden">
      <AliceCarousel
        mouseTracking
        disableDotsControls
        disableButtonsControls
        infinite
        activeIndex={activeIndex}
        items={items}
        responsive={responsive}
        onSlideChanged={onSlideChanged}
        // autoplay
        autoPlay
        // autoPlayStrategy="all"
        autoPlayInterval={500}
        animationDuration={500}
      />

      <button
        className="focus:outline-none absolute top-48 left-5 w-12 h-12 bg-white rounded-full text-6xl text-pink-400 hidden md:flex justify-center items-center "
        onClick={slidePrev}
      >
        <RiArrowDropLeftLine />
      </button>
      <button
        className="hidden md:flex focus:outline-none  absolute top-48 right-5 transform -translate-y-2 rounded-full text-pink-400 h-12 w-12  justify-center items-center bg-white"
        onClick={slideNext}
      >
        <RiArrowDropRightLine className="text-6xl" />
      </button>
    </section>
  );
};

export default Slider;
