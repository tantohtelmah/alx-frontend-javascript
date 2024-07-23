export default function createIteratorObject(report) {
	const allEmployees = report.allEmployees;
	let employeeList = [];
  
	for (const department of Object.values(allEmployees)) {
	  employeeList = employeeList.concat(department);
	}
  
	return employeeListSymbol.iterator;
  }
  