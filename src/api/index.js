import axios from 'axios';

const fetchData =async()=>{
    try {
    const response = await axios.get('https://covid19.mathdro.id/api')
    return response;
}
    catch (error){

    };
}
export default fetchData;