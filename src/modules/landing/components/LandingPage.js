import React from 'react'
import { Outlet } from 'react-router'
import { connect } from "react-redux";
import "./LandingPage.css"
function LandingPage(props) {
    console.log(props)
  return (
    <aside className={`landing_page ${props?.theme}`} theme-demo={"dark"}>
        <Outlet/>
    </aside>
  )
}
const MapStateToProps = (store)=>({
    theme:store?.themeState?.themeType
})
export default connect(MapStateToProps)(LandingPage)