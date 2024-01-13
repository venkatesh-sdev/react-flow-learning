// import React, { useState, useCallback } from 'react';
import ReactFlow, {
    // MiniMap,
    // Controls,
    Background, addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';
import Table from './components/Table';
import TableList from './components/TableList';

const nodeTypes = { Table: Table };

import { useDispatch, useSelector } from 'react-redux';
import { onConnect, onEdgesChange, onNodesChange, selectEdges, selectNodes } from './context/flowReducer';



export default function App() {
    const dispatch = useDispatch();


    return (
        <div className='flex w-screen '>
            <TableList />
            <div className='w-[75vw] h-screen'>
                <ReactFlow
                    nodes={useSelector(selectNodes)}
                    edges={useSelector(selectEdges)}
                    onNodesChange={(e) => dispatch(onNodesChange(e))}
                    onEdgesChange={(e) => dispatch(onEdgesChange(e))}
                    onConnect={(e) => dispatch(onConnect(e))}
                    nodeTypes={nodeTypes}
                    fitView
                >
                    {/* <Controls className='bg-gray-700' />
                    <MiniMap className='bg-transparent' /> */}
                    <Background className='bg-[#1B1E25]' variant="dots" gap={24} size={1} />
                </ReactFlow>
            </div>
        </div>
    );
}