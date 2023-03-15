import React, { useState } from 'react'

const Accordion = ({todo}) => {
    const [show, setShow] = useState(true);
    return (
        <div className="accordion-item mb-2">
            <h2 className="accordion-header flex justify-between"  onClick={()=> setShow(!show)}>
                <button className="accordion-button" type="button">
                    {todo.title}
                </button>
                <div className="text-lg font-bold text-blue-500">
                    View
                </div>
            </h2>
            <div className={show ? "p-3 border hidden": "p-3 border"}>
                <p className='mb-4'>{todo.description}</p>
                <hr />
                <div className="flex justify-end mx-3 mt-2">
                    <button className="mx-2 text-white bg-green-500 px-4 text-lg py-1 rounded-lg ">Edit</button>
                    <button className="mx-2 text-white bg-red-700 px-4 text-lg py-1 rounded-lg ">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Accordion