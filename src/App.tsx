import Header from '/home/henrike32/team-manage-app/src/Header.tsx'
import Employees from './Employees'
import Footer from '/home/henrike32/team-manage-app/src/Footer.tsx'
import './App.css'
import { useState } from 'react'


function App() {

  const [selectedTeam, setTeam] = useState("TeamB");

  const [employees, setEmployees] = useState([{
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


  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employees.id === parseInt(event.currentTarget.id)
      ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam }
      : employee);

    setEmployees(transformedEmployees);
  }

  return (
    <>
      <Header />
      <Employees 
        employees={employees}
        selectedTeam={selectedTeam}
        handleTeamSelectionChange={handleTeamSelectionChange}
        handleEmployeeCardClick={handleEmployeeCardClick} />
      <Footer />
    </>
  )
}

export default App
