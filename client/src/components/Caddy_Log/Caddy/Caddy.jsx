import React, { useState } from 'react'
import style from "./caddy.module.css"
import Pillsremaining from '../Pills_Remaining/Pills_remaining'
import Pillstaken from '../Pills_Taken/Pills_taken'
import Popup_addpill from '../Popup_addpill/Popup_addpill'
import Remain_popup from '../Popup_showpill/Remain_popup/Remain_popup'
import Taken_popup from '../Popup_showpill/Taken_popup/Taken_popup'

// import homeIconInactive from "../../Footer/homeimginactive.svg";
// import groupIconInactive from "../../Footer/groupimginactive.svg";
// import caddyIconActive from "../../Footer/VectorTab1.svg";


function Caddy ()
{

    const [neww,setnew]=useState(0);
   

   

function add(count){
setnew(count)
}

    const [btnpop,setbtnpopup]=useState(false)

    const [remainingpop,setremainingpop]=useState(false)

    const [takenpop,settakenpop]=useState(false)
    

    return (
        <div className={style.body}>
            {/* <Headerr /> */}
            <div className={style.caddy}>

                <div className={style.top}>
                    <div className={style.caddylog}>My Caddy Log</div>

                    <div className={style.in}><button onClick={()=>{
                        setbtnpopup(true)
                    }} className={style.pills}>Add Pills</button></div>

                </div >
                <div className={style.line}></div>



                <Pillsremaining setremain={setremainingpop} add={add} />
            
                <div className={style.wrapper}>
                    <Pillstaken settake={settakenpop} neww={neww}/>

                </div>
            </div>
            {/* <Footerr /> */}
            <Popup_addpill setbtn={setbtnpopup} btn={btnpop} >

</Popup_addpill>

<Remain_popup remainpop={remainingpop} setremainpop={setremainingpop}>

</Remain_popup>

<Taken_popup takepop={takenpop} settakepop={settakenpop}>

</Taken_popup>
        </div >

    )
}

// export default Caddy
export { Caddy }
