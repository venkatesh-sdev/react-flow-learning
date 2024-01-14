import { memo } from 'react'

// Icons
import { AiOutlinePlus } from 'react-icons/ai'
// Redux
import { useDispatch } from 'react-redux'
// React Flow
import { Handle } from 'reactflow'
// Reducers
import { toggleCreateField, toggleUpdateField } from '../context/publicReducer'


const Table = memo(({ data }) => {
    // Redux
    const dispatch = useDispatch();

    // Functions
    const handleUpdateField = (fieldId, field) => {
        dispatch(toggleUpdateField({ tableId: data.id, fieldId, field }))
    }

    return (
        <div className='min-w-[250px] text-white'>
            {/* Table Name */}
            <div className='p-2 bg-black flex items-center justify-between'>
                <p className='text-md font-medium'>{data.tableName}</p>
            </div>
            {/* List Of Fields */}
            {
                data?.tableModel?.map((model, index) => {
                    return (
                        <div onClick={() => handleUpdateField(model.id, model)} key={index} className='flex justify-between gap-2 items-center border-transparent border border-b-white border-opacity-10 hover:bg-gray-800 bg-gray-700 px-4 py-2 relative'>
                            <Handle
                                type='target' position='left' id={model.targetid}
                                className={`${model.isTarget ? "bg-black border" : "bg-transparent border-none"}`}
                            />
                            <div className=''>
                                <p className='text-md'>{model.name}</p>
                            </div>
                            <div className=''>
                                <p className='text-md'>{model.type}</p>
                            </div>

                            <Handle type='source'
                                position='right'
                                id={model.sourceid}
                                className={`${model.isSource ? "bg-black border" : "bg-transparent border-none"}`}
                            />
                        </div>
                    )
                })
            }
            {/* Add Field Button */}
            <button
                className='bg-gray-800 w-full h-[41.6px] flex-center gap-2 hover:bg-gray-900'
                onClick={() => dispatch(toggleCreateField(data.id))}>
                <AiOutlinePlus />
            </button>

        </div>
    )
});

export default Table