import React, { useEffect, useRef, useState } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Reducers
import { selectField, selectFieldId, selectTableId, toggleCloseAll, toggleEditField } from '../../context/publicReducer';
import { editField } from '../../context/flowReducer';


// Icons
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai';


const EditFieldModal = () => {
    // States
    const [constraints, setConstraints] = useState([]);

    // Redux
    const dispatch = useDispatch();
    const field = useSelector(selectField)
    const fieldId = useSelector(selectFieldId)
    const tableId = useSelector(selectTableId)

    // Refs
    const fieldNameRef = useRef();
    const fieldTypeRef = useRef();

    // Effects
    useEffect(() => {
        fieldNameRef.current.value = field.name
        fieldTypeRef.current.value = field.type
    }, [])

    // Functions
    const handleUpdateField = () => {
        const data = {
            name: fieldNameRef.current.value,
            type: fieldTypeRef.current.value,
            constraints
        }
        dispatch(editField({ tableId, fieldId, data }))
        dispatch(toggleEditField())
    }

    return (
        <div className='w-screen h-screen bg-gray-900 text-white bg-opacity-50 absolute-center z-10 flex-center'>
            <div className='bg-gray-900 w-[400px] h-[400px] py-5 px-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-medium tracking-[5px] uppercase'>Edit TABLE</h1>
                    <div className='flex gap-2'>
                        <button
                            onClick={() => dispatch(toggleEditField())}
                            className='hover:bg-gray-700 p-1'
                        ><AiOutlineArrowLeft size={20} /></button>

                        <button
                            onClick={() => dispatch(toggleCloseAll())}
                            className='hover:bg-gray-700 p-1'
                        ><AiOutlineClose size={20} /></button>
                    </div>
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
                <button onClick={handleUpdateField} className='w-full uppercase tracking-[2px] p-2 mt-4 bg-blue-700'>
                    save
                </button>
            </div>
        </div>
    )
}

export default EditFieldModal