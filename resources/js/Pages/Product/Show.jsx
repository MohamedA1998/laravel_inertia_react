import { Head, Link, useForm } from "@inertiajs/react";

export default function Show({product}) {
    const {delete: destroy} = useForm();

    function submit (e){
        e.preventDefault();
        destroy(route('product.destroy', product))
    }

    return (<>
        <Head title={product.name}>
            <meta head-key="description" name="description" content={`this for show single product ${product.description}`} />
        </Head>

        <h1 className="title">Show Product </h1>

        <div>
            <div  className="p-4">
                <p className="font-medium">{product.name}</p>
                <div className="text-sm text-slate-600">
                    <span>Avelabel: {product.count}</span>
                </div>
                
                <div className="flex items-center justify-end gap-2">
                    <Link href={route('product.edit', product)} className="bg-green-500 rounded-md text-sm px-4 py-1 text-white">Update</Link>
                    <form onSubmit={submit}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">Delete</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}