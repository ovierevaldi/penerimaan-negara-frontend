require('./dashboard.css');

import Sidebar from "./../common/sidebar/sidebar";
import Header from "./../common/header/header";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return(
        <div className="d-flex">
              <Sidebar></Sidebar>
              <div className="dashboard-layout">
                <Header></Header>
                {children}
              </div>
          </div> 
    )
}