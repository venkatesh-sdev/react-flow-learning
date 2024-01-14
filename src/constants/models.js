import { nanoid } from "nanoid";
import { MarkerType } from "reactflow";

export const createNodeModel = (name, positionX) => {
    const id = nanoid(20)
    return ({
        id,
        type: 'Table',
        position: { x: positionX, y: 100 },
        data: {
            tableName: name,
            tableModel: [
                createTableFieldModel({ name: 'dummy', type: 'dummy', constraints: [] }),
                createTableFieldModel({ name: 'dummy', type: 'dummy', constraints: [] }),
                createTableFieldModel({ name: 'dummy', type: 'dummy', constraints: [] }),
            ],
            id
        }
    })
};

export const createTableFieldModel = (data) => ({
    id: nanoid(20),
    name: data.name,
    type: data.type,
    constraints: data.constraints,
    targetid: nanoid(20),
    sourceid: nanoid(20),
    isSource: false,
    isTarget: false,
});

export const edgeModel = (source, sourceHandle, target, targetHandle) => {
    return ({
        id: nanoid(20),
        source,
        sourceHandle,
        target,
        targetHandle,
        animated: true,
        type: 'simplebezier',
        style: { strokeWidth: 2 },
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    })
}