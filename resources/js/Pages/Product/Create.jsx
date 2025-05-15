import { useForm } from '@inertiajs/react'
import Alert from '../../Components/Alert'

export default function Create()
{
    const {data, setData, post, errors, processing} = useForm({
        name: '',
        description: ''
    })

    function submit(e) {
        e.preventDefault()
        post(route('product.store'), {
            onSuccess: () => Alert('Successfuly Product Created'),
            onError: (error) => Alert((error['name'] || error['description']), 'Error !', 'error')
        })
    }

    return (<>
        <h1 className="title">Create New Product</h1>

        <div className="w-1/2 mx-auto">
            <form onSubmit={submit}>
                <label htmlFor="name">Product Name:</label>
                <input id='name' value={data.name} onChange={e => setData('name', e.target.value)} type="text" className='mb-6 h-10' />

                <label htmlFor="description">Product description:</label>
                <textarea id='description' value={data.description} onChange={e => setData('description', e.target.value)} rows="5"></textarea>

                <button disabled={processing} className="primary-btn mt-4">Create Product</button>
            </form>
        </div>
    </>);
}