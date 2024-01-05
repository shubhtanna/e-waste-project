import Link from 'next/link'
import {BiSearch, BiHomeAlt} from 'react-icons/bi'

const Navbar = () => {
    return(
        <div className='flex justify-between items-center py-3 px-1 bg-[#CFE8DD]'>
            <div>
                <Link href="/">
                    <p className='logo text-black font-inter text-2xl font-normal leading-normal ml-10'>My logo</p>
                </Link>
            </div>

            <nav className='nav-items flex'>
                <ul className='navbar-ul flex gap-16 items-center mr-14'>
                    <li className='search w-3.5 h-1.5 shrink-0'>
                        <BiSearch/>
                    </li>

                    <li className='home w-3.5 h-1.5 shrink-0'>
                        <BiHomeAlt/>
                    </li>

                   <li className='about text-green-900 font-inter text-base font-bold'>
                        <Link href="#">
                            <p>About Us</p>
                        </Link>
                   </li>
                   

                   <li className='categories text-green-900 font-inter text-base font-bold'>
                        <Link href="#">
                            <p>Categories</p>
                        </Link>
                   </li>
                   </ul>
                   

                
                   <ul className='flex gap-10'>
                   <li>
                    <Link href='#'>
                        <button className='login-btn px-10 py-5 rounded-2xl border border-solid border-green-900 bg-green-900/10 text-green-900 font-semibold flex justify-center m-1'>
                            Log In
                        </button>
                    </Link>
                   </li>

                   <li>
                    <Link href='#'>
                        <button  className='signin-btn px-10 py-5 rounded-2xl border border-solid border-green-900 bg-green-900/10 text-green-900 font-semibold flex justify-center m-1 mr-10'>
                            Sing Up
                        </button>
                    </Link>
                   </li>


                </ul>
                
                </nav>
            
    
        </div>
    )
}

export default Navbar