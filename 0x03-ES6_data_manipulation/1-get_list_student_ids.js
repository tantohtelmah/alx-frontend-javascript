export default function getListStudentIds(students) {
	if (!Array.isArray(students)) {
	  return []; // Return an empty array if input is not an array
	}
  
	// Use map to extract IDs from each student object
	return students.map(student => student.id);
  }
