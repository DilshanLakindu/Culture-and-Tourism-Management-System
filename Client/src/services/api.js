import axios from "axios";

// const apiConfig = axios.create({
// 	baseURL: "https://ctms-api.vercel.app/",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// });

const apiConfig = axios.create({
	baseURL: "https://localhost:5000/",
	headers: {
		"Content-Type": "application/json",
	},
});


export default apiConfig;
