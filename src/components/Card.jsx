import React from 'react'
import {BsFillCircleFill} from 'react-icons/bs'
import UserLogo from './UserLogo';
import {priorityArr,statusArr} from '../data/data'


const Card = ({id,title,tag,userId,status,priority,users}) => {

  const findUser= userId?users.find( record => record.id === userId):null;
  const findPriority= priority?priorityArr.find(record => record.value === priority ):null;
  const findStatus= status?statusArr.find(record => record.name === status ):null;
  return (
    <div className='card' >
      <div className='flex-row cardhead'>
        <div>{id}</div>
        <div style={{scale:"0.7"}}>{findUser?<UserLogo name={findUser.name} available={findUser.available}/>:""}</div>
      </div>
      <div className='flex-row'>
        {findStatus?(<div className='cardStatus'>{findStatus.icon}</div>):""}
        <div className='cardTitle'>{title}</div>
      </div>
      <div className='flex-row priorityTag'>
       {findPriority?(<div className="cardPriority">{findPriority.icon}</div>):""}
        <div className='cardTag'><BsFillCircleFill style={{color:'#c5c5c5', paddingRight:"10px"}} size={10}/> {tag}</div>
      </div>
    </div>
  )
}

export default Card