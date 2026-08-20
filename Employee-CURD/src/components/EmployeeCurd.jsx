import { useState } from 'react'

const EmployeeCurd = () => {
      //State Variables for Employee Details
      const [name, setName] = useState('')
      const [position, setPosition] = useState('')
      const [salary, setSalary] = useState('')
      const [department, setDepartment] = useState('')
      const [email, setEmail] = useState('')

      // Array to store employee objects
      const [employees, setEmployees] = useState([])
      //edit
      const [editIndex, setEditIndex] = useState(null)

      
      // employee Object to store employee details
       const employee = {
        name: name,
        position: position,
        salary: salary,
        department: department,
        email: email 
           }
       const addEmployee = () => {
              setEmployees([...employees, employee])
              }
        const updateEmployee = () => {
  const updatedEmployees = [...employees]

  updatedEmployees[editIndex] = {
    name,
    position,
    salary,
    department,
    email
  }

  setEmployees(updatedEmployees)

  setEditIndex(null)
}
              
 return (
    <div>
      <h1>Employee Management System</h1>
      <div>
         <h2>Add Employee</h2>
          <input 
           type="text" placeholder="Enter Employee Name"
           value={name} onChange={(e) => setName(e.target.value)}
          />
          <input 
          type="text" placeholder="Enter Employee Position" 
          value={position} onChange={(e) => setPosition(e.target.value)}
          />
          <input 
          type="text" placeholder="Enter Employee Salary" 
          value={salary} onChange={(e) => setSalary(e.target.value)}
          />
          <input 
          type="text" placeholder="Enter Employee Department" 
          value={department} onChange={(e) => setDepartment(e.target.value)}
          />
          <input 
          type="text" placeholder="Enter Employee Email" 
          value={email} onChange={(e) => setEmail(e.target.value)}
          />  

          <button onClick={editIndex === null ? addEmployee : updateEmployee}>
  {editIndex === null ? 'Add Employee' : 'Update Employee'}
</button>
      </div>  
      {employees.length > 0 && (
      <div>
         <h2>Employee List</h2>

    {employees.map((employee, index) => (
          <div key={index}>
               <p>Name: {employee.name}</p>
               <p>Position: {employee.position}</p>
               <p>Salary: {employee.salary}</p>
               <p>Department: {employee.department}</p>
               <p>Email: {employee.email}</p>

               // Edit Employee Details
               <button
  onClick={() => {
    setEditIndex(index)

    setName(employee.name)
    setPosition(employee.position)
    setSalary(employee.salary)
    setDepartment(employee.department)
    setEmail(employee.email)
  }}
>
  Edit
</button>

               //Delete Employee from the list
               <button onClick={() => {
                const updatedEmployees = employees.filter((_, i) => i !== index)
                setEmployees(updatedEmployees)
               }}>Delete</button>

                <hr />
           </div>
           ))}
      </div>
      )}
    </div>
    
  )
}

export default EmployeeCurd