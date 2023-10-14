import React from 'react'
import {useSearchParams} from 'react-router-dom';
import Card from './Card';
import UserLogo from './UserLogo';
import Title from './Title';

const UserGroup = ({users,tickets}) => {
  const [searchParams] = useSearchParams();
  const order= searchParams.get('order');
    
  return (
    <div className='group'>
    {users.map(({id,name,available}) => {
      const ticket=tickets.filter(record => record.userId === id );
      order==="title"?ticket.sort((a,b) => a.title.localeCompare(b.title)):ticket.sort((a, b) => b.priority - a.priority);
      
      const count= ticket.length;
      const logo= (<UserLogo name={name} available={available}/>);
      return (
        <div key={id} className='slate'>
          <div>
            <Title logo={logo} name={name} count={count} logoStyle={{scale:".7"}}/>
          </div>
        {ticket.map((items) => (
          <Card key={items.id} id={items.id} title={items.title} tag={items.tag} status={items.status} priority={items.priority} users={users} />
        ))}
      </div>
      );
  })}
  </div>
  )
}

export default UserGroup