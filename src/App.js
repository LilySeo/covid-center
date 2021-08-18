import React, { useState } from 'react';
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get(`https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=data-portal-test-key`)
        .then(response => {
          setData(response.data);
        });
  };
  return (
      <div>
        <div>
          <button onClick={onClick}>불러오기</button>
        </div>
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} /> }
      </div>
  )

}

export default App;