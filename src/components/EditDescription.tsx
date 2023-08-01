import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { ProductData } from '../redux/types';
import { useUpdateProductMutation } from '../redux/productsApi';

type FormValues = {
    description: string;
};

const EditDescription = ({ products }: { products: ProductData }) => {
    const [updateProduct] = useUpdateProductMutation();
    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            description: products?.description || '',
        },
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log(data);
        await updateProduct(data);
    };

    return (
        <form className="bg-white rounded-md" onSubmit={handleSubmit(onSubmit)}>
            <Controller name="description" control={control} render={({ field }) => <ReactQuill {...field} />} />

            <br />
            <button className="rounded float-right bg-gray-600 px-2 py-1 text-white" type="submit">
                Save
            </button>
        </form>
    );
};

export default EditDescription;
