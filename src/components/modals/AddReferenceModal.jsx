// Reducers
import { selectField, selectFieldId, selectTableId, toggleAddReference } from '../../context/publicReducer';
// Redux
import { useDispatch, useSelector } from 'react-redux'
// Icons
import { AiOutlineClose } from 'react-icons/ai';

const AddReferenceModal = () => {
    // Redux
    const dispatch = useDispatch();
    const field = useSelector(selectField)
    const fieldId = useSelector(selectFieldId)
    const tableId = useSelector(selectTableId)

    return (
        <div className='w-screen h-screen bg-gray-900 text-white bg-opacity-50 absolute-center z-10 flex-center'>
            <div className='bg-gray-900 w-[400px] h-[400px] py-5 px-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-medium tracking-[5px] uppercase'>Add Reference</h1>
                    <button
                        onClick={() => dispatch(toggleAddReference())}
                        className='hover:bg-gray-700 p-1'
                    ><AiOutlineClose size={20} /></button>
                </div>
            </div>
        </div>
    )
}

export default AddReferenceModal