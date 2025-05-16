import { Link, usePage } from '@inertiajs/react'
import Alert from '../Components/Alert'

export default function Layout({children})
{
    const { flash } = usePage().props

    return (<>
        {flash.success && ( Alert(flash.success) )}

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