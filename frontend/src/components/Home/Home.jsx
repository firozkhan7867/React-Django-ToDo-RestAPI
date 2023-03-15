import React, { useState, useEffect } from 'react';
import Accordion from '../Accordion/Accordion';
import './home.css';
import axios from "axios";

const Home = () => {

	const token = localStorage.getItem('token');
	const [data, setData] = useState(null);
	const [fetched, setFetched] = useState(false);



	useEffect(() => {
		const fetchData = async () => {
			const resp = await axios.get('http://127.0.0.1:8000/api/todotodos/', {
				headers: {
					Authorization: `Token ${token}`,
				},
			}).then(res => {
				setData(res.data);
				setFetched(true);
				// console.log(res.data);
			}).catch(err => {
				console.log(err);
			})
		};
		fetchData();

	}, []);

	return (
		<div className='bg-[#6983aa] w-full h-screen lg:h-full md:h-full lg:pb-11 md:pb-11 flex justify-center'>
			<div className="bg-white mt-12  lg:mt-12 md:mt-12 rounded-xl / lg:mb-[11px] md:mb-[11px] shadow-2xl lg:w-5/12 md:w-5/12 sm:w-10/12 xs:w-10/12 w-10/12 lg:h-[550px] md:h-[550px] sm:h-[550px] h-[650px]">
				<div className="mt-8 text-center text-3xl font-bold text-white bg-[#dc4040] py-2">MY TODO APP</div>
				<div className="mt-4 p-4">
					<div className="accordion">
						{fetched === true && data.length > 0 ? data.map((value, index) => {
								return (
									<Accordion todo={value} key={index} />
								)
							}): "No Todos Created"}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home