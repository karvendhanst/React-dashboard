import React from 'react'
import profileimg from '../../assests/images/profile.png'

function Sidebar(){
    return(
        <div className='sidebar'>
            <div className='sidebar_img'>
                <img src={profileimg}/>
            </div>
            <div className='sidebar_content'>
                <p><b>D.O.C</b>: 28.04.2023</p>
                <p><b>Status</b>: Complete</p>
                <button>Back Home</button>
            </div>
        </div>
    )
}
export default Sidebar