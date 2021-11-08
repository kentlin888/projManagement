import React, { Component, useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';


export default function LineChart() {
	let chartRef = useRef(null);//React.createRef();
	// useEffect(() => {
	// 	// Set the mutable latest value
	// 	latestCount.current = count;
	// 	setTimeout(() => {
	// 		// Read the mutable latest value
	// 		console.log(`You clicked ${latestCount.current} times`);
	// 	}, 3000);
	// });

	// useEffect(() => {
	// 	console.log(chartRef)	
	// })
	useEffect(() => {
		const ctx = chartRef.current.getContext("2d");
		// console.log(ctx)
		new Chart(ctx, {
			type: "line",
			data: {
				labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				datasets: [{
					data: [86, 114, 106, 106, 107, 111, 133],
					label: "Total",
					borderColor: "#3e95cd",
					backgroundColor: "#7bb6dd",
					fill: false,
				}, {
					data: [70, 90, 44, 60, 83, 90, 100],
					label: "Accepted",
					borderColor: "#3cba9f",
					backgroundColor: "#71d1bd",
					fill: false,
				}, {
					data: [10, 21, 60, 44, 17, 21, 17],
					label: "Pending",
					borderColor: "#ffa500",
					backgroundColor: "#ffc04d",
					fill: false,
				}, {
					data: [6, 3, 2, 2, 7, 0, 16],
					label: "Rejected",
					borderColor: "#c45850",
					backgroundColor: "#d78f89",
					fill: false,
				}
				]
			},
		});
	})



	// }, [])

	return (
		<div style={{width:1000}}>
			<canvas
				id="myChart"
				ref={chartRef}
			/>

		</div>
	)
}