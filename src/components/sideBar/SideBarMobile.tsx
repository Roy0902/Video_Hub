import Link from "next/link";
import { sideBarItems } from "@/constants/constants";

import { MdOutlineMenu } from "react-icons/md";

const SideBarMobile: React.FC = () =>{
    return(
        <nav className= {`fixed h-full w-20 shadow-xl bg-black`}>
          <div className='px-4 py-4 flex justify-between items-center'>
            <MdOutlineMenu size={35} className={`duration-500 cursor-pointer}`}/>
          </div>
            <ul>
                {sideBarItems.map((item) => { 
                    return (<li key = {item.title} className='px-4 py-4 hover:bg-blue-900 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group tooltip'>
                                <Link href={item.route} className="flex w-full h-full py-2 items-center">
                                    <div className="w-16">
                                        {item.icon}                                  
                                    </div> 
                                    <p className={`tooltiptext`}>{item.title}</p>        
                                </Link>
                            </li>)
                })}
            </ul>
         </nav>
    )
}

export default SideBarMobile;