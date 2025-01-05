// Write your solution in this file!
// Original employee object
const employee = {
    name: 'Gracious Mungai',
    streetAddress: 'Buruburu',
  };
  
  // Function to update an employee's key-value pair without mutating the original object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to destructively update an employee's key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from an employee object without mutating the original
  function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedKey, ...newEmployee } = employee;
    return newEmployee;
  }
  
  // Function to destructively delete a key from an employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage:
  
  // 1. Non-destructive update
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'position', 'Software Engineer');
  console.log(updatedEmployee);
  // Output: { name: 'Gracious Mungai', streetAddress: 'Buruburu', position: 'Software Engineer' }
  
  console.log(employee);
  // Output: { name: 'Gracious Mungai', streetAddress: 'Buruburu' } (original object remains unchanged)
  
  // 2. Destructive update
  const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'position', 'Software Engineer');
  console.log(destructivelyUpdatedEmployee);
  // Output: { name: 'Gracious Mungai', streetAddress: 'Buruburu', position: 'Software Engineer' }
  
  console.log(employee);
  // Output: { name: 'Gracious Mungai', streetAddress: 'Buruburu', position: 'Software Engineer' } (original object is modified)
  
  // 3. Non-destructive delete
  const employeeWithoutStreetAddress = deleteFromEmployeeByKey(employee, 'streetAddress');
  console.log(employeeWithoutStreetAddress);
  // Output: { name: 'Gracious Mungai' }
  
  console.log(employee);
  // Output: { name: 'Gracious Mungai', streetAddress: 'Buruburu' } (original object remains unchanged)
  
  // 4. Destructive delete
  const destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
  console.log(destructivelyDeletedEmployee);
  // Output: { name: 'Gracious Mungai' }
  
  console.log(employee);
  // Output: { name: 'Gracious Mungai' } (original object is modified)
  