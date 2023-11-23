import './App.css'
import Header from './Header'
import Employees from './Employees'
import Footer from './Footer'
import GroupedTeamMembers from './GroupedTeamMembers'
import Nav from './Nav'
import NotFound from './NotFound'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Mana Points",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Alice Johnson",
    designation: "JavaScript Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Tina Bones",
    designation: "JavaScript Developer",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "Priscila Potion",
    designation: "Vue Developer",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Charlie Brown",
    designation: "Node Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "Diana Williams",
    designation: "JavaScript Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Edward Davis",
    designation: "JavaScript Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Fiona Miller",
    designation: "Vite Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Jill Bailey",
    designation: "Vite Developer",
    gender: "female",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Smith Jones",
    designation: "Vite Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "George Wilson",
    designation: "Designer",
    gender: "male",
    teamName: "TeamD"
  }]);

  // employees useEffect
  useEffect(() => {

    localStorage.setItem('employeeList', JSON.stringify(employees));


  }), [employees];
  // selectedTeam useEffect
  useEffect(() => {

    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));


  }), [selectedTeam];



  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam }
      : employee);

    setEmployees(transformedEmployees);
  }

  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
      />
      <Routes>
        <Route
          path="/"
          element={<Employees
            employees={employees}
            selectedTeam={selectedTeam}
            handleEmployeeCardClick={handleEmployeeCardClick}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />}>
        </Route>

        <Route
          path="/GroupedTeamMembers"
          element={<GroupedTeamMembers 
            employees = {employees}  
            selectedTeam={selectedTeam} 
            setTeam={setTeam} />}>
        </Route>

        <Route
          path="*"
          element={<NotFound />}>
        </Route>

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
