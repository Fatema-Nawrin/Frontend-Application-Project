import { NavLink } from 'react-router-dom';
import { useGetConfigurationByIdQuery } from '../redux/services/configurationApi';
import Loading from './Loading';

const EditHeader = () => {
    const appId = import.meta.env.VITE_APP_ID;
    const { data: config, isLoading } = useGetConfigurationByIdQuery(appId);
    if (!config || isLoading) return <Loading />;
    return (
        <div className="lg:flex justify-between pb-3">
            <div>
                <h2 className="font-bold text-xl" style={{ color: config.mainColor }}>
                    Edit Offer
                </h2>
            </div>
            <NavLink to="/product">
                <button className="rounded  py-1 px-2 " style={{ backgroundColor: config.mainColor }}>
                    <h3 className="text-white px-1">View Offer</h3>
                </button>
            </NavLink>
        </div>
    );
};

export default EditHeader;
