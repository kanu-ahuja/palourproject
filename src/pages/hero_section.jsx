import React from "react";
import heroimage from "../image/hero_image.png"
const Hero_section =()=>{
    return(<>
        <div className="hero_section">
           <img src={heroimage} className="hero_image"/>
           <div className="hero_content">
            <h2 className="hero_section_heading">HOT DEALS THIS WEEK</h2>
            <h3 className="hero_desc">SALE UP TO 20% OFF FOR ALL MAKEUP PRODUCTS</h3>
           </div>
        </div>
    </>)
}
export default Hero_section;