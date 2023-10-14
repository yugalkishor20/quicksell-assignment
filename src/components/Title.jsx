import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'

const Title = ({logo,name,count,logoStyle}) => {
  return (
    <div className='title'>
        <div className='flex-row' style={{alignItems:"baseline"}}>
            <div style={logoStyle}>{logo}</div>
            <div style={{marginLeft:"10px", marginRight:"10px", color:"black"}}>{name}</div>
            <div>{count}</div>
        </div>
        <div>   
            <AiOutlinePlus style={{marginRight:"10px", color:"gray", alignContent:"center"}}/>
            <BsThreeDots style={{color:"gray"}}/>
        </div>
    </div>
  )
}

export default Title