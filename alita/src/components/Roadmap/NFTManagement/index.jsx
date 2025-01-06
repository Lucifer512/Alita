import { useState } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Screen from './Screen';
import './NftManagement.css';

const NFTManagement = () => {
  const [screens] = useState([
    {
      title: 'Create your own collection',
      description: 'Our Mission is to build the world`s most trusted and inclusive NFT market place with the best selection.',
      image: '/Screen1.svg',
      activeDot: 1,
      bottomText: 'Receive AI assistance in searching for the trendiest NFT collections',
    },
    {
      title: 'A New NFT experience',
      description: 'Discover, collect and sell extraordinary NFTs on the best marketplace.',
      image: '/Screen2.svg',
      activeDot: 2,
      bottomText: 'Utilize AI for NFT market analysis to obtain recent trending stats',
    },
    {
      title: 'Your new asset is in the digital world.',
      description: 'With over 850 rare collectibles, you have a shot at building the future.',
      image: '/Screen3.svg',
      activeDot: 3,
      bottomText: 'Employ conversational AI to facilitate NFT trading, buying, and selling',
    },
    {
        title: 'Create your own collection',
        description: 'Our Mission is to build the world`s most trusted and inclusive NFT market place with the best selection.',
        image: '/Screen1.svg',
        activeDot: 1,
        bottomText: 'Receive AI assistance in searching for the trendiest NFT collections',
      },
  ]);

  return (
    <div className="relative min-h-[95vh] py-20 px-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-medium text-center">
          AI NFT Management
        </h2>

        {/* Phone Mockups Grid */}
        <div className="relative w-full max-w-full mx-auto pb-8 pt-4">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            navigation
            pagination={{ clickable: true }}
          >
            {screens.map((screen, index) => (
              <SwiperSlide key={index}>
                <Screen
                  title={screen.title}
                  description={screen.description}
                  image={screen.image}
                  activeDot={screen.activeDot}
                  bottomText={screen.bottomText}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NFTManagement;

