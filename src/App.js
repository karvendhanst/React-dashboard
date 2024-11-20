import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App(){
  return(
    <>
      <Sidebar/>
      <Main/>
    </>
  )
}
export default App;