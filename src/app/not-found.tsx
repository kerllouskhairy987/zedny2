import Navbar from '@/components/home/Navbar'
import ComponentNotFoundPage from '@/components/notFoundPage';

export default function NotFound() {
    return (
        <div className='flex flex-col gap-1 overflow-x-hidden'>
            <Navbar />
            <ComponentNotFoundPage />
        </div>
    )
}