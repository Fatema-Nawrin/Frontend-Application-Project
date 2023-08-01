import { useUpdateProductMutation } from '../redux/services/productsApi';
import { ProductData } from '../redux/types';
import { useForm, SubmitHandler } from 'react-hook-form';
type FormValues = {
    video: string;
};

const EditVideo = ({ products }: { products: ProductData }) => {
    const [updateProduct] = useUpdateProductMutation();
    const { handleSubmit, register } = useForm<FormValues>({
        defaultValues: {
            video: products.video,
        },
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log(data);
        await updateProduct(data);
    };
    return (
        <div className="mt-4 bg-white rounded-md  w-full lg:w-2/3 my-2">
            <p className="font-semibold p-2">Video</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="shadow-lg p-2 w-full" type="text" {...register('video')} />
                <br />
                <button className="rounded float-right bg-gray-600 px-2 py-1 my-2 text-white" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
};

export default EditVideo;
