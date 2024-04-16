'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import './HeroSection.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SliederContent from '@/components/SliederContent';

const HeroSection = () => {
  return (
    <div className="w-full ">
      <Swiper
        pagination={true}
        autoplay={true}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <SliederContent
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas non vero. Obcaecati velit tenetur cumque, libero facilis quibusdam, sed deleniti exercitationem dignissimos, amet repellat atque? Sit incidunt accusamus tenetur."
            img="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4084444/cover_image/regular_1708x683/cover-ultimate-ecommerce-design-guide-e07358cc98f9578beb65eeb321efa1f5.png"
            title="BD SHOP is our Best E-comarce for product selling"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliederContent
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas non vero. Obcaecati velit tenetur cumque, libero facilis quibusdam, sed deleniti exercitationem dignissimos, amet repellat atque? Sit incidunt accusamus tenetur."
            img="https://c8.alamy.com/comp/2J5EGYF/online-shopping-e-commerce-web-banner-on-green-background-various-shopping-icons-online-shopping-concept-2J5EGYF.jpg"
            title="BD SHOP is our Best E-comarce for product selling"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliederContent
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas non vero. Obcaecati velit tenetur cumque, libero facilis quibusdam, sed deleniti exercitationem dignissimos, amet repellat atque? Sit incidunt accusamus tenetur."
            img="https://colorlib.com/wp/wp-content/uploads/sites/2/free-bootstrap-ecommerce-templates.png"
            title="BD SHOP is our Best E-comarce for product selling"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliederContent
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas non vero. Obcaecati velit tenetur cumque, libero facilis quibusdam, sed deleniti exercitationem dignissimos, amet repellat atque? Sit incidunt accusamus tenetur."
            img="https://cdn-ceheb.nitrocdn.com/LYkBDVHVdldIrognCFlxEKUhZLCymUBO/assets/images/optimized/rev-ae4aa8a/dminc.com/wp-content/uploads/2024/02/B2B-e-commerce-channel_Website-Banner_Without-Text-1-e1709232440507.jpg"
            title="BD SHOP is our Best E-comarce for product selling"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
