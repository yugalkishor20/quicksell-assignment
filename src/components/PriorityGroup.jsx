import React from 'react'
import {useSearchParams} from 'react-router-dom';
import Card from './Card';
import { priorityArr } from '../data/data'
import Title from './Title';

const PriorityGroup = ({users,tickets}) => {
  const [searchParams] = useSearchParams();
  const order= searchParams.get('order');
    
  return (
    <div className='group'>
    {priorityArr.map(({value,name,icon,color}) => {
      const ticket=tickets.filter(record => record.priority === value );
      order==="title"?ticket.sort((a,b) => a.title.localeCompare(b.title)):ticket.sort((a, b) => b.priority - a.priority);

      const count= ticket.length;
      const logo= (<span style={{color:color}}>{icon}</span>);
      return (
        <div key={value} className='slate'>
          <div>
            <Title logo={logo} name={name} count={count}/>
          </div>
          {ticket.map((items) => (
            <Card key={items.id} id={items.id} title={items.title} tag={items.tag} userId={items.userId} status={items.status} users={users} />
          ))}
        </div>
        );
      })}
      </div>
  )
}

export default PriorityGroup