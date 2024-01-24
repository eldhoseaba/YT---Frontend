import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { toggleSideBar } from "../../../../../redux/features/reducers/sidebarSlice";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../../../redux/app/store";
import { useNavigate } from "react-router-dom";
// import { deleteUserTokenAndUserData } from "../../../../../redux/features/reducers/userAuthSlice";

// import logo from "../../../../../logo/netwave-blue.png";

const TopNavBar= () => {
  const [menuvisible, setMenuvisible] = useState(false);
  const [profilevisible, setProfilevisible] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    console.log(menuvisible);

    setMenuvisible(!menuvisible);
    setProfilevisible(false);
  };

  const profileMenu = () => {
    console.log(profileMenu);
    setProfilevisible(!profilevisible);
    setMenuvisible(false);
  };

  const dispatch = useDispatch();

  const handleSideBar = () => {
    // dispatch(toggleSideBar());
  };
  const userSignOut = () => {
    console.log("userSignOut ----------------");
    dispatch(deleteUserTokenAndUserData());
    navigate("/login");
  };

  // const { user }: any = useSelector((state: RootState) => state.userAuth);

  // console.log(user, "userdata in nav bar ");

  // console.log(user?.userdata?.firstName);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100  focus:ring-gray-100 "
              onClick={handleSideBar}
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
            {/* <a
              href="https://flowbite.com"
              className="flex items-center justify-between mr-4"
            >
              <img
                src="https://flowbite.s3.amazonaws.com/logo.svg"
                className="mr-3 h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Flowbite
              </span>
            </a> */}
            <img src={logo} alt="" className="w-auto h-10" />
            <form action="#" method="GET" className="hidden md:block md:pl-2">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative md:w-64 md:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 "
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              type="button"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100  focus:ring-4 focus:ring-gray-300"
              onClick={handleSideBar}
            >
              <span className="sr-only">Toggle search</span>
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                ></path>
              </svg>
            </button>
            {/* <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100  focus:ring-4 focus:ring-gray-300"
            >
              <span className="sr-only">View notifications</span>
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
            </button> */}

            <button
              type="button"
              data-dropdown-toggle="apps-dropdown"
              className="relative  p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300"
              onClick={toggleMenu}
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </button>
            {menuvisible && (
              <ul className="menu-list absolute right-0 top-10">
                <div
                  className=" w-96 h-96 overflow-hidden z-auto my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg rounded-xl"
                  id="apps-dropdown"
                >
                  <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 ">
                    Apps
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <button className="block p-4 text-center rounded-lg hover:bg-gray-100  group">
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>

                      <div className="text-sm text-gray-900 ">Sales</div>
                    </button>
                    <a
                      href="#"
                      className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                    >
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                      <div className="text-sm text-gray-900 ">Users</div>
                    </a>
                    <a
                      href="#"
                      className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                    >
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="text-sm text-gray-900 ">Inbox</div>
                    </a>
                    <a
                      href="#"
                      className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                    >
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="text-sm text-gray-900 ">Profile</div>
                    </a>
                    <a
                      href="#"
                      className="block p-4 text-center rounded-lg hover:bg-gray-100 "
                    >
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="text-sm text-gray-900 ">Settings</div>
                    </a>
                    <a
                      href="#"
                      className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                    >
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="text-sm text-gray-900 ">Products</div>
                    </a>
                    <a
                      href="#"
                      className="block p-4 text-center rounded-lg hover:bg-gray-100 "
                    >
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="text-sm text-gray-900">Pricing</div>
                    </a>
                    <a
                      href="#"
                      className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                    >
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="text-sm text-gray-900 ">Billing</div>
                    </a>
                    <a
                      href="#"
                      className="block p-4 text-center rounded-lg hover:bg-gray-100  group"
                    >
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>
                      <div className="text-sm text-gray-900 ">Logout</div>
                    </a>
                  </div>
                </div>
              </ul>
            )}

            <button
              type="button"
              className="relative  flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
              onClick={profileMenu}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </button>

            {profilevisible && (
              <ul className="menu-list absolute right-0 top-10">
                <div
                  className="z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow  rounded-xl"
                  id="dropdown"
                >
                  <div className="py-3 px-4">
                    <span className="block text-sm font-semibold text-gray-900 ">
                      {/* Neil Sims */}
                      {user?.userdata?.firstName}
                    </span>
                    <span className="block text-sm text-gray-900 truncate ">
                      {/* name@flowbite.com */}
                      {user?.userdata?.email}
                    </span>
                  </div>
                  <ul className="py-1 text-gray-700" aria-labelledby="dropdown">
                    <li>
                      <a
                        //   href="#"
                        className="block py-2 px-4 text-sm hover:bg-gray-100 "
                      >
                        My profile
                      </a>
                    </li>
                    <li>
                      <a
                        //   href="#"
                        className="block py-2 px-4 text-sm hover:bg-gray-100 "
                      >
                        Account settings
                      </a>
                    </li>
                  </ul>
                  <ul className="py-1 text-gray-700" aria-labelledby="dropdown">
                    <li>
                      <a
                        href="#"
                        className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 "
                      >
                        <svg
                          className="mr-2 w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        My likes
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center py-2 px-4 text-sm hover:bg-gray-100"
                      >
                        <svg
                          className="mr-2 w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                        </svg>
                        Collections
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100"
                      >
                        <span className="flex items-center">
                          <svg
                            aria-hidden="true"
                            className="mr-2 w-5 h-5 text-primary-600 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          Pro version
                        </span>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <ul
                    className="py-1 text-gray-700 "
                    aria-labelledby="dropdown"
                  >
                    {/* <button
                    className="block py-2 px-4 text-sm hover:bg-gray-100 "
                    onClick={userSignOut}>Sign out</button> */}
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 text-sm hover:bg-gray-100 "
                      >
                        {/* Sign out */}
                        <button
                          className="block py-2 px-4 text-sm hover:bg-gray-100 "
                          onClick={userSignOut}
                        >
                          Sign out
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNavBar;
