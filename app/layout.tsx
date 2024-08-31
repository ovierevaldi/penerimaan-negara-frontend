import  "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from "./common/sidebar/sidebar";
import Header from "./common/header/header";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <title>Penerimaan Negara</title>
        <body>
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
        </body>
      </html>
    )
  }