import { useState } from 'react'
import femaleProfile from '/home/henrike32/team-manage-app/src/assets/images/femaleProfile.jpg'
import maleProfile from '/home/henrike32/team-manage-app/src/assets/images/maleProfile.jpg'

const Employees = () => {

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
    teamName: "TeamB"
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
    teamName: "TeamC"
  },
  {
    id: 6,
    fullName: "Charlie Brown",
    designation: "Node Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 7,
    fullName: "Diana Williams",
    designation: "JavaScript Developer",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 8,
    fullName: "Edward Davis",
    designation: "JavaScript Developer",
    gender: "female",
    teamName: "TeamB"
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
    teamName: "TeamA"
  },
  {
    id: 11,
    fullName: "Smith Jones",
    designation: "Vite Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 12,
    fullName: "George Wilson",
    designation: "Designer",
    gender: "male",
    teamName: "TeamC"
  }]);

  return (

    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          { /* teams code */}
          <select className="form-select form-select-lg">
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map((employee) => (
                <div id={employee.id.toString()} className="card m-2" style={{ cursor: "pointer" }}>

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