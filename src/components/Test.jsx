import React, { useState, useEffect } from 'react';
import {Routes, Route} from "react-router-dom";
import PriorityGroup from './PriorityGroup';
import StatusGroup from './StatusGroup';
import UserGroup from './UserGroup';
import Header from './Header'

function DataFetchingComponent() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setTickets(jsonData.tickets);
      setUsers(jsonData.users);
      setLoading(false);

    } catch (error) {
      console.error('error occured while fetching :', error);
      setLoading(false);
      
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{paddingTop:"45px"}}>
      <Routes>
        <Route path="/">
          <Route index element={<StatusGroup users={users} tickets={tickets}/>} />
          <Route path="status" element={<StatusGroup users={users} tickets={tickets}/>} />
          <Route path="user" element={<UserGroup users={users} tickets={tickets}/>} />
          <Route path="priority" element={<PriorityGroup users={users} tickets={tickets}/>} />
        </Route>
      </Routes>
      <Header/>
    </div>
  );
}

export default DataFetchingComponent;
