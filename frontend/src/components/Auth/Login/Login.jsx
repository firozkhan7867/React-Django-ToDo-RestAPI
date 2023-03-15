import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const { email, password } = formData;
	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = e => {
		e.preventDefault();

		const username = email;
		const body = JSON.stringify({ username, password });
		axios.defaults.xsrfCookieName = 'csrftoken';
		axios.defaults.xsrfHeaderName = 'X-CSRFToken';
		axios.post("http://127.0.0.1:8000/api/auth/token/", body, config).then(res => {
			console.log(res.data.token);
			localStorage.setItem("token", res.data.token);
			navigate("/");
		})
		// login(email,password).then((res)=>{
		//     if(JSON.parse(localStorage.getItem("logfail")) === true){
		//         // setAlert(<Alert type="error" msg="Invalid Credentials" bb="danger" onclick={setAlert} />)
		//     }
		// }).catch( (err) =>{

		//     console.log(err);
		// }
		// );
	}
	return (
		<div className='bg-[#6983aa] w-full h-screen lg:h-full md:h-full lg:pb-11 md:pb-11 flex justify-center'>
			<div className="bg-white mt-12  lg:mt-12 md:mt-12 rounded-xl / lg:mb-[11px] md:mb-[11px] shadow-2xl lg:w-5/12 md:w-5/12 sm:w-10/12 xs:w-10/12 w-10/12 lg:h-[550px] md:h-[550px] sm:h-[550px] h-[650px]">
				<div className="mt-8 text-center text-3xl font-bold text-white bg-[#dc4040] py-2">Login</div>
				<div className="mt-10 px-4  py-4 flex justify-center">
					<form className='w-9/12' onSubmit={(e) => onSubmit(e)}>
						<div className="relative z-0 w-full mb-6 group">
							<input type="email" name="email" id="floating_email" value={email} onChange={e => onChange(e)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
							<label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input type="password" name="password" id="floating_password" value={password} onChange={e => onChange(e)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
							<label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
						</div>
						<div classNameName="flex justify-center">
							<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

						</div>
					</form>

				</div>
			</div>
		</div>
	)
}

export default Login