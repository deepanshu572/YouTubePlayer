import axios from "axios";

const BASE_URL=  "https://youtube138.p.rapidapi.com"

const options = {
	method: 'GET',
	headers: {
		// 'x-rapidapi-key': '4250ad9fedmsh91dcf01bc7be03cp1a5904jsnfd8fcb0fcf66',
		// 'x-rapidapi-key': 'bd4952d2d3msh9abeee0175921f8p10843ajsn1bd70606847a',  BACKUP API KEY
		// 'x-rapidapi-key': '128bb34629msh542dab646f52556p1f5edfjsn76f030addda7',
		// 'x-rapidapi-key': '33c8c68437mshb517cd454387a2cp12a445jsn8bfdcc8c299d',
		// 'x-rapidapi-host': 'youtube138.p.rapidapi.com'


		'x-rapidapi-key': 'bd4952d2d3msh9abeee0175921f8p10843ajsn1bd70606847a',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchDataFromApi = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}` , options);
    return data;
}
