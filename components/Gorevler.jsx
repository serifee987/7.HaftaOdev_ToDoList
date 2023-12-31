import React, { useEffect, useState } from 'react'
import GEleman from './GEleman'
function Gorevler({ tasks, removeTask, editTask, doneTask }) {
    const [priority, setPriority] = useState(false)
    const [fiteredTasks, setFilteredTasks] = useState(tasks)

    function handlePriorityFilter() {
        setPriority(prev => !prev)
    }
    useEffect(() => {
        setFilteredTasks(tasks)
    }, [tasks])
    useEffect(() => {
        priority ? setFilteredTasks(tasks.filter(
            item => item.priority === priority
        )) : setFilteredTasks(tasks)
    }, [priority])
    return (
        <>
            <div            
            className='p-4 bg-light mb-5 border rounded'>
                <p className='mb-3'>Görevler
                    <span
                        onClick={handlePriorityFilter}
                        className={`btn btn-sm ${!priority ? "btn-info" : "btn-primary"}  float-end`}>
                        {!priority ? "Acil Görevleri Göster" : "Hepsini Göster"}</span>
                </p>
                <div className='container'>
                    {fiteredTasks.map((item, index) =>
                        <GEleman
                            key={index}
                            item={item}
                            editTask={editTask}
                            removeTask={removeTask}
                            doneTask={doneTask} />)}
                </div>
            </div>
        </>



    )
}

export default Gorevler