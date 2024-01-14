import { createSlice } from "@reduxjs/toolkit";
import initialNodes from "../data/nodes";
import initialEdges from "../data/edges";
import { addEdge, applyEdgeChanges, applyNodeChanges } from "reactflow";
import { createTableFieldModel, edgeModel } from "../constants/models";
import { MarkerType } from "reactflow";

const initialState = {
    nodes: initialNodes,
    edges: initialEdges,
    edgeData: { sourceHandleId: '', targetHanldeId: '', tableId: '', selectedTableId: '' },
    positionX: initialNodes.length > 1 && initialNodes[initialNodes.length - 1].position.x + 350,
}


// const newModel = (node, tableId, fieldId, type) => {
//     let handleId;
//     if (node.id === tableId) {
//         const newModel = node.data.tableModel.map(field => {
//             if (field.id !== fieldId) return field
//             handleId = field.targetid;
//             if (type === 'target')
//                 return ({ ...field, isTarget: true })

//             return ({ ...field, isTarget: true })
//         })
//         return ({ ...node, data: { ...node.data, tableModel: newModel } })
//     }
// }

const FlowSlice = createSlice(
    {
        name: "flow",
        initialState,
        reducers: {

            addToNode: (state, action) => {
                state.nodes = [...state.nodes, action.payload];
                state.positionX = state.nodes[state.nodes.length - 1].position.x + 350;
            },
            updateNode: (state, action) => {
                const { nodes, edges } = state
                const { tableId, fieldId, selectedTableId, selectedFieldId } = action.payload;
                let sourceHandleId;
                let targetHanldeId;
                state.nodes = nodes.map((node) => {
                    if (node.id === tableId) {
                        const newModel = node.data.tableModel.map(field => {
                            if (field.id !== fieldId) return field
                            sourceHandleId = field.sourceid;
                            return ({ ...field, isSource: true })
                        })
                        return ({ ...node, data: { ...node.data, tableModel: newModel } })
                    }
                    if (node.id === selectedTableId) {
                        const newModel = node.data.tableModel.map(field => {
                            if (field.id !== selectedFieldId) return field
                            targetHanldeId = field.targetid;
                            return ({ ...field, isTarget: true })
                        })
                        return ({ ...node, data: { ...node.data, tableModel: newModel } })
                    }
                    return node;
                })
                state.edgeData = { sourceHandleId, targetHanldeId, tableId, selectedTableId };
            },
            removeFromNode: (state, action) => {
                state.nodes = state.nodes.filter(node => node.id !== action.payload);
                state.positionX = state.positionX - 350
            },

            addToField: (state, action) => {
                state.nodes = state.nodes.map((node) => {
                    if (node.id !== action.payload.id) return node;
                    const newTableModel = [...node.data.tableModel, createTableFieldModel(action.payload.data)];
                    const newNode = { ...node, data: { ...node.data, tableModel: newTableModel } };

                    return newNode;
                })
            },
            editField: (state, action) => {
                state.nodes = state.nodes.map((node) => {
                    if (node.id !== action.payload?.tableId) return node;
                    const updatedTableModel = node.data.tableModel.map(field => {
                        if (field.id !== action.payload?.fieldId) return field
                        const { name, type, constraints } = action.payload?.data;
                        return { ...field, name, type, constraints }
                    })
                    return ({ ...node, data: { ...node.data, tableModel: updatedTableModel } })
                })
            },
            deleteField: (state, action) => {
                state.nodes = state.nodes.map((node) => {
                    if (node.id !== action.payload?.tableId) return node;
                    const updatedTableModel = node.data.tableModel.filter(field => field.id !== action.payload?.fieldId)
                    return ({ ...node, data: { ...node.data, tableModel: updatedTableModel } })
                })
            },
            addToEdge: (state, action) => {
                const { tableId, sourceHandleId, selectedTableId, targetHanldeId } = state.edgeData;
                state.edges = [...state.edges, edgeModel(tableId, sourceHandleId, selectedTableId, targetHanldeId)];
                state.edgeData = { sourceHandleId: '', targetHanldeId: '', tableId: '', selectedTableId: '' }
            },
            removeFromEdge: (state, action) => {
                state.edges = state.edges.filter(edge => edge.id !== action.payload);
            },

            onNodesChange: (state, action) => {
                state.nodes = applyNodeChanges(action.payload, state.nodes);
            },
            onEdgesChange: (state, action) => {
                state.edges = applyEdgeChanges(action.payload, state.edges);
            },
            onConnect: (state, action) => {
                state.edges = addEdge({
                    ...action.payload, animated: true, style: { strokeWidth: 2 }, markerEnd: {
                        type: MarkerType.ArrowClosed,
                    }, }, state.edges);
            },
        }
    }
)

export const {
    addToEdge,
    addToNode,
    updateNode,
    removeFromEdge,
    removeFromNode,
    onConnect,
    onEdgesChange,
    onNodesChange,
    addTable,
    addToField,
    deleteField,
    editField
} = FlowSlice.actions;

export const selectNodes = (state) => state.flow.nodes;
export const selectEdges = (state) => state.flow.edges;
export const selectPositionX = (state) => state.flow.positionX;

export default FlowSlice.reducer;