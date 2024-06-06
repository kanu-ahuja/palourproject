import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Our_offering = () => {

    return (<>
        <div className="container">
            <div>
                <h1 className="xxxl_body_text offering_heading">Our Offerings</h1>
            </div>
            <div className="offerings_cards">
            <Swiper
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    1100: {
                        slidesPerView: 4,
                    },
                    700: {
                        slidesPerView: 3,
                    },
                    576: {
                        slidesPerView: 1.5,
                    },

                    391: {
                        slidesPerView: 1,
                        spaceBetween: 35,
                    },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
           >
                <SwiperSlide>
                <div className="offer_items">
                    <img src="https://image3.jdomni.in/library/4A/BB/0F/342539C049ACB98556AEC13CD9_1496249490939_cropped_450X450.jpeg" alt="error" className="offerings_images" />
                    <div className="offer_content">
                        <h2 className="xxl_body_text">Bridal Makeup</h2>
                        <p className="offering_desc lg_body_text">Feel pretty & confident with the right make up for your special day. We offer the best bridal makeup for you.</p>
                        <button className="offering_button">Enquiry Now</button>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="offer_items">
                    <img src="https://image3.jdomni.in/banner/08112023/7C/01/A8/5E0FFADC171839C18D36CD8F5F_1699439718395.jpg?output-format=webp" alt="error" className="offerings_images" />
                    <div className="offer_content">
                        <h2 className="xxl_body_text">Nails</h2>
                        <p className="offering_desc lg_body_text">We are a reputed name in this market, engaged in offering effective beauty parlour classes for hair cutting.</p>
                        <button className="offering_button">Enquiry Now</button>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="offer_items">
                    <img src="https://image3.jdomni.in/banner/11112023/1E/52/94/DDECA468EB718AAEA8E594EA15_1699683100445.jpg?output-format=webp" alt="error" className="offerings_images" />
                    <div className="offer_content">
                        <h2 className="xxl_body_text">Hair Care</h2>
                        <p className="offering_desc lg_body_text">Get a make over from hair to toe by our professional makeup artists to look stunning at any event or ocassion.</p>
                        <button className="offering_button">Enquiry Now</button>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>

                <div className="offer_items">
                    <img src="https://image2.jdomni.in/library/17/EF/F1/5EA490A19490BF6A3C2291795C_1496776104102_cropped_450X450.jpeg" alt="error" className="offerings_images" />
                    <div className="offer_content">
                        <h2 className="xxl_body_text">Beauty Services</h2>
                        <p className="offering_desc lg_body_text">BEAUTY reliable  services and facilities are been provided by us for our valuable clients and patrons.</p>
                        <button className="offering_button">Enquiry Now</button>
                    </div>
                </div>

                </SwiperSlide>

                <SwiperSlide>
                <div className="offer_items">
                    <img src="https://image2.jdomni.in/banner/08112023/16/4C/0C/4C1022396EA7BA20BD7B1095CC_1699440509799.jpg?output-format=webp" alt="error" className="offerings_images" />
                    <div className="offer_content">
                        <h2 className="xxl_body_text">Skin Treatment</h2>
                        <p className="offering_desc lg_body_text">Skin needs to be taken care of a daily basis and thus we have introduced several skin treatments.</p>
                        <button className="offering_button">Enquiry Now</button>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="offer_items">
                    <img src="https://image3.jdomni.in/banner/18012022/69/AD/C1/5BF1B17A911118F65C010F97AA_1642482144398.jpg?output-format=webp" alt="error" className="offerings_images" />
                    <div className="offer_content">
                        <h2 className="xxl_body_text">Hair Cut</h2>
                        <p className="offering_desc lg_body_text">Our highly trained and professional hair stylists take pride in providing attention-to-detail. Get a new and refreshing look and flaunt your new hair cut.</p>
                        <button className="offering_button">Enquiry Now</button>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="offer_items">
                    <img src="https://image3.jdomni.in/banner/18012022/51/E3/9D/B1D114BA7BE4EA8EEAED8C2F4B_1642482240857.jpg?output-format=webp" alt="error" className="offerings_images" />
                    <div className="offer_content">
                        <h2 className="xxl_body_text">Hair Colour</h2>
                        <p className="offering_desc lg_body_text">Our experts are the best in crafting gorgeous colour to enhance your look. Get colourful highlights and hair colour of all the latest styles that suits your cut.</p>
                        <button className="offering_button">Enquiry Now</button>
                    </div>
                </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </>)
}
export default Our_offering;