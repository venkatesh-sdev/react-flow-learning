import { createSlice } from "@reduxjs/toolkit";
import initialNodes from "../data/nodes";
import initialEdges from "../data/edges";
import { addEdge, applyEdgeChanges, applyNodeChanges } from "reactflow";

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
            },
            removeFromNode: (state, action) => {
                state.nodes = state.nodes.filter(node => node.id !== action.payload);
            },

            addToEdge: (state, action) => {
                state.edges = [...state.edges, action.payload];
            },
            removeFromEdge: (state, action) => {
                state.edges = state.edges.filter(edge => edge.id !== action.payload);
            },

            updatePositioX: (state, action) => {
                state.positionX = state.nodes[state.nodes.length - 1].position.x + 350;
            },

            onNodesChange: (state, action) => {
                state.nodes = applyNodeChanges(action.payload, state.nodes);
            },
            onEdgesChange: (state, action) => {
                state.edges = applyEdgeChanges(action.payload, state.edges);
            },
            onConnect: (state, action) => {
                state.edges = addEdge(action.payload, state.edges);
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
    updatePositioX
} = FlowSlice.actions;

export const selectNodes = (state) => state.flow.nodes;
export const selectEdges = (state) => state.flow.edges;
export const selectPositionX = (state) => state.flow.positionX;

export default FlowSlice.reducer;