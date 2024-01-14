import { useEffect, useState } from 'react';
// Reducers
import { selectFieldId, selectTableId, toggleAddReference, toggleCloseAll } from '../../context/publicReducer';
// Redux
import { useDispatch, useSelector } from 'react-redux'

// Icons
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai';
import { addToEdge, selectNodes, updateNode } from '../../context/flowReducer';

// React Select
import Select from 'react-select';
import customSelectStyle from '../../constants/customSelectStyle';

const AddReferenceModal = () => {

    // States
    const [tables, settables] = useState([]);
    const [fields, setFields] = useState([]);
    const [selectedTableId, setSelectedTableId] = useState('');
    const [selectedFieldId, setSelectedFieldId] = useState('');
    const [istableselected, setIstableselected] = useState(false);


    // Redux
    const dispatch = useDispatch();
    const fieldId = useSelector(selectFieldId)
    const tableId = useSelector(selectTableId)
    const nodes = useSelector(selectNodes)

    // Effects
    useEffect(() => {
        const tables = nodes.map(node => ({ value: node.data.tableName, label: node.data.tableName, id: node.id, node }))
        settables(tables);
    }, [])

    // Functions
    const getFields = (id) => {
        const selectedNode = nodes.find(node => node.id === id);
        const formattedFields = selectedNode.data.tableModel.map((table) => ({ label: table.name, value: table.name, id: table.id }))
        setFields(formattedFields)
    }

    const handleAddReference = () => {
        dispatch(updateNode({ tableId, fieldId, selectedFieldId, selectedTableId }))
        dispatch(addToEdge())
        dispatch(toggleCloseAll())
    }


    return (
        <div className='w-screen h-screen bg-gray-900 text-white bg-opacity-50 absolute-center z-10 flex-center'>
            <div className='bg-gray-900 w-[400px]  py-5 px-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-medium tracking-[5px] uppercase'>Add Reference to</h1>
                    <div className='flex gap-2'>
                        <button
                            onClick={() => dispatch(toggleAddReference())}
                            className='hover:bg-gray-700 p-1'
                        ><AiOutlineArrowLeft size={20} /></button>

                        <button
                            onClick={() => dispatch(toggleCloseAll())}
                            className='hover:bg-gray-700 p-1'
                        ><AiOutlineClose size={20} /></button>
                    </div>
                </div>
                <div className='mt-2 bg-gray-900'>
                    <p className='text-md font-medium uppercase tracking-[2px] mb-2'>Select Table</p>
                    <Select
                        defaultValue={tables[0]}
                        options={tables}
                        onChange={(e) => {
                            setIstableselected(true)
                            setSelectedTableId(e.id);
                            getFields(e.id)
                        }}
                        styles={customSelectStyle}
                    />
                </div>
                <div className='mt-2'>
                    <p className='text-md font-medium uppercase tracking-[2px] mb-2'>Select Field</p>
                    <Select
                        defaultValue={fields[0]}
                        options={fields}
                        onChange={(e) => {
                            setSelectedFieldId(e.id);
                        }}
                        styles={customSelectStyle}
                        isDisabled={!istableselected}
                    />
                </div>
                <button onClick={handleAddReference} className='text-md mt-2 bg-blue-600 w-full p-2 tracking-[4px] uppercase'>Save</button>
            </div>
        </div>
    )
}

export default AddReferenceModal