import React, { useEffect, useRef } from 'react';
import styled from "styled-components";

const CenterItemBlock = styled.div`
  display: flex;

  .maparea {
    border:1px solid red;
  }

  .contents {
    width: 100%;
    margin-bottom: 3rem;
    
    
    &> div { 
     float: left;
     width: 300px;
     height: 200px;
     margin-right: 40px;
     border: 1px solid #c5c5c5;
     
     &:hover {
        opacity: 0.6;
     }
    }
    
    h2 {
      margin: 0;
      padding-top: 12px;
      color: #333;
    }

    p {
      margin: 0;
      color: #666;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  
`;

const {kakao} = window;

const CenterItem = ( { data }) => {
    const { address, centerName, centerType, facilityName, lat, lng } = data;

    const options = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 9
    };

    const container = useRef(null);

    useEffect(() => {
        const map = new kakao.maps.Map(container.current, options);
        // 마커가 표시될 위치입니다
        let markerPosition = new kakao.maps.LatLng(lat, lng);
        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
            position: markerPosition
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        map.setDraggable(false);
    }, []);

    return (
        <CenterItemBlock>
            <div className="contents">
                <div ref={container}></div>
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