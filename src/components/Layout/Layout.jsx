import React from "react";

function Layout({ children }) {
  return (
    <div className="container">
      <h1>Contacts App</h1>
      <div className="contacts-box">
        <div className="contacts-container">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
