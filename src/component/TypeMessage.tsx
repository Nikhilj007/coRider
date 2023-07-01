import React from 'react'
import {GrAttachment} from 'react-icons/gr'
import {VscSend} from 'react-icons/vsc'

type Props = {}

const TypeMessage = (props: Props) => {
  return (
    <div className='text-2xl fixed bottom-0 py-2 px-4 bg-[#FAF9F4] w-full ' >
        <div className='flex bg-white px-3 py-[0.65rem] gap-4 items-center '>
          <input className=' focus:outline-none w-full text-base ' type="text" placeholder='reply to @Nikhil Jha' />
          <GrAttachment/>
          <VscSend/>
        </div>
    </div>
  )
}

export default TypeMessage