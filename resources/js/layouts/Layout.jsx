import { Link, usePage } from '@inertiajs/react'
import Alert from '../Components/Alert'

export default function Layout({children})
{
    const { flash, errors } = usePage().props
    
    const firstError = Object.values(errors)[0];

    {firstError && Alert(firstError, 'Opps ...', 'error')}

    {flash.success && ( Alert(flash.success) )}

    return (<>
        <header>
            <nav>
                <Link className="nav-link" href={route('product.index')}>Home</Link>
                <Link className="nav-link" href={route('product.create')}>Create</Link>
            </nav>
        </header>

        <main>
            {children}
        </main>
    </>);
}