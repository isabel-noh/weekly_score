import React, {useEffect, useState} from 'react'
import App from './App'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const WeeklyScore = (props) => {
    const [scoreM, setScoreM] = React.useState(5);  //초기화 score 값 5 // useState : 함수형 컴포넌트 
    const [scoreT, setScoreT] = React.useState(5);
    const [scoreW, setScoreW] = React.useState(5);
    const [scoreTH, setScoreTH] = React.useState(5);
    const [scoreF, setScoreF] = React.useState(5);
    const [scoreSAT, setScoreSAT] = React.useState(5);
    const [scoreS, setScoreS] = React.useState(5);

    useEffect(() => {
        setScoreM(Math.floor(Math.random() * 5) + 1);
        setScoreT(Math.floor(Math.random() * 5) + 1);
        setScoreW(Math.floor(Math.random() * 5) + 1);
        setScoreTH(Math.floor(Math.random() * 5) + 1);
        setScoreF(Math.floor(Math.random() * 5) + 1);
        setScoreSAT(Math.floor(Math.random() * 5) + 1);
        setScoreS(Math.floor(Math.random() * 5) + 1);
    }, [])

    // console.log(score);

    const monday_score = Array.from({length: scoreM}, (v, i) => i);
    const tuesday_score = Array.from({length: scoreT}, (v, i) => i);
    const wednes_score = Array.from({length: scoreW}, (v, i) => i);
    const thurs_score = Array.from({length: scoreTH}, (v, i) => i);
    const friday_score = Array.from({length: scoreF}, (v, i) => i);
    const satur_score = Array.from({length: scoreSAT}, (v, i) => i);
    const sunday_score = Array.from({length: scoreS}, (v, i) => i);


    return (
        <>
        <MyWrap>
            <h1>내 일주일은?</h1>
            <MyWeek>
                <MyDays>
                    <div>월</div> 
                    {monday_score.map((n, i) => {
                        return (
                            <div key={i} className='circle'></div>
                        )
                    })}
                    <Link to="/daily/월"><div className='triangle'></div></Link>
                </MyDays>
                <MyDays>
                    <div>화</div>
                    {tuesday_score.map((n, i) => {
                        return (
                            <div key={i} className='circle'></div>
                        )
                    })}
                    <Link to="/daily/화"><div className='triangle'></div></Link>
                </MyDays>
                <MyDays>
                    <div>수</div>
                    {wednes_score.map((n, i) => {
                        return (
                            <div key={i} className='circle'></div>
                        )
                    })}
                    <Link to="/daily/수"><div className='triangle'></div></Link>                
                </MyDays>
                <MyDays>
                    <div>목</div>
                    {thurs_score.map((n, i) => {
                        return (
                            <div key={i} className='circle'></div>
                        )
                    })}
                    <Link to="/daily/목"><div className='triangle'></div></Link>
                </MyDays>
                <MyDays>
                    <div>금</div>
                    {friday_score.map((n, i) => {
                        return (
                            <div key={i} className='circle'></div>
                        )
                    })}
                    <Link to="/daily/금"><div className='triangle'></div></Link>
                </MyDays>
                <MyDays>
                    <div>토</div>
                    {satur_score.map((n, i) => {
                        return (
                            <div key={i} className='circle'></div>
                        )
                    })}
                    <Link to="/daily/토"><div className='triangle'></div></Link>
                </MyDays>
                <MyDays>
                    <div>일</div>
                    {sunday_score.map((n, i) => {
                        return (
                            <div key={i} className='circle'></div>
                        )
                    })}
                    <Link to="/daily/일"><div className='triangle'></div></Link>
                </MyDays>
            </MyWeek>
        </MyWrap>
        </>
    )

}

const MyWrap = styled.div`
    width: 350px;
    height: 700px;
    text-align: center;
    align-itmes: center;

    margin: 0px auto;

    h1{
        color: darkslateblue;
    }
`
const MyWeek = styled.div`
    width: 300px;
    margin: 0 auto;
`
const MyDays = styled.div`
    font-size: 1.5em;

    display: flex;
    flex-direction: row;

    padding: 15px;
    .circle{
        width : 30px;
        height : 30px;
        border-radius: 50%;
        background-color: pink;

        float: left;
        margin: 0px 5px;
    }
    .triangle {
        width: 0px;
        height: 0px;
        border-left: 32px solid red;
        border-top: 16px solid transparent;
        border-bottom: 16px solid transparent;
        float: left;
        margin: 0px 5px;
    }
`

export default WeeklyScore;