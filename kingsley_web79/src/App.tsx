import {memo} from "react"
import Home from "./routes/Home"
import SignUp from "./admin/SignUp"
import SignIn from "./admin/SignIn"
import Dashboard from "./admin/Dashboard"
import { Routes, Route } from "react-router";
import Course from "./routes/Course"
import MoreDetails from "./routes/MoreDetails"

export default memo(function App() {

  return (
    <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="choose">
  <Route path="course" element={<Course />}/>
  <Route path="moredetails" element={<MoreDetails />}/>
  </Route>

  <Route path="admin">
    <Route path="cpanel" element={<Dashboard/>}/>
    <Route path="signup" element={<SignUp />} />
    <Route path="login" element={<SignIn />} />
  </Route>
  </Routes>
 )
})