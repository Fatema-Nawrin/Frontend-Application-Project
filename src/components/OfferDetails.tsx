import technologyIcon from '../assets/inno_dev-4.png';
import businessIcon from '../assets/inno_strategy.png';
import trlIcon from '../assets/Icon.png';
import { ProductData } from '../redux/types';

const OfferDetails = ({ products }: { products: ProductData }) => {
    return (
        <div className="mt-4 rounded-md bg-white p-2 text-gray-700">
            <p className="font-semibold py-2">Offer Details</p>
            <div className="lg:flex justify-between lg:pb-2">
                <div className="lg:w-1/2">
                    <div className="flex justify-start pb-1">
                        <img src={technologyIcon} alt="" />
                        <h3 className="pl-2 text-gray-600">Technology</h3>
                    </div>
                    <div className="flex ml-6">
                        {products.categories.map((el) => (
                            <div key={el.id} className="rounded-xl bg-gray-300 px-2 py-1 my-1 mr-2">
                                <p className="text-sm">{el.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="flex justify-start pb-1">
                        <img src={businessIcon} alt="" />
                        <h3 className="pl-2 text-gray-600">Business Model</h3>
                    </div>
                    <div className="flex ml-6">
                        {products.businessModels.map((el) => (
                            <div key={el.id} className="rounded-xl bg-gray-300 px-2 py-1 my-1 mr-2">
                                <p className="text-xs">{el.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-start">
                <div className="lg:w-1/2">
                    <div className="flex justify-start pb-1">
                        <img src={trlIcon} alt="" />
                        <h3 className="pl-2 text-gray-600">TRL</h3>
                    </div>
                    <div className="flex ml-6">
                        <div className="rounded-xl bg-gray-300 px-2 py-1 my-1 mr-2">
                            <p className="text-sm">{products.trl.name}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-start pb-1">
                        <img src={trlIcon} alt="" />
                        <h3 className="pl-2 text-gray-600">Costs</h3>
                    </div>
                    <div className="flex ml-6">
                        <div className="rounded-xl bg-gray-300 px-2 py-1 my-1 mr-2">
                            <p className="text-sm">{products.investmentEffort}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferDetails;
