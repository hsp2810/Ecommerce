import axios from "axios";

const options = {
	method: "GET",
	url: "https://amazon-price1.p.rapidapi.com/search",
	params: {
		keywords: "<REQUIRED>",
		marketplace: "ES",
	},
	headers: {
		"X-RapidAPI-Key": "393c718550msh1df6de58575515fp107cc6jsnca34ca173980",
		"X-RapidAPI-Host": "amazon-price1.p.rapidapi.com",
	},
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
