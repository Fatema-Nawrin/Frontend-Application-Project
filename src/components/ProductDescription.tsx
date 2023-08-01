import { ProductData } from '../redux/types';
import patentIcon from '../assets/inno_patent.png';
import User from './User';

const ProductDescription = ({ products }: { products: ProductData }) => {
    return (
        <div className="lg:flex bg-white rounded-sm">
            <div className="shadow-sm lg:w-2/3">
                <div className="relative">
                    <img className="w-11/12 productImg lg:mt-0 mt-2" src={products.picture} alt="" />
                    <div className="absolute top-0 left-0">
                        <div className="flex">
                            <img src={patentIcon} />
                            <p className="bg-white text-black p-2 font-semibold shadow-sm">Patent</p>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <h2 className="font-semibold py-2">{products.name}</h2>
                    <p className="text-gray-700 w-full pb-2 text-sm">{products.description}</p>
                </div>
            </div>
            <User products={products} />
        </div>
    );
};

export default ProductDescription;
