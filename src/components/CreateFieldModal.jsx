import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTableId, toggleCreateField } from '../context/publicReducer';
import { AiOutlineClose } from 'react-icons/ai';
import { addToField } from '../context/flowReducer';

const CreateFieldModal = () => {

    const [constraints, setConstraints] = useState([]);

    const dispatch = useDispatch();

    const tableId = useSelector(selectTableId);

    const fieldNameRef = useRef();
    const fieldTypeRef = useRef();

    const handleAddField = () => {
        const body = {
            data: {
                name: fieldNameRef.current.value,
                type: fieldTypeRef.current.value,
                constraints,
            },
            id: tableId,
        }
        dispatch(addToField({ ...body }))
        fieldNameRef.current.value = '';
        fieldTypeRef.current.value = '';
        dispatch(toggleCreateField())
    }

    return (
        <div className='absolute z-20 w-screen h-screen bg-gray-900 text-white bg-opacity-50 flex-center'>
            <div className='w-[500px] bg-gray-900 px-2 py-5'>

                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-medium tracking-[5px] uppercase'>CREATE FIELD</h1>
                    <button
                        onClick={() => dispatch(toggleCreateField())}
                        className='hover:bg-gray-700 p-1'
                    ><AiOutlineClose size={20} /></button>
                </div>

                <div className='flex flex-col gap-2 mt-5'>
                    <label htmlFor="fieldName" className='text-md font-medium uppercase tracking-[2px]'>Field Name</label>
                    <input
                        type="text"
                        id='fieldName'
                        ref={fieldNameRef}
                        autoComplete='false'
                        placeholder='Enter Field Name'
                        className='bg-gray-800 p-2 placeholder:tracking-[2px] placeholder:uppercase'
                    />
                </div>

                <div className='flex flex-col gap-2 mt-5'>
                    <label htmlFor="fieldType" className='text-md font-medium uppercase tracking-[2px]'>Field Type</label>
                    <input
                        type="text"
                        id='fieldType'
                        ref={fieldTypeRef}
                        autoComplete='false'
                        placeholder='Enter Field type'
                        className='bg-gray-800 p-2 placeholder:tracking-[2px] placeholder:uppercase'
                    />
                </div>

                <div className='flex flex-col gap-2 mt-5'>
                    <p className='text-md font-medium uppercase tracking-[2px]'>Select Constraints</p>

                    <div className='flex flex-wrap gap-5'>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" className='w-4 h-4 cursor-pointer' onChange={() => setConstraints(prev => [...prev, 'primary'])} />
                            <p className='tracking-[3px] uppercase'>primary</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" className='w-4 h-4 cursor-pointer' onChange={() => setConstraints(prev => [...prev, 'not null'])} />
                            <p className='tracking-[3px] uppercase'>not null</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" className='w-4 h-4 cursor-pointer' onChange={() => setConstraints(prev => [...prev, 'unique'])} />
                            <p className='tracking-[3px] uppercase'>unique</p>
                        </div>
                    </div>

                </div>

                <button onClick={handleAddField} className='w-full uppercase tracking-[2px] p-2 mt-4 bg-blue-700'>
                    save
                </button>
            </div>
        </div>
    )
}

export default CreateFieldModal