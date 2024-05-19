import { Link } from 'react-router-dom'
import logo from '/src/assets/logo.png'
export default function Navbar() {
 
    return (
        <>
          <nav className="nav-bar">
            <img src={logo} alt="logo-image" className='logo'/>
            <ul className="navbar-items">
            <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </ul>
            
          </nav>
        </>
    )
}

// function CustomLink({ to, children , ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch( { path: resolvedPath.pathname, end: true} )
//   return (
//     <>
//       <li>
//         <Link to={to} {...props} className={isActive ? "active" : ""}>
//           {children}
//           </Link>
//       </li>
//     </>
//   )
// }

