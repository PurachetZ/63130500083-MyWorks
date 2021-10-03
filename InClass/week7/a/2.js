function getStudentsInClass(instructor, ta, ...students) {

    return students;
  
  }
  
  let studentSec2 = getStudentsInClass('Umaporn', 'Tisanai', 'A', 'B', 'C');
  
  console.log(studentSec2);
  
  
  
  [instructor, ta, ...student] = ['Umaporn', 'Tisanai', 'A', 'B', 'C'];
  
  console.log(student);