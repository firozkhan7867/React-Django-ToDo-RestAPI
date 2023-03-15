import axios from 'axios';
import React, { useState } from 'react'

const Accordion = ({ todo }) => {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState(false);
    const [del, setdel] = useState(false);
    const token = localStorage.getItem('token');
    const updateStatus = (id) => {
        if (status) {
            return;
        }

        const url = "http://127.0.0.1:8000/api/todo/todos/" + id + "/"
        const body = {
            status: true
        }
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        axios.patch(url, body, {
            headers: {
                Authorization: `Token ${token}`,
            },
        }).then(res => {
            console.log(res);
            setStatus(true);
            // localStorage.setItem("token",res.data.token);
            // navigate("/");
        }).catch(err => {
            console.log(err);
        })
    }

    const deleteTodo = (id) => {


        const url = "http://127.0.0.1:8000/api/todo/todos/" + id + "/";
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        axios.delete(url, {
            headers: {
                Authorization: `Token ${token}`,
            },
        }).then(res => {
            console.log(res);
            setdel(true);
            // localStorage.setItem("token",res.data.token);
            // navigate("/");
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className={del ? "hidden" : "accordion-item mb-2"}>
            <h2 className="accordion-header flex justify-between" onClick={() => setShow(!show)}>
                <button className="accordion-button" type="button">
                    {todo.title}
                </button>
                <div className="text-lg font-bold text-blue-500">
                    View
                </div>
            </h2>
            <div className={show ? "p-3 border hidden" : "p-3 border"}>
                <p className='mb-4'>{todo.description}</p>
                <hr />
                <div className="flex justify-end mx-3 mt-2">
                    <button className={status ? "mx-2 text-white bg-blue-300 px-4 text-lg py-1 rounded-lg hover:cursor-not-allowed " : "mx-2 text-white bg-green-500 px-4 text-lg py-1 rounded-lg "} onClick={() => updateStatus(todo.id)}>{status ? "Completed" : "Complete"}</button>
                    <button className="mx-2 text-white bg-red-700 px-4 text-lg py-1 rounded-lg " onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Accordion