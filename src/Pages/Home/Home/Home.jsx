import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularManu from "../PopulatManu/PopularManu";
import Sowiper from "../Sowiper/Sowiper";
import Testimonial from "../Testimonial/Testimonial";



const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Bistro Boos | Home</title>
            </Helmet>
            <Banner></Banner>
            <Sowiper></Sowiper>
            <PopularManu></PopularManu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;