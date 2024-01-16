import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import './Test.scss';
import axios from 'axios';
import {API_URL} from '../../config/contansts'

const Test = () => {
  const [testRes, setTestRes] = useState();
  
  const testReq = async () => {
    const res = await axios.get(`${API_URL}/api/test`);
    console.log(res.data);
    setTestRes(res.data);
  }

  useEffect(()=>{
    testReq();
  }, []);
  
  return(
    <div className='test-container-kjh'>
      <h1>test</h1>
      <h2>테스트 요청: {testRes && testRes.status}</h2>
      <NavLink to={'/'}>main</NavLink>
    </div>
  )
}

export default Test; 