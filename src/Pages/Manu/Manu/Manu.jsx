import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import manuImg from '../../../assets/menu/menu-bg.png'

const Manu = () => {
    return (
        <div className="mb-20">
            <Helmet>
                <title>Bistro Boos | Manu</title>
            </Helmet>
            <Cover img={manuImg}></Cover>
        </div>
    );
};

export default Manu;