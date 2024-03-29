import { useEffect, useState } from 'react'
import { styles } from '../styles.js'
import { Link } from 'react-router-dom'
import { close, logo, menu } from '../assets/index.js'
import { navLinks } from '../constants/index.js'
const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(true)
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolling(scrollPosition > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`${styles.paddingX} ${scrolling ? 'backdrop-blur-md bg-[#151030aaa]': ''} w-full flex items-center py-5 fixed top-0 z-20`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className='flex items-center gap-2' onClick={()=>{
          setActive("");
          window.scrollTo(0,0)
        }}>
          <img loading="lazy"src={logo} alt='logo' className='w-16 h-16 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Dalia &nbsp;<span className='sm:block hidden'>| &nbsp;Software Engineer</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map((link,index)=>
              <li key={index}>
                <a className={`${active === link.title? "text-white":"text-secondary"} 
                hover:text-white text-[18px] font-medium cursor-pointer
                `} href={`#${link.id}`}>{link.title}</a>
              </li>
            )
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img loading="lazy"src={toggle? menu: close} alt="menu"
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=>setToggle(!toggle)}
          />
            <div className={`${toggle ? 'hidden': 'flex'} p-6 black-gradient absolute 
            top-20 right-0 mx-4 my-2
            min-w-[140px] z-10 rounded-xl` }>
              <ul className="list-none flex justify-end items-start flex-col gap-4">
          {
            navLinks.map((link,index)=>
              <li key={index}>
                <a className={`${active === link.title? "text-white":"text-secondary"} 
                font-poppins font-medium cursor-pointer text-[16px]
                `} onClick={()=>{
                  setToggle(!toggle)
                  setActive(link.title)
                }} href={`#${link.id}`}>{link.title}</a>
              </li>
            )
          }
        </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar