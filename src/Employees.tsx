import femaleProfile from '/home/henrike32/team-manage-app/src/assets/images/femaleProfile.jpg'
import maleProfile from '/home/henrike32/team-manage-app/src/assets/images/maleProfile.jpg'

const Employees = ({ employees, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick }) => {

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
                <div key={employee.id} id={employees.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>

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