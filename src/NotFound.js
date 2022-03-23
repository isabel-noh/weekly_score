import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = (props) => {
    return (
        <div style={{textAlign: "center"}}>
            <h1> NOT FOUND </h1>
            <h2>주소가 올바르지 않습니다. </h2>
            <Link to="/"><button style={{width: "150px", height: "30px", color: "white", backgroundColor: "darkred", borderRadius: "10px", border: "transparent"}}>홈으로 돌아가기</button></Link>
        </div>
        
    )
}

export default NotFound;