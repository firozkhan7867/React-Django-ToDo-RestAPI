import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();
	const [imagefile, setimagefile] = useState();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
		username: '',
		first_name: '',
		last_name: '',
		phone: '',
		address: ''
	});
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const { email, password, username, first_name, last_name, phone, address } = formData;
	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = e => {
		e.preventDefault();
		const data = new FormData();
		data.append('email', email);
		data.append('username', username);
		data.append('first_name', first_name);
		data.append('last_name', last_name);
		data.append('phone', phone);
		data.append('address', address);
		data.append('password', password);
		data.append('image', imagefile);
		axios.post("http://127.0.0.1:8000/api/auth/user/", data).then(res => {
			console.log(res);
			// localStorage.setItem("token", res.data.token);
			navigate("/login");
		}).catch(err => {
			console.log(err);
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
			<div className="bg-white mt-12  lg:mt-12 md:mt-12 rounded-xl / lg:mb-[11px] md:mb-[11px] shadow-2xl lg:w-5/12 md:w-5/12 sm:w-10/12 xs:w-10/12 w-10/12 lg:h-[580px] md:h-[580px] sm:h-[580px] h-[680px]">
				<div className="mt-8 text-center text-3xl font-bold text-white bg-[#dc4040] py-2">Login</div>
				<div className="mt-4 px-4  py-4 flex justify-center">
					<form className='w-9/12' onSubmit={(e) => onSubmit(e)} enctype="multipart/form-data">
						<div className="relative z-0 w-full mb-6 group">
							<input type="email" name="email" id="floating_email" value={email} onChange={e => onChange(e)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
							<label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input type="text" name="username" id="username" value={username} onChange={e => onChange(e)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
							<label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
						</div>
						<div className="grid md:grid-cols-2 md:gap-6">
							<div className="relative z-0 w-full mb-6 group">
								<input type="text" name="first_name" value={first_name} onChange={e => onChange(e)} id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
								<label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
							</div>
							<div className="relative z-0 w-full mb-6 group">
								<input type="text" name="last_name" value={last_name} onChange={e => onChange(e)} id="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
								<label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
							</div>
						</div>
						<div className="grid md:grid-cols-2 md:gap-6">
							<div className="relative z-0 w-full mb-6 group">
								<input type="text" value={phone} onChange={e => onChange(e)} name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
								<label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (xxx-xxx-xxxx)</label>
							</div>
							<div className="relative z-0 w-full mb-6 group">
								<input type="text" name="address" value={address} onChange={e => onChange(e)} id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
								<label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
							</div>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input type="file" name="image" id="image" onChange={(evt) => setimagefile(evt.target.files[0])} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input type="password" name="password" id="password" value={password} onChange={e => onChange(e)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
							<label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
						</div>
						<div className="flex justify-center w-full mb-6">
							<button type='submit' className='bg-blue-700 w-6/12  text-white px-3 py-2 rounded-lg'>Submit</button>
						</div>
					</form>

				</div>
			</div>
		</div>
	)
}

export default Register