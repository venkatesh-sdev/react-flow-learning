
// Icons
import { AiOutlinePlus } from "react-icons/ai";


// Redux
import { useDispatch, useSelector } from 'react-redux';

// Reducers
import { removeFromNode, selectNodes } from '../context/flowReducer';
import {
    selectShowCreateField,
    selectShowUpdateField,
    selectShowCreateTable,
    toggleCreateTable,
    selectShowEditField,
    selectShowAddReference
} from '../context/publicReducer';

// Modals
import {
    AddReferenceModal,
    CreateFieldModal,
    CreateTableModal,
    EditFieldModal,
    UpdateFieldModal,
} from './modals'

const TableList = () => {

    // Redux
    const dispatch = useDispatch();
    const nodes = useSelector(selectNodes);
    const showCreateTableModal = useSelector(selectShowCreateTable);
    const showCreateFieldModal = useSelector(selectShowCreateField);
    const showUpdateFieldModal = useSelector(selectShowUpdateField);
    const showEditFieldModal = useSelector(selectShowEditField);
    const showAddReferenceModal = useSelector(selectShowAddReference);

    // Functions
    const handleTableDelete = (nodeId) => {
        dispatch(removeFromNode(nodeId))
    }

    const showModal = () => {
        if (showCreateFieldModal) return <CreateFieldModal />
        if (showEditFieldModal) return <EditFieldModal />
        if (showAddReferenceModal) return <AddReferenceModal />
        if (showUpdateFieldModal) return <UpdateFieldModal />
        if (showCreateTableModal) return <CreateTableModal />
    }



    return (
        <>
            <div className='max-w-[25vw] min-w-[25vw] w-full h-screen bg-[#101217]'>
                {/* Add Tables and Title */}
                <div className='flex items-center justify-between px-2 my-2'>
                    <h1 className='text-white text-xl tracking-[5px]'>TABLES</h1>
                    <button onClick={() => dispatch(toggleCreateTable())} className='flex items-center gap-2 p-2 bg-gray-800 text-white'>
                        <AiOutlinePlus />
                        <p className='text-md tracking-[3px]'>ADDTABLE</p>
                    </button>
                </div>
                {/* List of Tables */}
                <div className='px-5 mt-6'>
                    {nodes.map((node) => <div key={node.id} className='flex mt-2 justify-between items-center p-2 text-white w-full bg-gray-800'>
                        <div className='flex flex-col gap-2'>
                            <p>{node.data.tableName}</p>
                            <p>Table Fields Count : {node.data.tabelModel.length}</p>
                        </div>
                        <button onClick={() => handleTableDelete(node.id)} className='bg-red-600 p-2 text-xs tracking-[3px]'>
                            DELETE
                        </button>
                    </div>)}
                </div>
            </div>
            {/* Show Modals */}
            {
                showModal()
            }

        </>
    )
}

export default TableList