import { RiHomeLine } from 'react-icons/ri';
import { FaChevronRight } from 'react-icons/fa';
import { useGetConfigurationByIdQuery } from '../redux/services/configurationApi';
import { NavLink } from 'react-router-dom';
import Loading from './Loading';

const BreadCrumb = () => {
    const appId = import.meta.env.VITE_APP_ID;
    const { data: config, isLoading } = useGetConfigurationByIdQuery(appId);
    if (!config || isLoading) return <Loading />;
    return (
        <div className="lg:flex justify-between pb-3">
            <div className="flex py-2">
                <div className="pt-1">
                    <RiHomeLine />
                </div>
                <div className="pt-1 px-2">
                    <FaChevronRight />
                </div>

                <p>Offers</p>
                <div className="pt-1 px-2">
                    <FaChevronRight />
                </div>
                <p>Intelligent Finite Elements in Structural mechanics</p>
            </div>
            <NavLink to="/product/edit">
                <button className="rounded  py-2 px-3 " style={{ backgroundColor: config.mainColor }}>
                    <h3 className="text-white px-1">Edit</h3>
                </button>
            </NavLink>
        </div>
    );
};
export default BreadCrumb;
