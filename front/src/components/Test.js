import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {

  const [msg, setMsg] = useState('')

  useEffect(() => {
   fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/test");
      setMsg(response.data);
    } catch (error) {
      console.error('데이터 불러오기 에러:', error);
    }
  }

  return (
      <div>
        백엔드 통신 성공? : {msg}
      </div>
  );
}

export default Test;