import React from 'react'
import { Handle } from 'reactflow'

const Diagram = ({ data }) => {
    return (
        <div className='diagram-container'>
            <div className='diagram-content'>
                <div className='diagram-content-text'>
                    <p>text</p>
                </div>
                <div className='diagram-content-type'>
                    <p>type</p>
                </div>
                <Handle position={data.handlePosition} type={data.handleType} id={data.sourceId1} />
            </div>
            <div className='diagram-content'>
                <div className='diagram-content-text'>
                    <p>text</p>
                </div>
                <div className='diagram-content-type'>
                    <p>type</p>
                </div>
                <Handle position={data.handlePosition} type={data.handleType} id={data.sourceId2} />
            </div>
            <div className='diagram-content'>
                <div className='diagram-content-text'>
                    <p>text</p>
                </div>
                <div className='diagram-content-type'>
                    <p>type</p>
                </div>
            </div>
        </div>
    )
}

export default Diagram