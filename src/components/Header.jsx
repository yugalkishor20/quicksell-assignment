import React ,{ useState} from 'react'
import {useSearchParams,useLocation,useNavigate} from 'react-router-dom';
import {MdOutlineTune} from 'react-icons/md'
import {BsChevronDown} from 'react-icons/bs'
import {GrFormClose} from 'react-icons/gr'

const Header = () => {
  const location= useLocation();
  const [searchParams, setSearchParams] = useSearchParams({order:'priority'});
  const [group, setGroup] = useState(location.pathname.slice(1));
  const [order, setOrder] = useState(searchParams.get('order'));
  const [box,setBox]=useState(false);

  const boxStyle= box?"":"box-hidden";
  
  const navigate = useNavigate();
  
  

  const displayData={
    grouping:["status","user","priority"],
    ordering:["priority","title"]
  }

  const onGroupingChange = (event) => {
    setGroup(event.target.value);
    navigate("/"+event.target.value+"?order="+order);
    console.log(
        "Group - ",
        event.target.value
    );
  };

  const onOrderingChange = (event) => {
    setOrder(event.target.value);
    setSearchParams({order: event.target.value});
    console.log(
        "Order - ",
        event.target.value
    );
  };

  return (
    <div className={'header '+boxStyle}>
      <div className='dptitle' >
        <div className='display' onClick={()=>setBox(dp=>!dp)}>
            <MdOutlineTune/>
            <div style={{paddingLeft:"5px",paddingRight:"5px"}}>Display</div>
            <BsChevronDown size={12}/>
        </div>
      </div>
       
      <div className="display-box">
        <div className='close' onClick={()=>setBox(false)}><GrFormClose/></div>
       <div className='flex-row'>
          <div>Grouping</div>
          <select className='select' defaultValue={group} onChange={onGroupingChange}>
                {displayData.grouping.map((option, index) => {
                    return (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    );
                })}
          </select>
       </div>

       <div className='flex-row'>
          <div>Ordering</div>
          <select className='select' defaultValue={order} onChange={onOrderingChange}>
                {displayData.ordering.map((option, index) => {
                    return (
                        <option key={index} value={option} >
                            {option}
                        </option>
                    );
                })}
          </select>
        </div>
      </div> 
      
     
    </div>
  )
}

export default Header