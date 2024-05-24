import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from './../utils/AuthProvider';
import { useEffect, useRef } from "react";
import gsap from "gsap";

function usePrev(val){
  const ref = useRef(location);
  useEffect(()=>{
    ref.current = val;
  })
  return ref.current;
}

function NavBar() {
const { isLoggedIn, logout } = useAuth();
const navigate = useNavigate();
const location = useLocation()
const prev = usePrev(location);
useEffect(() => {
  if(prev.pathname==location.pathname)
  return;
if(location.pathname.includes('product') && prev.pathname.includes('product'))
  gsap.fromTo(".level2", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
else
  gsap.fromTo(".level1", { opacity: 0, x: 50 }, { opacity: 1, x: 0 });
}, [location]);
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <h1 className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <Link to="/">Home</Link>
          </h1>
          <h1 className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <Link to="/product">Product</Link>
          </h1>
          <ul className="nav nav-pills">
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button onClick={()=>{logout();navigate('/')}} className="nav-link">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </header>
      </div>
    </>
  );
}

export default NavBar;
