import { createSlice } from "@reduxjs/toolkit";
import initialNodes from "../data/nodes";
import initialEdges from "../data/edges";
import { addEdge, applyEdgeChanges, applyNodeChanges } from "reactflow";
import { createTableFieldModel } from "../constants/models";

const initialState = {
    nodes: initialNodes,
    edges: initialEdges,
    positionX: initialNodes.length > 1 && initialNodes[initialNodes.length - 1].position.x + 350,
}

const FlowSlice = createSlice(
    {
        name: "flow",
        initialState,
        reducers: {

            addToNode: (state, action) => {
                state.nodes = [...state.nodes, action.payload];
                state.positionX = state.nodes[state.nodes.length - 1].position.x + 350;
            },
            removeFromNode: (state, action) => {
                state.nodes = state.nodes.filter(node => node.id !== action.payload);
                state.positionX = state.positionX - 350
            },

            addToField: (state, action) => {
                state.nodes = state.nodes.map((node) => {
                    if (node.id !== action.payload.id) return node;
                    const newTableModel = [...node.data.tabelModel, createTableFieldModel(action.payload.data)];
                    const newNode = { ...node, data: { ...node.data, tabelModel: newTableModel } };

                    return newNode;
                })
            },
            editField: (state, action) => {
                state.nodes = state.nodes.map((node) => {
                    if (node.id !== action.payload?.tableId) return node;
                    const updatedTableModel = node.data.tabelModel.map(field => {
                        if (field.id !== action.payload?.fieldId) return field
                        const { name, type, constraints } = action.payload?.data;
                        return { ...field, name, type, constraints }
                    })
                    return ({ ...node, data: { ...node.data, tabelModel: updatedTableModel } })
                })
            },
            deleteField: (state, action) => {
                state.nodes = state.nodes.map((node) => {
                    if (node.id !== action.payload?.tableId) return node;
                    const updatedTableModel = node.data.tabelModel.filter(field => field.id !== action.payload?.fieldId)
                    return ({ ...node, data: { ...node.data, tabelModel: updatedTableModel } })
                })
            },
            addToEdge: (state, action) => {
                state.edges = [...state.edges, action.payload];
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
                state.edges = addEdge({ ...action.payload, animated: true, style: { strokeWidth: 2 } }, state.edges);
            },
        }
    }
)

export const {
    addToEdge,
    addToNode,
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