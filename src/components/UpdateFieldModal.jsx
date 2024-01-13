import React from 'react'
import { toggleUpdateField } from '../context/publicReducer'
import { useDispatch } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'

const UpdateFieldModal = () => {
    const dispatch = useDispatch()
    return (
        <div className='w-screen h-screen bg-gray-900 text-white bg-opacity-50 absolute-center z-10 flex-center'>
            <div className='bg-gray-900 w-[400px] py-5 px-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-medium tracking-[5px]'>CREATE TABLE</h1>
                    <button
                        onClick={() => dispatch(toggleUpdateField())}
                        className='hover:bg-gray-700 p-1'
                    ><AiOutlineClose size={20} /></button>
                </div>
                <button className='uppercase tracking-[2px] text-center bg-blue-600 p-2 mt-4 w-full text-md'>Edit Field</button>
                <button className='uppercase tracking-[2px] text-center bg-blue-600 p-2 mt-2 w-full text-md'>Add Reference</button>
            </div>
        </div>
    )
}

export default UpdateFieldModal