import Sidebar from "./../common/sidebar/sidebar";
import Header from "./../common/header/header";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return(
        <div className="d-flex">
              <div className="mw-25">
                  <Sidebar></Sidebar>
              </div>
              <div className="">
                <div className="my-4">
                  <Header></Header>
                </div>
                {children}
              </div>
          </div> 
    )
}