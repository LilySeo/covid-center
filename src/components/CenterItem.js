import React from 'react';
import styled from "styled-components";

const CenterItemBlock = styled.div`
  display: flex;

  .maparea {
    border:1px solid red;
  }

  .contents {
    margin-bottom: 3rem;
    h2 {
      margin: 0;
      
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  
`;

const CenterItem = ( { data }) => {
    const { address, centerName, centerType, facilityName, lat} = data;

    return (
        <CenterItemBlock>
            <div className="contents">

                <h2>{address}</h2>
                <p>{centerName}</p>
                <p>{centerType}</p>
                <p>{facilityName}</p>
                <p>{lat}</p>
            </div>
        </CenterItemBlock>

    );
};

export default CenterItem;