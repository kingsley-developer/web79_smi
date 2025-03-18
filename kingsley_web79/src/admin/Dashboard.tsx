import {memo, useState} from "react"
import SlidingPanel from "react-sliding-side-panel"
import axios from "axios"
import "../lib/imports.d.ts"
import Button from "react-bootstrap/Button"
import {NavLink, Outlet} from "react-router"
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import Right_scss from "../assets/AdminPanel.module.scss"

export default memo(function Dashboard() {
  const [imgState, setImgState] = useState("")
  
  return(
  <div>
    <SlidingPanel
              type={"right"}
              isOpen={true}
              panelContainerClassName={Right_scss.panel_con}
          panelClassName="text-center"
          size={28}
        >  
          <div className={""}>
              <ul className={Right_scss.panel_links}>
              <li>
                <NavLink to="." end className={({ isActive }) => isActive ? `fs-4 nav-link fw-bold px-2 text-primary` : `nav-link fw-bold px-2 fs-4 text-white`}>
                Dashboard<MdDashboard />
                </NavLink>
              </li>
            <li>
                <NavLink to="settings" end className={({ isActive }) => isActive ? `fs-4 nav-link fw-bold px-2 text-primary` : `nav-link fw-bold px-2 fs-4 text-white`}>
                Settings<IoMdSettings/>
                </NavLink>
            </li>
        </ul>
          </div>
    </SlidingPanel>
    </div>
    )
})