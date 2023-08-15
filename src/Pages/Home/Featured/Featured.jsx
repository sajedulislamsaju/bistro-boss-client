import ImgF1 from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-bg'>
            <div>
                <p className='text-center font-bold my-4 text-warning text-2xl'>---Check it out---</p>
                <hr className='w-1/2  mx-auto ' />
                <h1 className='text-center font-bold my-4 text-5xl'>FROM OUR MENU</h1>
                <hr className='w-1/2  mx-auto ' />
            </div>
            <div className='flex justify-center items-center py-8 px-16 '>
                <div className='rounded'>
                    <img src={ImgF1}alt="" />
                </div>
                <div className='ml-10 text-white'>
                     <p>March 20, 2023</p>
                     <p className='uppercase font-bold'>WHERE CAN I GET SOME?</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                     <button className="btn btn-outline btn-accent">Read More</button>
                </div>
                
            </div>
        </div>
    );
};

export default Featured;