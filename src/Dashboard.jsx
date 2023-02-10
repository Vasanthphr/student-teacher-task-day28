import React from 'react'


function Dashboard() {
    
    const admin = [
        {
            id : 1,
            School_Name : "St.Jamse",
            Teachers_Name : "Karthik.S",
            Subjects : "English",
            Students: "34",
            Percentage: "72 %" 
        },
        {
            id : 2,
            School_Name : "Vestry",
            Teachers_Name : "Rechal.R",
            Subjects : "Maths",
            Students: "85",
            Percentage: "80%"
        },
        {
            id : 3,
            School_Name : "Ponnaiah",
            Teachers_Name : "Rahul.T",
            Subjects : "Science",
            Students: "50",
            Percentage: "60 %"
        },
        {
            id : 4,
            School_Name : "R.S.k",
            Teachers_Name : "Reka.K",
            Subjects : "social",
            Students: "50",
            Percentage: "60 %"
        },
        {
            id : 5,
            School_Name : "Holy School",
            Teachers_Name : "Rajrsh.M",
            Subjects : "Hindi",
            Students: "56",
            Percentage: "60 %"
        },
        {
            id : 6,
            School_Name : "E.R",
            Teachers_Name : "Meena",
            Subjects : "Tamil",
            Students: "100",
            Percentage: "90 %"
        },
        {
            id : 7,
            School_Name : "Seventh Day",
            Teachers_Name : "Remi.D",
            Subjects : "EVS",
            Students: "32",
            Percentage: "50 %"
        }

    ]
    
  return (
    <div className="container-fluid">

    {/* <!-- Page Heading --> */}
    <h1 className="h3 mb-2 text-gray-800">Student-Teacher</h1>
  

    {/* <!-- DataTales Example --> */}
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-danger"> Data List</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th> Sl.no </th>
                            <th>School Name</th>
                            <th>Teachers Name</th>
                            <th>Subjects</th>
                            <th>Students</th>
                            <th>Percentage %</th>
                         
                        </tr>
                    </thead>
                    {/* <tfoot>
                        <tr>
                            <th> Sl.no </th>
                            <th>School_Name</th>
                            <th>Teachers_Name</th>
                            <th>Subjects</th>
                            <th>Students</th>
                            <th>Percentage %</th>
                          
                        </tr>
                    </tfoot> */}
                    <tbody>
                     {
                        admin.map((list,index) => {
                            return<tr>

                            <td>{index + 1 }</td>
                            <td>{list.School_Name}</td>
                            <td>{list.Teachers_Name}</td>
                            <td>{list.Subjects}</td>
                            <td>{list.Students}</td>
                            <td>{list.Percentage}</td>
                             </tr>
                        })
                     }
                 
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
  )
}

export default Dashboard