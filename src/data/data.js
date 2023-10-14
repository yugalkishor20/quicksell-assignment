import {AiOutlineDash} from 'react-icons/ai'
import {BsExclamationSquareFill,BsFillCheckCircleFill} from 'react-icons/bs'
import {PiCellSignalLowFill,PiCellSignalMediumFill,PiCellSignalHighFill} from 'react-icons/pi'
import {ImCancelCircle} from 'react-icons/im'
import {RxHalf2} from 'react-icons/rx'
import {TbCircleDotted} from 'react-icons/tb'
import {MdOutlineCircle} from 'react-icons/md'


export const priorityArr=[
    
    {
        value:4,
        name:"Urgent",
        icon:(<BsExclamationSquareFill/>),
        color:"orangered"
    },
    {
        value:3,
        name:"High",
        icon:(<PiCellSignalHighFill style={{color:"gray"}}/>)
    },
    {
        value:2,
        name:"Medium",
        icon:(<PiCellSignalMediumFill style={{color:"gray"}}/>)
    },
    {
        value:1,
        name:"Low",
        icon:(<PiCellSignalLowFill style={{color:"gray"}}/>)
    },
    {
        value:0,
        name:"No Priority",
        icon:(<AiOutlineDash style={{color:"gray"}}/>)
    }
];

export const statusArr=[
    {
        name:"Backlog",
        icon:(<MdOutlineCircle style={{color:"gray"}}/>)
    },
    {
        name:"Todo",
        icon:(<TbCircleDotted style={{color:"gray"}}/>)
    },
    {
        name:"In progress",
        icon:(<RxHalf2 style={{color:"orange"}}/>)
    },
    {
        name:"Done",
        icon:(<BsFillCheckCircleFill style={{color:"blue"}}/>)
    },
    {
        name:"Canceled",
        icon:(<ImCancelCircle style={{color:"gray"}}/>)
    },
]