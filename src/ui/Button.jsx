import { Link } from "react-router-dom";

function Button({children, disabled, to, type }) {
  
 

  const base = "bg-yellow-400 font-semibold uppercase text-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed "
    
  const style = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "py-2 px-4  md:px-6 md:py-2.5 text-xs"
  }

 if(to)
  return <Link to={to} className={style[type]}>{children}</Link>

  return (
    <button disabled={disabled} className={style[type]}>{children}</button>
  )
}

export default Button;