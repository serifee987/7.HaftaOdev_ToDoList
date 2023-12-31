import React from 'react'

function GEleman({ item, editTask, removeTask, doneTask }) {
    const divTaskStyle = {
        paddingTop: "10px",
        paddingBottom:"40px",
        border: "1px solid #bcd3c7",
        boxSizing: "border-box",
        marginBottom: "5px",
        borderRadius: "8px",
        backgroundColor:"#F9C9C9",
        
    }

    return (
        <>
            <div className='container' style={divTaskStyle}>
                <div
                    className={`list-group-item 
                ${item.isDone
                        && 'bg-success bg-gradient'}`}
                    key={item.uuid}>
                    {item.priority &&
                        <span className='badge text-bg-secondary me-2'>Acil</span>}
                    {item.task}
                    <hr />
                    <div className='btn-group float-end'
                        role='group'>

                        <button onClick={() => doneTask(item.uuid)}
                            className='btn btn-sm float-end'>✅
                        </button>
                        <button onClick={() => editTask(item.uuid)}
                            className='btn btn-sm  float-end'>🔄
                        </button>

                        <button onClick={() => removeTask(item.uuid)}
                            className='btn btn-sm float-end'>🗑️
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GEleman