import { nanoid } from "nanoid";

export const createNodeModel = (name, positionX) => {

    const id = nanoid(20)
    return ({
        id,
        type: 'Table',
        position: { x: positionX, y: 100 },
        data: {
            tableName: name,
            tabelModel: [],
            id
        }
    })
};

export const createTableFieldModel = ( data ) => ({
    name: data.name,
    type: data.type,
    constraints: data.constraints,
    targetid: nanoid(20),
    sourceid: nanoid(20),
    isSource: false,
    isTarget: false,
});