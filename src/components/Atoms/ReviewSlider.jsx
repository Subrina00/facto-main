import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import star from "../../assets/star.png";
import rev1 from "../../assets/rev1.png";
import rev2 from "../../assets/rev2.png";
import man1 from "../../assets/man1.png";
import man2 from "../../assets/man2.png";
import man3 from "../../assets/man3.png";

export default function ReviewSlider() {
  return (
    <div className="w-full max-w-[360px] sm:max-w-[590px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1060px] 2xl:max-w-[1440px] mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="pb-40" // space for dots
      >


        {/* CARD 1 */}
        <SwiperSlide>
          <div className="flex flex-col justify-between items-start gap-[30px] sm:gap-[34px] md:gap-[38px] lg:gap-[40px] bg-[#F8F8F8] py-[70px] md:py-[75px] lg:py-[80px] px-[60px] md:px-[70px] lg:px-[79px]
           rounded-[25px] max-w-[360px] sm:max-w-[580px] md:max-w-[680px] lg:max-w-[701px] max-h-[585px] lg:max-h-[585px] mx-auto">
            <div className="flex justify-between items-center gap-[110px] sm:gap-[180px] md:gap-[220px] lg:gap-[243px]">
              <img src={star} alt="" className="w-[80px] sm:w-[140px] lg:w-[160px]" />
              <img src={rev1} alt="" className="w-[60px] sm:w-[110px] lg:w-[125px]" />
            </div>
            <div className="flex flex-col justify-between items-start gap-[24px]">
              <p className="text-[#141414] font-manrope font-bold text-[20px] sm:text-[26px] md:text-[30px] lg:text-[32px]">"Game-Changer for My Business!"</p>
              <p className="text-[#686868] font-manrope text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] leading-[24px] sm:leading-[30px] md:leading-[32px] overflow-hidden">
                CASA has completely transformed my cash flow. As a restaurant owner,
                 waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours,
                  allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!
              </p>
            </div>
            <div className="flex justify-between items-center gap-[24px]">
              <img src={man2} alt="" className="h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] md:h-[56px] md:w-[56px]" />
              <div className="flex flex-col gap-[4px]">
                <p className="text-[#141414] font-roboto font-semibold text-[14px] sm:text-[18px] md:text-[20px]">Micheal R</p>
                <p className="text-[#686868] font-roboto font-semibold text-[12px] sm:text-[17px] md:text-[18px]">Restaurant owner</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* CARD 2 */}
        <SwiperSlide>
          <div className="flex flex-col justify-between items-start gap-[30px] sm:gap-[34px] md:gap-[38px] lg:gap-[40px] bg-[#F8F8F8] py-[70px] md:py-[75px] lg:py-[80px] px-[60px] md:px-[70px] lg:px-[79px]
           rounded-[25px] max-w-[360px] sm:max-w-[580px] md:max-w-[680px] lg:max-w-[701px] max-h-[585px] lg:max-h-[585px] max-h-[585px] mx-auto">
            <div className="flex justify-between items-center gap-[110px] sm:gap-[180px] md:gap-[220px] lg:gap-[243px]">
              <img src={star} alt="" className="w-[80px] sm:w-[140px] lg:w-[160px]" />
              <img src={rev2} alt="" className="w-[60px] sm:w-[110px] lg:w-[125px]" />
            </div>
            <div className="flex flex-col justify-between items-start gap-[24px]">
              <p className="text-[#141414] font-manrope font-bold text-[20px] sm:text-[26px] md:text-[30px] lg:text-[32px]">"Fast, Reliable, and Stress-Free!"</p>
              <p className="text-[#686868] font-manrope text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] leading-[24px] sm:leading-[30px] md:leading-[32px] overflow-hidden">
                CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle.
                 Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless,
                  and the transparency in pricing is a huge plus.!
              </p>
            </div>
            <div className="flex justify-between items-center gap-[24px]">
              <img src={man1} alt="" className="h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] md:h-[56px] md:w-[56px]" />
              <div className="flex flex-col gap-[8px]">
                <p className="text-[#141414] font-roboto font-semibold text-[14px] sm:text-[18px] md:text-[20px]">Sarah M.</p>
                <p className="text-[#686868] font-roboto font-semibold text-[12px] sm:text-[17px] md:text-[18px]">Cafe owner</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* CARD 3 */}
        <SwiperSlide>
          <div className="flex flex-col justify-between items-start gap-[30px] sm:gap-[34px] md:gap-[38px] lg:gap-[40px] bg-[#F8F8F8] py-[70px] md:py-[75px] lg:py-[80px] px-[60px] md:px-[70px] lg:px-[79px]
           rounded-[25px] max-w-[360px] sm:max-w-[580px] md:max-w-[680px] lg:max-w-[701px] max-h-[585px] lg:max-h-[585px] max-h-[585px] mx-auto">
            <div className="flex justify-between items-center gap-[110px] sm:gap-[180px] md:gap-[220px] lg:gap-[243px]">
              <img src={star} alt="" className="w-[80px] sm:w-[140px] lg:w-[160px]" />
              <img src={rev2} alt="" className="w-[60px] sm:w-[110px] lg:w-[125px]" />
            </div>
            <div className="flex flex-col justify-between items-start gap-[24px]">
              <p className="text-[#141414] font-manrope font-bold text-[20px] sm:text-[26px] md:text-[30px] lg:text-[32px]">"Game-Changer for My Business!"</p>
              <p className="text-[#686868] font-manrope text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] leading-[24px] sm:leading-[30px] md:leading-[32px] overflow-hidden">
                CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used
                 to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time.
                  The process is seamless, and the transparency in pricing is a huge plus.!
              </p>
            </div>
            <div className="flex justify-between items-center gap-[24px]">
              <img src={man3} alt="" className="h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] md:h-[56px] md:w-[56px]" />
              <div className="flex flex-col gap-[8px]">
                <p className="text-[#141414] font-roboto font-semibold text-[14px] sm:text-[18px] md:text-[20px]">Daniel P.</p>
                <p className="text-[#686868] font-roboto font-semibold text-[12px] sm:text-[17px] md:text-[18px]">Shop owner</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
