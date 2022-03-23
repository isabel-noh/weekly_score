import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Daily = (props) => {
    const my_day = useParams();
    console.log(my_day)

    const score = React.useRef(null);

    const clickEvent = () => {
        score.current.style.backgroundColor = "yellow";
    }

    React.useEffect(() => {
        score.current.addEventListener("click", clickEvent);
        
    }, [score])

    //React.useEffect(() => {}, []); 1.먼저 화살표 함수를 실행한다. > 리랜더링 > 화살표 함수를 재실행하기 전에 배열(dependancy Array)안에 바뀐 값이 있는지 확인하고, 바뀐 값이 있을 때에만 화살표 함수 실행한다.
    //dependancy Array가 없을 경우 componentDidMount처럼 역할을 수행한다

    return (
        <MyWrap>
            <h1 style={{margin: "40px auto"}}>
                <DateWrap>{`${my_day.day}`}요일</DateWrap>평점 남기기 {/* DateWrap: styled.span */}
            </h1>
            <div>
                <Circle ref={score} val={1}>1</Circle>
                {/* <Circle ref={score} val={2}>2</Circle><Circle ref={score} val={3}>3</Circle><Circle ref={score} val={4}>4</Circle><Circle ref={score} val={5}>5</Circle> */}
            </div>
            <div>
                <Link to="/"><LinkBtn>평점 남기기</LinkBtn></Link>
            </div>
            
        </MyWrap>
    )
}
const DateWrap = styled.span`
    background-color:orange;
    border-radius: 5px;
    color: white;
    padding: 2px 10px;
`
const MyWrap = styled.div`
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

`
const Circle = styled.div`

    width : 30px;
    height : 30px;
    border-radius: 50%;
    background-color: #eee;

    float: left;
    margin: 0px 5px;
`
const LinkBtn = styled.button`
    margin-top: 40px;
    width: 200px;
    height: 40px;
    border: transparent;
    border-radius: 5px;
    background-color: purple;
    color: white;
`
export default Daily