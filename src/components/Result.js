import React from "react";

export default function Result(props) {
    const boxes=props.movies.map(
        (item,index)=>{
            return <Box key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average}/>
        }
    )
    return ( 
        <div className="row row-cols-md-5 mx-0 bg-dark f-flex justify-content-between">
          {boxes}  
        </div>
     );
}
 const Box=(props)=>
 {
    const imgpath="https://image.tmdb.org/t/p/w1280";
    return (
        <div className="col border  m-2 shadow h-auto bg-light" >
        <img src={imgpath+props.image} className=" img-fluid h-75 w-100 "/>
         <div className=" d-flex justify-content-sm-between">
            <span className=" fw-bolder" style={{fontSize:"1vw"}}>
                {props.title}
            </span>
            <span style={{fontSize:"2vw"}}>{props.rating}</span>
         </div>
        </div>
    )
 }
