import { MarkerType } from "reactflow";

export default [
    {
        id: 'edge01',
        source: 'users',
        sourceHandle: 'sor1',
        target: 'follows',
        targetHandle: 'tar4',
        animated: true,
        type: 'simplebezier',
        style: { strokeWidth: 2 },
        
    },
    {
        id: 'edge02',
        source: 'users',
        sourceHandle: 'sor2',
        target: 'follows',
        targetHandle: 'tar4',
        animated: true,
        type: 'simplebezier',
        style: { strokeWidth: 2 },
    },
    {
        id: 'edge03',
        source: 'follows',
        sourceHandle: 'sor5',
        target: '-user',
        targetHandle: 'tar4',
        animated: true,
        type: 'simplebezier',
        style: { strokeWidth: 2 },
    }
]