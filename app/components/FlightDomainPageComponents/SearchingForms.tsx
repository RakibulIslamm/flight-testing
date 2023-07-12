import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import React, { useEffect, useState } from "react";
import {
	DSearch,
	EventDataInterface,
	FDSearch,
	TDSearch,
} from "../../interfaces/interfaces";
import { FlightDataInterface } from "@/app/interfaces/FlightData";

interface propsInterface {
	setFlightData: React.Dispatch<React.SetStateAction<FlightDataInterface[]>>;
}

const SearchingForms = ({ setFlightData }: propsInterface) => {
	const [fdSearch, setFDSearch] = useState<FDSearch | null>(null);
	const [dSearch, setDSearch] = useState<DSearch | null>(null);
	const [tdSearch, setTDSearch] = useState<TDSearch | null>(null);


	useEffect(()=>{
		const getData = async() =>{
			const res = await fetch('flight-data.json');
			const flightData = await res.json();
			setFlightData(flightData)
			// console.log(flightData)
		}
		getData();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])


	// useEffect(() => {
	// 	if (fdSearch || dSearch || tdSearch) {
	// 		if (fdSearch) {
	// 			const filterData = data.filter(
	// 				(item) =>
	// 					item.flight_number.toLocaleLowerCase() === fdSearch.flight_number?.toString().toLocaleLowerCase() &&
	// 					item.local_dep_date === fdSearch.departure
	// 			);
	// 			setFlightData(filterData);
	// 		}
	// 		if (dSearch) {
	// 			const filterData = data.filter(
	// 				(item) => item.local_dep_date === dSearch.departure
	// 			);
	// 			setFlightData(filterData);
	// 		}
	// 		if (tdSearch) {
	// 			const filterData = data.filter(
	// 				(item) => item.task_number.toLocaleLowerCase() === tdSearch.task_number?.toString().toLocaleLowerCase() && item.local_dep_date === tdSearch.departure
	// 			);
	// 			setFlightData(filterData);
	// 		}
	// 	} 
		
	// 	if(!fdSearch && !dSearch && !tdSearch) {
	// 		setFlightData(data);
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [fdSearch, tdSearch, dSearch]);



	// Search by Flight Number and Local Departure Date
	const handleSearchByFlightNumberAndDeparture = (
		e: React.FormEvent<HTMLFormElement>
	): void => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const flight_number = formData.get("flight_number");
		const departure = formData.get("departure");
		const data = { flight_number: flight_number, departure: departure };
		setFDSearch(data);
		setDSearch(null);
		setTDSearch(null);
		e.currentTarget.reset()
	};


	// Local Departure Date
	const handleSearchByLocalDeparture = (
		e: React.FormEvent<HTMLFormElement>
	): void => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const departure = formData.get("departure");
		const data = { departure };
		setDSearch(data);
		setTDSearch(null);
		setFDSearch(null);
		e.currentTarget.reset()
	};

	// Search by Task Number and Local Departure Date
	const handleSearchByTailAndDeparture = (
		e: React.FormEvent<HTMLFormElement>
	): void => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const task_number = formData.get("task_number");
		const departure = formData.get("departure");
		const data = { task_number, departure };
		setTDSearch(data);
		setDSearch(null);
		setFDSearch(null);
		e.currentTarget.reset()
	};

	return (
		<div className="my-3 w-7/12 md:w-full sm:w-full xs:w-full space-y-10">
			<div>
				<p className="text-lg font-normal mt-5 mb-3 xs:text-sm xs:text-center ">
					Search by Flight Number and Local Departure Date
				</p>
				<form
					onSubmit={handleSearchByFlightNumberAndDeparture}
					className="w-full flex items-center xs:flex-col gap-4"
				>
					<InputText
						className="w-full"
						name="flight_number"
						placeholder="Flight Number"
						required
					/>

					<Calendar
						className="w-full"
						name="departure"
						placeholder="Departure Date"
						dateFormat="yy-mm-dd"
						required
					/>

					<Button
						className="px-5 py-3 bg-[#14b8a6] rounded-md text-white inline-block w-[300px] xs:w-full"
						label="Load Data"
						type="submit"
					/>
				</form>
			</div>

			<div>
				<p className="text-lg font-normal mt-5 mb-3 xs:text-sm xs:text-center ">Local Departure Date</p>
				<form
					onSubmit={handleSearchByLocalDeparture}
					className="w-full flex items-center xs:flex-col gap-4"
				>
					<Calendar
						className="w-full"
						name="departure"
						placeholder="Local Departure Date"
						dateFormat="yy-mm-dd"
						required
					/>

					<Button
						className="px-5 py-3 bg-[#14b8a6] rounded-md text-white inline-block w-[300px] xs:w-full"
						label="Load Data"
						type="submit"
					/>
				</form>
			</div>

			<div>
				<p className="text-lg font-normal mt-5 mb-3 xs:text-sm xs:text-center ">
					Search by Task Number and Local Departure Date
				</p>
				<form
					onSubmit={handleSearchByTailAndDeparture}
					className="w-full flex items-center xs:flex-col gap-4"
				>
					<InputText
						className="w-full"
						name="task_number"
						placeholder="Task Number"
						required
					/>

					<Calendar
						className="w-full"
						name="departure"
						placeholder="Departure Date"
						dateFormat="yy-mm-dd"
						required
					/>

					<Button
						className="px-5 py-3 bg-[#14b8a6] rounded-md text-white inline-block w-[300px] xs:w-full"
						label="Load Data"
						type="submit"
					/>
				</form>
			</div>
		</div>
	);
};

export default SearchingForms;
