import React, { useState, useCallback } from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
} from 'reactflow';

import 'reactflow/dist/style.css';
import Diagram from './Diagram';

const nodeTypes = { diagram: Diagram };

const initialNodes = [
    {
        id: '1', type: 'diagram', position: { x: 200, y: 100 }, data: {
            handleType: 'source',
            sourceId1: 'id01',
            sourceId2: 'id02',
            handlePosition: 'right'
        }
    },
    {
        id: '2', type: 'diagram', position: { x: 500, y: 100 }, data: {
            handleType: 'target',
            handlePosition: 'left'
        }
    },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2', sourceHandle: 'id01' },
{ id: 'e1-3', source: '1', target: '2', sourceHandle: 'id02' }];

export default function App() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
            >
                {/* <Controls /> */}
                {/* <MiniMap /> */}
                {/* <Background variant="dots" gap={12} size={1} /> */}
            </ReactFlow>
        </div>
    );
}