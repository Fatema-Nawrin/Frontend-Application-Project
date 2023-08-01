import { NavLink } from 'react-router-dom';
import Loading from '../components/Loading';
import { useGetConfigurationByIdQuery } from '../redux/configurationApi';

const HomePage = () => {
    const appId = import.meta.env.VITE_APP_ID;
    const { data: config, isLoading } = useGetConfigurationByIdQuery(appId);
    if (!config || isLoading) return <Loading />;
    return (
        <div className="flex justify-center  h-screen items-center">
            <NavLink to="/product">
                <button className="rounded  py-2 px-3 " style={{ backgroundColor: config.mainColor }}>
                    <h3 className="text-white px-1">Go to Product Page</h3>
                </button>
            </NavLink>
        </div>
    );
};

export default HomePage;
