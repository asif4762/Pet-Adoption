import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "/Images/images-1.jpeg"
import img2 from "/Images/images-2.jpeg"
import img3 from "/Images/images-3.jpeg"
import img4 from "/Images/images-4.jpeg"
import img5 from "/Images/images-5.jpeg"
const BannerSlider = () => {
    return (
        <Carousel className="text-center w-2/3 mx-auto" autoPlay={true} interval={3000} infiniteLoop={true} showStatus={false}>
                <div className="">
                    <img className="w-[50px]" src={img1} />
                </div>
                <div className="">
                    <img className="w-[50px]" src={img2} />
                </div>
                <div className="">
                    <img className="w-[50px]" src={img3} />
                </div>
                <div className="">
                    <img className="w-[50px]" src={img4} />
                </div>
                <div className="">
                    <img className="w-[50px]" src={img5} />
                </div>
                
            </Carousel>
    );
};

export default BannerSlider;