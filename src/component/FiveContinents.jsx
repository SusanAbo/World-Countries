import React, { Component } from 'react'
import {Link} from 'react-router-dom'


const FiveContinents = ()=>{
  let continents = [
    {conName :'Africa', img:'imges/africa.jpg', 
      id:'01', url:'/continent/Africa' },
    {conName :'The Americas' , img:'imges/north-america.jpg', 
      id:'02', url:'/continent/Americas' },
    {conName :'Asia', img:'imges/asia.jpg', 
      id:'03', url:'/continent/Asia'},
    {conName :'Europe', img:'imges/Europe.jpg', 
      id:'04', url:'/continent/Europe'},
    {conName :'Oceania', img:'imges/Oceania.jpg', 
      id:'05', url:'/continent/Oceania' }
  ]

  return(
    <div className='five-cons'>
      {continents.map(con=>{
        return(
          <div className="card" key={con.id}>
            <img src={con.img} className="card-img-top" alt="card-img-top"/>
            <div className="card-body">
                <h3 className="card-title text-danger">{con.conName}</h3>
                     <Link to={con.url}><button class="btn btn-outline-warning"><small className="text-dark">Check Lands</small></button></Link>
            </div>
          </div>
      
        )
      })}
    </div>
  )
}

export default FiveContinents
 