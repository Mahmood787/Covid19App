import React from 'react';
import styles from './Charts.module.css'
import {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar } from 'react-chartjs-2';

const Charts =()=> {
  const [dailyData, setDailyData] = useState([]);
  useEffect(()=>{
    const fetchApi =async()=>{
    setDailyData(await fetchDailyData())
  }
  fetchApi();
  });
  const lineChart= (
    dailyData.length
    ?(
      <Line data={{
        labels:dailyData.map(({date})=> date ),
        datasets:[{data: dailyData.map(({deaths})=> deaths),
        label:'Deaths',
        borderColor: '#ffff33',
        fill: true,

        },
          {data:dailyData.map(({confirmed})=>confirmed),
           label: 'Confirmed',
           borderColor:'red',
           backgroundColor: 'rgba(250,0,0,0.5',
           fill:true,
        }]
      }}/>
    ): null
  );

    return (
      <h5>{lineChart}</h5>  
    )
}
export default Charts;