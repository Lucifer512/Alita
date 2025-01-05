import { useState } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './AgentsSwipper.css';
import Card from '../Card';

const AgentsSwipper = () => {
  const [slides] = useState([
    { title: 'Solara Agent', description: 'Deploy SPL tokens or launch directly on Pump.fun. Swap any token using Jupiter.', image: '/Card1.svg' },
    { title: 'Nexa Agent', description: 'Create AMM pools on top Solana DEXs like Meteora, Raydium, and Orca.', image: '/Card2.svg' },
    { title: 'Lyra Agent', description: 'Lend on Lulo or Play on SEND Arcade or stake your SOL.', image: '/Card3.svg' },
    { title: 'Astra Agent', description: 'From Langchain to Open AIs GPT and DALL-E', image: '/Card4.svg' },
    { title: 'Zephyr Agent', description: 'Airdrop at 1000x lower cost using Light Protocol and Helius.', image: '/Card5.svg' },
  ]);

  return (
    <div className="relative w-full max-w-full mx-auto py-8" >
        <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "url('/AgentsSwipper-Back.svg')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
        <div className='relative z-10 w-[90%] flex justify-center items-center mx-auto'>
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
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Card title={slide.title} description={slide.description} image={slide.image} />
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
      
    </div>
  );
};

export default AgentsSwipper;