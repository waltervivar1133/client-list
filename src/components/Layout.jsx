import React from "react";


const Layout = ({ children }) => {
  return (
    
      <main className="w-full mx-auto bg-gray-900 h-full px-4 md:px-0">
        {children}
      </main>
    
  );
};

export default Layout;
