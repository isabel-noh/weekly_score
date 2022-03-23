import React from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'


const Daily = (props) => {
    const my_day = useParams();

    const [score, setScore] = React.useState(0)

    // const clickEvent = () => {
    //     score.current.style.backgroundColor = "yellow";
    // }

    // React.useEffect(() => {
    //     score.current.addEventListener("click", clickEvent);
    //     return score.current.removeEventListener("click", clickEvent);
    // }, [score])

    React.useEffect(() => {
        console.log(score)
    })
    
    //React.useEffect(() => {}, []); 1.먼저 화살표 함수를 실행한다. > 리랜더링 > 화살표 함수를 재실행하기 전에 배열(dependancy Array)안에 바뀐 값이 있는지 확인하고, 바뀐 값이 있을 때에만 화살표 함수 실행한다.
    //dependancy Array가 없을 경우 componentDidMount처럼 역할을 수행한다


    return (
        <MyWrap>
            <h1 style={{margin: "40px auto"}}>
                <DateWrap>{`${my_day.day}`}요일</DateWrap> 평점 남기기  {/* App.js의 <Route path="/daily/:day" >에서 day에 해당하는 값을 useParams로 받아와서 my_day에서 받아서 거기의 day를 사용함 */}
            </h1>
            <div>
                {/* {daily_score.map((n, i) => {
                        return (
                            <div key={i} className='circle'></div>
                        )
                    })} */}
                {Array.from({length: 5}, (v, i) => { //길이가 5인 배열을 만들고 각 값을 돌면서 아래 component를 리턴함
                    return(
                        <Circle 
                            key={i}  //key는 index
                            onClick={() =>{  // onClick={() => {}}
                                setScore(i + 1) //3번째 원을 누르면 (index=2) score이 3으로 바뀜
                            }} 
                            style ={{backgroundColor: score < i + 1 ? "#eee" : "#ff9797"}}></Circle> //선택한 i+1번째 원이 선택한 score값보다 크면 회색, 작으면 분홍색 (즉, 3번 선택, 4번 5번 원은 회색)
                    )
                })}
                {/* onClick하면 숫자를 해당 index를 ref로 보내서 ref만큼 색칠하고 5-ref만큼 회색으로  */}
                {/* <Circle ref={score} val={2}>2</Circle><Circle ref={score} val={3}>3</Circle><Circle ref={score} val={4}>4</Circle><Circle ref={score} val={5}>5</Circle> */}
            </div>
            <div>
                <Link to="/"><LinkBtn>평점 남기기</LinkBtn></Link>
            </div>
            
        </MyWrap>
    )
}
const DateWrap = styled.span`
    background-color :#f55354;
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
    width: 300px;
    margin: 30px auto;
    padding: 50px 0 150px 0;
    border: 1px solid lightgrey;
    border-radius: 10px;

`
const Circle = styled.div`

    width : 30px;
    height : 30px;
    border-radius: 50%;

    float: left;
    margin: 0px 5px;
`
const LinkBtn = styled.button`
    margin-top: 40px;
    width: 200px;
    height: 40px;
    border: transparent;
    border-radius: 5px;
    background-color: #ffcbcb;
    color: black;
`
export default Daily