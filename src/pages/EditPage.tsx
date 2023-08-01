import EditDescription from '../components/EditDescription';
import EditHeader from '../components/EditHeader';
import EditOfferDetails from '../components/EditOfferDetails';
import EditVideo from '../components/EditVideo';
import Loading from '../components/Loading';
import SideMenu from '../components/SideMenu';
import { useGetProductsQuery } from '../redux/services/productsApi';
import { useGetTrlsQuery } from '../redux/services/trlApi';

const EditPage = () => {
    const { data: products, isLoading } = useGetProductsQuery();
    const { data: trl, isLoading: trlLoading } = useGetTrlsQuery();
    console.log(trl);
    if (!products || !trl || isLoading || trlLoading) return <Loading />;
    const user = products?.user;
    const company = products?.company;
    return (
        <div className="lg:flex justify-center pt-4 lg:px-0 px-3 pb-4">
            <div className="hidden lg:w-2/12 lg:block">
                <SideMenu user={user} company={company} />
            </div>
            <div className="lg:w-3/5 pl-4">
                <EditHeader />
                <p className="font-bold pb-2">{products.name}</p>
                <EditDescription products={products} />
                <EditVideo products={products} />
                <EditOfferDetails trl={trl} />
            </div>
        </div>
    );
};

export default EditPage;
