import { Route, Router, Routes, A } from "@solidjs/router"
import BuildingPage from "../pages/building/BuildingPage"
import EmployeesPage from "../pages/employees/EmployeesPage"

export default function App() {
    return <>
        <Routes>
            <Route path="/" component={EmployeesPage} />
            <Route path="/building" component={BuildingPage} />
        </Routes>
    </>
}