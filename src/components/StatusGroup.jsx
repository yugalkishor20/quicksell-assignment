import React from 'react'
import {useSearchParams} from 'react-router-dom';
import Card from './Card';
import { statusArr } from '../data/data'
import Title from './Title';

const StatusGroup = ({users,tickets}) => {
  const [searchParams] = useSearchParams();
  const order= searchParams.get('order');
    
  return (
    <div className='group'>
    {statusArr.map(({name,icon}) => {
      const ticket=tickets.filter(record => record.status === name );
      order==="title"?ticket.sort((a,b) => a.title.localeCompare(b.title)):ticket.sort((a, b) => b.priority - a.priority);

      const count= ticket.length;

      return (
        <div key={name} className='slate'> 
          <div>
            <Title logo={icon} name={name} count={count}/>
          </div>
        {ticket.map((items) => (
          <Card key={items.id} id={items.id} title={items.title} tag={items.tag} userId={items.userId} priority={items.priority} users={users} />
        ))}
      </div>
      );
  })}
  </div>
  )
}

export default StatusGroup