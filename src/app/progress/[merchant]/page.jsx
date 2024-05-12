"use client"

import React, { useEffect } from 'react'
import { Pacifico, Nunito } from "next/font/google";
import { useParams } from 'next/navigation';
import axios from 'axios';

const nunito = Nunito({ subsets: ['latin'], weight: ["variable"] })
const PaymentProgressPage = () => {
	const { merchant } = useParams();

	useEffect(() => {
	  if(merchant){
		axios(`https://ladusamrat-api.vercel.app/${merchant}`)
		.then((res) => {
			window.location.href = "https://ladusamrat-store.vercel.app?clear=yes"
		})
		.catch((err) => {
			alert(err.message)
		})
	  }
	}, [merchant])
	
	return (
		<div className={'h-screen w-screen flex flex-col items-center justify-center ' + nunito.className}>
			<h2 className='text-2xl font-bold'>Payment In Progress</h2>
			<h2 className='text-sm font-bold text-gray-500 mt-2'>Please dont press back button or close the window</h2>
		</div>
	)
}

export default PaymentProgressPage