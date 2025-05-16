import { Link } from '@inertiajs/react';
import Paginate from '@/Components/Paginate';

export default function Index({products})
{
    return (<>
        <div>
            {products.data.map((product) => (
                <div key={product.id} className="p-4 border-b">
                    <p className="font-medium">{product.name}</p>
                    <div className="text-sm text-slate-600">
                        <span>Avelabel: {product.count}</span>
                    </div>
                    <Link href={route("product.show", product)} className='text-link'>Read More...</Link>
                </div>
            ))}
        </div>

        <div className="py-12 px-4">
            <Paginate links={products.links}/>
        </div>
    </>);
}