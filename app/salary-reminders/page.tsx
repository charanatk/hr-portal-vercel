
export default function SalaryReminders() {
  const reminders = [
    { employee: "John", dueDate: "5th Every Month" },
    { employee: "Priya", dueDate: "5th Every Month" }
  ];

  return (
    <main style={{ padding: 30 }}>
      <h1>Salary Credit Reminders</h1>

      <ul>
        {reminders.map((r, i) => (
          <li key={i}>
            {r.employee} - {r.dueDate}
          </li>
        ))}
      </ul>
    </main>
  );
}
