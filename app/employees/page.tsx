
async function getEmployees() {
  return [
    { id: 1, name: "John", role: "Developer" },
    { id: 2, name: "Priya", role: "HR" }
  ];
}

export default async function Employees() {
  const employees = await getEmployees();

  return (
    <main style={{ padding: 30 }}>
      <h1>Employees</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
