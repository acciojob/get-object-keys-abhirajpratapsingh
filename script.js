// Create the student object
const student = {
    name: 'John Doe'
};

// Add the getKeys method to Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Use the getKeys method on the student object
const keys = student.getKeys();
console.log(keys); // Output: ['name']
