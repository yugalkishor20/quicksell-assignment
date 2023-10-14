import React from 'react'

const UserLogo = ({name,available}) => {

const splitName = name.split(" ");
const first = splitName[0].charAt(0);
const second = splitName.length > 1 ? splitName[1].charAt(0) : "";
const logoContent=first+second;

const status = available?'green':'gray';


  return (
    <div>
        <div className='userLogo'>
            <div className='logo'>
                {logoContent}
            </div>
            <div id='available' className={status}> </div>
        </div>
    </div>
  )
}

export default UserLogo