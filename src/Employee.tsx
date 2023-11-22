import { useState } from 'react'
import femaleProfile from '/home/henrike32/team-manage-app/src/assets/images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employees = ()  => {

const [employees, setEmployees] = useState([{    
  id:1, 
  fullName: "Bob Jones", 
  designation:"JavaScript Developer", 
  gender: "male", 
  teamName: "TeamA"
},
{
  id:2,
  fullName: "Jill Bailey", 
  designation:"Node Developer", 
  gender: "female", 
  teamName: "TeamA"
}, 
{
  id:3, 
  fullName: "Bo Fes", 
  designation:"JavaScript Developer", 
  gender: "male", 
  teamName: "TeamB"
} , 
{
  id:4, 
  fullName: "Tina Bones", 
  designation:"JavaScript Developer", 
  gender: "female", 
  teamName: "TeamB"
}, 
{
  id:5, 
  fullName: "Priscila Arantes", 
  designation:"Vue Developer", 
  gender: "female", 
  teamName: "TeamC"
}, 
{
  id:6, 
  fullName: "Veriane L", 
  designation:"Designer", 
  gender: "female", 
  teamName: "TeamC"
}]);

  return (
    <main className="container">
      <div className= "row justify-content-center mt-3 mb-3">
        <div className= "col-8">
          <div className="card-collection">
            {
              employees.map((employee) => (
                <div id={employee.id.toString()} className="card">
                  <img src={femaleProfile} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Full Name: {employee.fullName}</h5>
                    <p className="card-text">Designation: {employee.designation}</p>
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