// import React from 'react'

// function Navbar() {
//   return (
//     <>
//     <nav className="bg-gray-700">
//   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//     <div className="relative flex h-16 items-center justify-between">
//       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
       
//         <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//           <span className="absolute -inset-0.5"></span>
//           <span className="sr-only">Open main menu</span>
          
//           <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//           </svg>
          
//           <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </div>
//       <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//         <div className="flex shrink-0 items-center">
//           {/* <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=emerald&shade=400" alt="Yours"/> */}
//           <img className="h-8 w-auto" src="https://img.favpng.com/10/10/15/thumb-signal-computer-icons-gesture-ok-png-favpng-85GPYNBnc1bnBBEHb4r2NF9uj.jpg" alt="Yours"/>
//         </div>
//         <div className="hidden sm:ml-6 sm:block">
//           <div className="flex space-x-4">

//           <a href="/signin" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Signin</a>
//             <a href="/task" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Task</a>
//             <a href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
//             <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Logout</a>
//           </div>
//         </div>
//       </div>
//       <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//         <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//           <span className="absolute -inset-1.5"></span>
//           <span className="sr-only">View notifications</span>

//           <span className="sr-only">Toggle theme</span>
//           {/* <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.36 18.36l1.06 1.06M3 12h1.5M19. 5 12h1.5M4.22 19.78l1.06-1.06M18.36 5.64l1.06-1.06M12 12a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
//                 </svg> */}
//             <i className="fa-solid fa-thumbs-up size-6"></i>
//         </button>

//         <div className="relative ml-3">
//           <div>
//             <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
//               <span className="absolute -inset-1.5"></span>
//               <span className="sr-only">Open user menu</span>
//               <img className="size-8 rounded-full" src="https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Smiling_large.png?v=1571606089" alt=""/>
//             </button>
//           </div>

//           {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
//           </div> */}

//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="sm:hidden" id="mobile-menu">
//     <div className="space-y-1 px-2 pb-3 pt-2">
//       <a href="/signin" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Signin</a>
//       <a href="/task" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Task</a>
//       <a href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
//       <a href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Logout</a>
//     </div>
//   </div>
// </nav>
//     </>
//   )
// }

// export default Navbar

//-----------------------------------------------------------------------

import React, { useState, useEffect } from 'react';

function Navbar() {
  // Track the theme (default is light mode)
  const [isDark, setIsDark] = useState(false);

  // Toggle the theme
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Store theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Update theme in localStorage and apply the body class
    if (isDark) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
      <nav className={`bg-gray-700 ${isDark ? 'dark:bg-gray-800' : 'bg-stone-100'}`}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="h-8 w-auto" src="https://img.favpng.com/10/10/15/thumb-signal-computer-icons-gesture-ok-png-favpng-85GPYNBnc1bnBBEHb4r2NF9uj.jpg" alt="Yours" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="/signin" className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-white">Signin</a>
                  <a href="/task" className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-white">Task</a>
                  <a href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-white">About</a>
                  <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-white">Logout</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={toggleTheme} // Toggle theme on button click
              >
                <span className="sr-only">Toggle theme</span>
                {/* Theme toggle icon */}
                <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} size-6`}></i>
                </button>
              <img className="size-8 rounded-full" src="https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Smiling_large.png?v=1571606089" alt=""/>
              
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="/signin" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Signin</a>
            <a href="/task" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Task</a>
            <a href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
            <a href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Logout</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
