import { Head, useForm, usePage } from '@inertiajs/react'

export default function Edit({product})
{
    const {data, setData, put, errors, processing} = useForm({
        name: product.name,
        description: product.description
    })

    function submit(e) {
        e.preventDefault()
        put(route('product.update', product.id))
    }

    return (<>
        <Head title={`Edit Product ${product.name}`} />

        <h1 className="title">Update Product</h1>

        <div className="w-1/2 mx-auto">
            <form onSubmit={submit}>
                <label htmlFor="name">Product Name:</label>
                <input id='name' value={data.name} onChange={e => setData('name', e.target.value)} type="text" className='mb-6 h-10' />

                <label htmlFor="description">Product description:</label>
                <textarea id='description' value={data.description} onChange={e => setData('description', e.target.value)} rows="5"></textarea>

                <button disabled={processing} className="primary-btn mt-4">Update Product</button>
            </form>
        </div>
    </>);
}