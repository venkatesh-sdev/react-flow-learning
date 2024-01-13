export default [
    {
        id: 'users',
        type: 'Table',
        position: { x: 0, y: 100 },
        data: {
            tableName: 'User',
            tabelModel: [
                {
                    name: 'following_id',
                    type: 'integer',
                    constraints: ['primary', 'notnull'],
                    targetid: 'tar1',
                    sourceid: 'sor1',
                    isSource: true,
                    isTarget: false,
                },
                {
                    name: 'following_user_id', type: 'integer',
                    constraints: ['notnull'],
                    targetid: 'tar2',
                    sourceid: 'sor2',
                    isSource: true,
                    isTarget: false,
                },
                {
                    name: 'created_at', type: 'timestamp',
                    constraints: [''],
                    targetid: 'tar3',
                    sourceid: 'sor3',
                    isSource: false,
                    isTarget: false,
                }
            ],
            id: 'users',
        }
    },
    {
        id: 'follows',
        type: 'Table',
        position: { x: 350, y: 100 },
        data: {
            id: 'follows',
            tableName: 'Follows',
            tabelModel: [
                {
                    name: 'user_id', type: 'integer',
                    constraints: ['primary', 'notnull'],
                    targetid: 'tar4',
                    sourceid: 'sor4',
                    isSource: false,
                    isTarget: true,
                },
                {
                    name: 'user_name', type: 'varchar',
                    constraints: ['notnull'],
                    targetid: 'tar5',
                    sourceid: 'sor5',
                    isSource: true,
                    isTarget: false,
                }, {
                    name: 'user_age', type: 'varchar',
                    constraints: ['notnull'],
                    targetid: 'tar5',
                    sourceid: 'sor5',
                    isSource: false,
                    isTarget: false,
                },
                {
                    name: 'created_at', type: 'timestamp',
                    constraints: [''],
                    targetid: 'tar6',
                    sourceid: 'sor6',
                    isSource: false,
                    isTarget: false,
                }
            ]
        }
    },
    {
        id: '-user',
        type: 'Table',
        position: { x: 700, y: 100 },
        data: {
            id: '-user',
            tableName: 'Following',
            tabelModel: [
                {
                    name: 'user_id', type: 'integer',
                    constraints: ['primary', 'notnull'],
                    targetid: 'tar4',
                    sourceid: 'sor4',
                    isSource: false,
                    isTarget: true,
                },
                {
                    name: 'user_name', type: 'varchar',
                    constraints: ['notnull'],
                    targetid: 'tar5',
                    sourceid: 'sor5',
                    isSource: false,
                    isTarget: true,
                }, {
                    name: 'user_age', type: 'varchar',
                    constraints: ['notnull'],
                    targetid: 'tar5',
                    sourceid: 'sor5',
                    isSource: false,
                    isTarget: false,
                },
                {
                    name: 'created_at', type: 'timestamp',
                    constraints: [''],
                    targetid: 'tar6',
                    sourceid: 'sor6',
                    isSource: false,
                    isTarget: false,
                }
            ]
        }
    },
];

