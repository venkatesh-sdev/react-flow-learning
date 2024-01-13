import React from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux'
// Icons
import { AiOutlineClose } from 'react-icons/ai'
// Reducers
import { selectFieldId, selectTableId, toggleAddReference, toggleEditField, toggleUpdateField } from '../../context/publicReducer'
import { deleteField } from '../../context/flowReducer'

const UpdateFieldModal = () => {
    // Redux
    const fieldId = useSelector(selectFieldId)
    const tableId = useSelector(selectTableId)
    const dispatch = useDispatch()

    // Functions
    const handleDeleteField = () => {
        dispatch(deleteField({ tableId, fieldId }))
        dispatch(toggleUpdateField())
    }

    return (
        <div className='w-screen h-screen bg-gray-900 text-white bg-opacity-50 absolute-center z-10 flex-center'>
            <div className='bg-gray-900 w-[400px] py-5 px-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-medium tracking-[5px] uppercase'>update field</h1>
                    <button
                        onClick={() => dispatch(toggleUpdateField())}
                        className='hover:bg-gray-700 p-1'
                    ><AiOutlineClose size={20} /></button>
                </div>
                <button onClick={() => dispatch(toggleEditField())} className='uppercase tracking-[2px] text-center bg-blue-600 p-2 mt-4 w-full text-md'>Edit Field</button>
                <button onClick={() => dispatch(toggleAddReference())} className='uppercase tracking-[2px] text-center bg-blue-600 p-2 mt-2 w-full text-md'>Add Reference</button>
                <button onClick={handleDeleteField} className=' tracking-[2px] text-center bg-red-600 p-2 mt-2 w-full text-md uppercase'>delete Field</button>
            </div>
        </div>
    )
}

export default UpdateFieldModal