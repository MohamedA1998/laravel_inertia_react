import { useForm } from "@inertiajs/react";
import Alert from '../../Components/Alert'

export default function Show({product}) {
    const {delete: destroy} = useForm();

    function submit (e){
        e.preventDefault();
        destroy(route('product.destroy', product), {
            onSuccess: () => Alert('Successfuly Product Deleted'),
            onError: (error) => Alert('We Have An Error', 'Oops...', 'error')
        })
    }

    return (<>
        <h1 className="title">Show Product </h1>

        <div>
            <div  className="p-4">
                <p className="font-medium">{product.name}</p>
                <div className="text-sm text-slate-600">
                    <span>Avelabel: {product.count}</span>
                </div>
                
                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">Delete</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}