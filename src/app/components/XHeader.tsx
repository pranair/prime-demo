import Image from 'next/image';
import 'primeicons/primeicons.css';

const XHeader: React.FC = () => {
    return (
        <div className='h-16 lg:px-96 md:px-10 text-stone-800'>
            <div className='float-left'>
                <div className='flex'>
                    <Image
                        src="/xerox.png"
                        height={60}
                        width={125}
                        alt=''
                        className='' />
                    <div className='py-4 pl-5 text-2xl'>Xerox Dashboard</div>
                </div>
            </div>
            <div className='float-right'>
                <div className='text-2xl py-4'>Acme Inc.</div>
            </div>
        </div>
    )
}

export default XHeader;