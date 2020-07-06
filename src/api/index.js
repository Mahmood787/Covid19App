import axios from 'axios';

export const fetchData =async()=>{
    try {
    const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get('https://covid19.mathdro.id/api')
    const modifiedData = {confirmed, recovered, deaths, lastUpdate}
    return modifiedData;
    }
    catch (error){

    };
}
export const fetchDailyData = async()=>{
try {
    const {data} = await axios.get('https://covid19.mathdro.id/api/daily')
     return data;
} catch (error) {
    
}    
}
