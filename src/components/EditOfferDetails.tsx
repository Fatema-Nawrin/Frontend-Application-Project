import { useForm, SubmitHandler } from 'react-hook-form';
import { useUpdateProductMutation } from '../redux/productsApi';
type trlObj = {
    id: string;
    name: string;
    description: null;
};

type trlType = trlObj[];

type FormValues = {
    trlid: string;
    id: number;
    name: string;
};

const EditOfferDetails = ({ trl }: { trl: trlType }) => {
    const { handleSubmit, register } = useForm<FormValues>();
    const [updateProduct] = useUpdateProductMutation();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const id = parseInt(data.trlid);
        const updatedObj = {
            trl: {
                id: id,
                name: trl[id - 1].name,
            },
        };
        console.log(updatedObj);
        await updateProduct(updatedObj);
    };
    return (
        <div className="pt-5  w-full lg:w-2/3 ">
            <h3 className="font-bold pb-2">Offer Details</h3>
            <p className="font-semibold py-2">Select Trl option:</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select className="w-full" {...register('trlid', { required: true })}>
                    {trl.map((el) => (
                        <option key={el.id} value={el.id}>
                            {el.name}
                        </option>
                    ))}
                </select>

                <br />
                <button className="rounded float-right bg-gray-600 px-2 py-1 my-2 text-white" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
};

export default EditOfferDetails;
