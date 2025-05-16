import { Link } from '@inertiajs/react'

export default function Layout({children})
{
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