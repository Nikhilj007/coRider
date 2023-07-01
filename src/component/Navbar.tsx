import React, { useContext } from 'react'
import { BiArrowBack, BiDotsVerticalRounded } from 'react-icons/bi'
import { LuEdit } from 'react-icons/lu'
import { AppContext } from '../Context/AppContext'

type Props = {}

const Navbar = (props: Props) => {
    const { page, chats, data } = useContext(AppContext);

    return (
        <div className='z-10 fixed top-0 w-full bg-white'><div className=' flex items-center justify-between p-4 pt-6 font-semibold text-2xl w-full '>
            <div className='flex items-center gap-4'> <BiArrowBack /> Trip {page} </div>
            <div><LuEdit /></div>
        </div>
            <div className='bg-[#FAF9F4] border-b-2 flex px-4 py-2 gap-4 items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='overflow-hidden flex w-12 h-12 flex-wrap rounded-full bg-black'>
                        <img className='w-1/2' src={chats[0]?.sender?.image} alt="" />
                        <img className='w-1/2' src={chats[1]?.sender?.image} alt="" />
                        <img className='w-1/2' src={chats[8]?.sender?.image} alt="" />
                        <img className='w-1/2' src={chats[6]?.sender?.image} alt="" />
                    </div>
                    <div className=''>
                        <div className='text-gray-600'>From <span className='font-semibold text-black text-lg'>{data?.from}</span></div>
                        <div className='text-gray-600 '>to <span className='font-semibold text-black text-lg'>{data?.to}</span></div>
                    </div>
                </div>
                <BiDotsVerticalRounded className='text-2xl ' />
            </div></div>
    )
}

export default Navbar
