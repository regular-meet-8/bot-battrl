import React from "react";
import '../stylesheets/YourBotArmy.css';

import MyBotCard from "./MyBotCard";


function YourBotArmy({myBots,removeMyBot}){

    

    const botsList = myBots?.map((bot)=>{
        return(
            <MyBotCard
            key={`botsList`+bot.id}
            bot={bot}
            removeMyBot={removeMyBot}
            />
        )
    })

    return(
        <div id="my-list" className="container mt-4" >
            <h2>Bot Army</h2>
            <div className="scroll-images d-flex flex-row flex-nowrap row"
            // onWheel={(e)=>{
            //     // e.preventDefault();
            //     e.stopPropagation();
            //     console.log(e.target)
            //     e.target.scrollLeft += e.deltaY;
            // }}
            >
                {botsList}
            </div>
        </div>
    )
}

export default YourBotArmy