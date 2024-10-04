export default function createIteratorObject(report) {
  let employees = [];
  for (const employee of Object.entries(report.allEmployees)) {
    employees = [...employees, employee];
  }
  return employees;
}
