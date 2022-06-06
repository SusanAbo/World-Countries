import React from 'react'

export default function Home() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    const day = weekday[d.getDay()];

    const today = new Date();

    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+ today.getFullYear()


  return (
     
        <div className='home-items'>
            <img className ="card" src='/World-Flag-map.jpg' alt='map'/>
            <br/>
            <div className ="card">
                <div className ="card-header p-3">⏰ Time Now : <b className='border p-1 text-primary'>{time}</b>  <br/>Your current TimeZone : <b className='p-1 text-primary'>{timezone}</b></div>
                    <div className="card-body">
                        <h5 className="card-title">Weather Now :</h5>
                        <p className="card-text weather"> ☁ ☀ ☁ </p>
                        <p>📅 Today is : <b className='p-1 text-primary'>{day} , {date}</b></p>
                       
                    </div>
            </div>
        </div>
    )
}
