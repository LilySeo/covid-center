
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CenterItem from './CenterItem';
import axios from "axios";

const CenterListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const CenterList = () => {
    const [ datas, setDatas ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        // async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=data-portal-test-key`,
                );
                setDatas(response.data.data);
                console.log(response.data.data);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // 대기 중
    if (loading) {
        return <CenterListBlock>대기중 ...</CenterListBlock>;
    }

    // 아직 datas 값이 설정되지 않았을 때
    if (!datas) {
        return null;
    }

    // datas 값이 유효할 때
    return (
        <CenterListBlock>
            {datas && datas.map(data => (
                <CenterItem key={data.lat} data={data} />
            ))}
        </CenterListBlock>
    )
}

// const sampleArticle = {
//   address : '주소',
//   centerName : '센터 이름',
//   centerType : '센터 타입',
//   facilityName: '장소명'
// }
// const CenterList = () => {
//     return (
//         <CenterListBlock>
//             <CenterItem article={sampleArticle} />
//             <CenterItem article={sampleArticle} />
//             <CenterItem article={sampleArticle} />
//             <CenterItem article={sampleArticle} />
//             <CenterItem article={sampleArticle} />
//         </CenterListBlock>
//     )
// }
// const [ articles, setArticles ] = useState(null);
// const [ loading, setLoading ] = useState(false);

// useEffect(() => {
//   //asyn를 사용하는 함수 따로 선언
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response =  await axios.get(`https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=data-portal-test-key`,);
//       setArticles(response.data.articles);
//     } catch (e) {
//       console.log(e);
//     }
//     setLoading(false);
//   }
//   fetchData();
// }, []);

// // 대기 중일 때
// if (loading) {
//   return <CovidVaccineListBlock>대기 중...</CovidVaccineListBlock>
// }

// // 아직 articles값이 설정되지 않았을 때
// if (!articles) {
//   // return null;
//   return <div>ㅙ</div>
// }

// articles값이 유요할 때
//   return (
//     <CovidVaccineListBlock>
//       {/* {articles.map(article => (
//         <CovidVaccineItem key={article.id} article={article} />
//       ))} */}
//       <CovidVaccineItem article={sampleArticle} />
//       <CovidVaccineItem article={sampleArticle} />
//       <CovidVaccineItem article={sampleArticle} />
//       <CovidVaccineItem article={sampleArticle} />
//     </CovidVaccineListBlock>
//   );
// };


export default CenterList;