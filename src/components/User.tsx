import { ProductData } from '../redux/types';
import logo from '../assets/Logo.svg';
import { PiMapPinLight } from 'react-icons/pi';
import { useGetConfigurationByIdQuery } from '../redux/services/configurationApi';
import Loading from './Loading';

const User = ({ products }: { products: ProductData }) => {
    const mapAddress = `https://maps.google.com/maps?q=${products.company.address.latitude},${products.company.address.longitude}&&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    const appId = import.meta.env.VITE_APP_ID;
    const { data: config, isLoading } = useGetConfigurationByIdQuery(appId);
    if (!config || isLoading) return <Loading />;

    return (
        <div className="lg:p-1 p-2">
            <p className="font-semibold text-gray-700 py-2">Offered by</p>
            <img src={logo} alt="logo" />
            {config.hasUserSection == true ? (
                <div className="flex justify-start items-center py-3">
                    <img
                        src={products.user.profilePicture}
                        alt=""
                        className="rounded-full"
                        style={{ width: '60px', height: '60px' }}
                    />
                    <div className="px-2">
                        <p className="font-semibold text-xs text-gray-800">
                            {products.user.firstName} {products.user.lastName}
                        </p>
                        <h3 className="text-gray-800 text-sm">{products.company.name}</h3>
                    </div>
                </div>
            ) : null}

            <div className="flex justify-start pt-2">
                <PiMapPinLight />
                <p className="pl-1 text-gray-800 text-sm ">
                    {products.company.address.street} {products.company.address.house}
                </p>
            </div>

            <p className="text-gray-800 text-sm pb-2">
                {products.company.address.zipCode} {products.company.address.city.name},{' '}
                {products.company.address.country.name}.
            </p>
            <iframe className="w-full" height="250" src={mapAddress}></iframe>
        </div>
    );
};

export default User;
