"use client"
import { usePathname } from 'next/navigation'
import { BiCoinStack } from 'react-icons/bi'
import { RiCodeBoxLine } from 'react-icons/ri'
import Link from 'next/link';
import { EnvOptions } from '@/app/Environment/envOptions';
import useEnv from '@/app/context/useEnv';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';


export default function NavBar() {
    const {selectedEnv, setSelectedEnv} = useEnv()
    const pathname = usePathname()


    return (
        <div className='px-10 md:px-6 sm:px-4 xs:px-2 bg-gray-600 text-white'>
            <div className='flex justify-between items-center md:flex-col sm:flex-col xs:flex-col md:gap-4 py-3'>
                <h1 className='text-2xl font-semibold sm:py-3 xs:py-2 xs:text-xl'>TOPS Event Generator</h1>
                <div className='flex items-center md:justify-center md:gap-4 sm:flex-col-reverse sm:gap-5 xs:flex-col-reverse xs:gap-3 gap-8'>
                    <div className="card flex justify-content-center w-[200px] xs:h-8 xs:w-full sm:w-full ">
                        <Dropdown value={selectedEnv} onChange={(e: DropdownChangeEvent) => setSelectedEnv(e.value)} options={EnvOptions} optionLabel="title"
                             className='flex items-center w-full' />
                    </div>

                    <div className='flex items-center gap-4'>
                        <Link className={`flex items-center gap-2 border border-opacity-0 hover:border hover:border-opacity-100 ${pathname === '/flightdomain' && 'border-opacity-100'} border-gray-200 xs:text-sm px-5 py-3 xs:py-1`} href={'/flightdomain'}><BiCoinStack className="text-2xl xs:text-sm" />Flight Domain</Link>
                        
                        <Link className={`flex items-center gap-2 border border-opacity-0 hover:border hover:border-opacity-100 ${(pathname === '/' || pathname === '/event') && 'border-opacity-100'} border-gray-200 xs:text-sm px-5 py-3 xs:py-1`} href={'/'}><RiCodeBoxLine className="text-2xl xs:text-sm" />Events</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}