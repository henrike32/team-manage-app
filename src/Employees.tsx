import { useState } from 'react'
import femaleProfile from '/home/henrike32/team-manage-app/src/assets/images/femaleProfile.jpg'
import maleProfile from '/home/henrike32/team-manage-app/src/assets/images/maleProfile.jpg'

const Employees = () => {

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

    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          { /* teams code */}
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map((employee) => (
                <div id={employee.id.toString()} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>

                  {(employee.gender === 'male') ? <img src={maleProfile} className="card-img-top" />
                    : <img src={femaleProfile} className="card-img-top" />}

                  <div className="card-group">
                    <h5 className="card-title">Full Name: {employee.fullName}</h5>
                    <p className="card-text"><b>Designation:</b>{employee.designation}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}
export default Employees