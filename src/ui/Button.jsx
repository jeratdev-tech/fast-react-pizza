import { Link } from "react-router-dom";

function Button({children, disabled, to, type }) {
  
 

  const base = "bg-yellow-400 font-semibold text-sm uppercase text-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed "
    
  const style = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "py-2 px-4  md:px-6 md:py-2.5 text-xs",
    secondary: "border-2 border-stone-300 text-sm font-semibold uppercase text-semibold text-stone-400  inline-block tracking-wide rounded-full  transition-colors duration-300 hover:text-stone-800 hover:bg-stone-700 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 "
  }

 if(to)
  return <Link to={to} className={style[type]}>{children}</Link>

  return (
    <button disabled={disabled} className={style[type]}>{children}</button>
  )
}

export default Button;