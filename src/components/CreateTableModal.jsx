import React from 'react'

// Icons
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'

// Model
import { createNodeModel } from '../constants/models';

// Redux 
import { useDispatch } from 'react-redux'
import { toggleCreateField, toggleCreateTable } from '../context/publicReducer';
import { addToNode, updatePositioX } from '../context/flowReducer';

const CreateTableModal = () => {

  // Redux
  const dispatch = useDispatch();
  const positionX = useSelector(selectPositionX)


  // Ref
  const tableNameRef = useRef();

  // Functions
  const handleAddTable = () => {
    const name = tableNameRef.current.value;
    const nodeModel = createNodeModel(name, positionX);
    dispatch(addToNode(nodeModel))
    dispatch(toggleCreateTable())
    dispatch(updatePositioX())
  }


  return (
    <div className='w-screen h-screen bg-gray-900 text-white bg-opacity-50 absolute-center z-10 flex-center'>
      <div className='w-[500px] bg-gray-900 px-2 py-5'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-medium tracking-[5px]'>CREATE TABLE</h1>
          <button
            onClick={() => dispatch(toggleCreateTable())}
            className='hover:bg-gray-700 p-1'
          ><AiOutlineClose size={20} /></button>
        </div>
        <div className='flex flex-col gap-2 mt-5'>
          <label htmlFor="tableName" className='text-md font-medium uppercase tracking-[2px]'>Table Name</label>
          <input
            type="text"
            id='tableName'
            ref={tableNameRef}
            autoComplete='false'
            placeholder='Enter Table Name'
            className='bg-gray-800 p-2 placeholder:tracking-[2px] placeholder:uppercase'
          />
        </div>
        <button
          onClick={() => dispatch(toggleCreateField())}
          className='bg-gray-800 flex-center p-2 mt-2  w-full gap-2'>
          <AiOutlinePlus /> <p className='text-md uppercase tracking-[2px]'>Add Field</p>
        </button>
        <button onClick={handleAddTable} className='w-full uppercase tracking-[2px] p-2 mt-4 bg-blue-700'>
          save
        </button>
      </div>
    </div>
  )
}

export default CreateTableModal