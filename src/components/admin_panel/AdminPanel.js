import React from "react";
import Header from "./AdminHeader";

const AdminPanel = () => {
  return (
    <div>
      <Header/>
      <div className="admin-content">
        Admin Panel Content Here
      </div>
    </div>
  );
};

export default AdminPanel;
