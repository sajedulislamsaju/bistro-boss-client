import { useEffect, useState } from "react";
import ManuItem from "../../Shared/ManuItem/ManuItem";

const PopularManu = () => {

    const [manu, setManu] = useState([])

    useEffect(() => {
        fetch('manu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular')
                setManu(popularItem)
            })
    }, [])

    return (
        <section className="my-11">
            <div>
                <p className='text-center font-bold my-4 text-warning text-2xl'>---Check it out---</p>
                <hr className='w-1/2  mx-auto ' />
                <h1 className='text-center font-bold my-4 text-5xl'>FROM OUR MENU</h1>
                <hr className='w-1/2  mx-auto ' />
            </div>
            <div className="grid grid-cols-2 gap-4 my-4">
                {
                    manu.map(item => <ManuItem
                        key={item._id}
                        item={item}
                    ></ManuItem>)
                }
            </div>
        </section>
    );
};

export default PopularManu;