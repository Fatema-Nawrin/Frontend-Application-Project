import BreadCrumb from '../components/BreadCrumb';
import Loading from '../components/Loading';
import OfferDetails from '../components/OfferDetails';
import ProductDescription from '../components/ProductDescription';
import SideMenu from '../components/SideMenu';
import VideoDetails from '../components/VideoDetails';
import { useGetProductsQuery } from '../redux/productsApi';

const ViewPage = () => {
    const { data: products, isLoading } = useGetProductsQuery();
    if (!products || isLoading) return <Loading />;
    const user = products?.user;
    const company = products?.company;
    return (
        <div className="lg:flex justify-center pt-4 lg:px-0 px-3 pb-4">
            <div className="hidden lg:w-2/12 lg:block">
                <SideMenu user={user} company={company} />
            </div>
            <div className="lg:w-3/5 pl-4">
                <BreadCrumb />
                <ProductDescription products={products} />
                <VideoDetails products={products} />
                <OfferDetails products={products} />
            </div>
        </div>
    );
};

export default ViewPage;
