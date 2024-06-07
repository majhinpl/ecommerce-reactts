import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [isLogin, setIslogin] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIslogin(!!token || !!user);
  }, [user.token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIslogin(false);
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-wrap place-items-center shadow-md mb-4 sticky top-2 bg-slate-300 z-50 rounded-full">
        <section className="relative mx-auto">
          <nav className="flex justify-betwee w-screen">
            <div className="px-5 xl:px-12 py-2 flex w-full items-center">
              <Link className="text-xl font-bold font-heading flex" to="/">
                <img className="h-9" src="logo_e.png" alt="logo" />
                <span>ClickShipNpl</span>
              </Link>

              <div className="pt-2 relative mx-auto text-gray flex items-center">
                <input
                  className="border-[1px] border-gray-300 bg-white h-10 px-5 pr-10 rounded-3xl text-sm focus:outline-none w-full md:w-[600px] "
                  type="search"
                  name="search"
                  placeholder="Search your favorite items"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-5 mr-4"
                >
                  <img
                    src="/search.png"
                    alt="search icon"
                    width={24}
                    height={24}
                  />
                </button>
              </div>

              <div className="hidden xl:flex space-x-5 items-center">
                <Link className="hover:text-gray-200" to="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </Link>
                <a className="flex items-center hover:opacity-35" href="#">
                  <img
                    src="/shoppingCart.png"
                    alt="shopping cart"
                    className="h-6 w-6"
                  />
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>

                {!isLogin ? (
                  <>
                    <Link
                      className="flex items-center gap-2 hover:opacity-35"
                      to="/login"
                    >
                      <img src="/user.png" alt="" className="h-6 w-6" />
                      <span>Log in</span>
                    </Link>

                    <Link
                      className="flex items-center gap-2 hover:opacity-35"
                      to="/register"
                    >
                      <img src="/addUser.png" alt="" className="h-6 w-6" />
                      <span>Sign up</span>
                    </Link>
                  </>
                ) : (
                  <button
                    className="border-none"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>

            <Link className="xl:hidden flex mr-6 items-center" to="#">
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </Link>
            <Link to="/" className="navbar-burger self-center mr-12 xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Link>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Navbar;
