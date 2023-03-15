import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



const CreateTodo = () => {

	const navigate = useNavigate();
	const token = localStorage.getItem('token')

	const [formData, setFormData] = useState({
		title: '',
		description: ''
	});


	const { title, description } = formData;
	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = e => {
		e.preventDefault();
		const body = {
			title: title,
			description: description
		}
		axios.defaults.xsrfCookieName = 'csrftoken';
		axios.defaults.xsrfHeaderName = 'X-CSRFToken';
		// console.log(body)
		axios.post("http://127.0.0.1:8000/api/todo/todos/", body, {
			headers: {
				Authorization: `Token ${token}`,
			},
		}).then(res => {
			console.log(res);
			// localStorage.setItem("token",res.data.token);
			navigate("/");
		}).catch(err => {
			console.log(err);
		})
	}

	return (
		<div className='bg-[#6983aa] w-full h-screen lg:h-full md:h-full lg:pb-11 md:pb-11 flex justify-center'>
			<div className="bg-white mt-12  lg:mt-12 md:mt-12 rounded-xl / lg:mb-[11px] md:mb-[11px] shadow-2xl lg:w-5/12 md:w-5/12 sm:w-10/12 xs:w-10/12 w-10/12 lg:h-[550px] md:h-[550px] sm:h-[550px] h-[650px]">
				<div className="mt-8 text-center text-3xl font-bold text-white bg-[#dc4040] py-2">CREATE TODO</div>
				<div className="mt-4 p-4 mx-5">
					<form onSubmit={(e) => onSubmit(e)}>
						<div className="mb-6">
							<label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
							<input type="text" name="title" value={title} onChange={e => onChange(e)} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title of Todo" required />
						</div>
						<div className="mb-6">
							<label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
							<input type="text" name='description' value={description} onChange={e => onChange(e)} id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Description' required />
						</div>
						<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CreateTodo;