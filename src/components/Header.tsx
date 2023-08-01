import { useGetConfigurationByIdQuery } from '../redux/services/configurationApi';
import logo from '../assets/Logo.svg';
import { LiaSearchSolid } from 'react-icons/lia';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai';
import { PiBell } from 'react-icons/pi';
import { useGetProductsQuery } from '../redux/services/productsApi';
import Loading from './Loading';

const Header = () => {
    const appId = import.meta.env.VITE_APP_ID;
    const { data: config, isLoading } = useGetConfigurationByIdQuery(appId);
    const { data: productData, isLoading: productLoading } = useGetProductsQuery();

    return (
        <div>
            {isLoading || productLoading ? (
                <Loading />
            ) : config ? (
                <>
                    <div className="w-full h-14" style={{ backgroundColor: config.mainColor }}>
                        <div className="flex pl-5 lg:pl-0 justify-start lg:justify-evenly pt-4">
                            <img src={logo} alt="logo" />
                            <div className="hidden lg:flex justify-between">
                                <input
                                    placeholder="Enter interests, keyword, company name, etc."
                                    className="rounded bg-white outline-none px-3"
                                    style={{ width: '500px', height: '27px' }}
                                />
                                <LiaSearchSolid className="translate-y-2 -translate-x-5" />
                            </div>
                            <div className="hidden lg:flex">
                                <div className="pt-1">
                                    <AiOutlineMessage className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white px-2">EN</h3>
                                </div>

                                <div className="pt-1">
                                    <AiOutlineDown className="text-white" />
                                </div>
                                <div className="pt-1 px-2">
                                    <PiBell className="text-white" />
                                </div>
                                <div className="px-1">
                                    {productData?.user && (
                                        <img
                                            src={productData.user.profilePicture}
                                            className="rounded-full"
                                            style={{ width: '25px', height: '25px' }}
                                        />
                                    )}
                                </div>
                                <div className="pt-1 px-2">
                                    <AiOutlineDown className="text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default Header;
