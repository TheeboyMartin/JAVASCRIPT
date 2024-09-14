
// 1. Program to list the properties of a Javascript object
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 }
    console.log(Object.keys(student))
     
// 2. Deletingg the rollno property
var student = {
name : "Juan Rayy",
sclass : "v7",
rollno : 112 }
console.log("Before deleting",student)
delete student.rollno
console.log(student)

// 3. Getting the length of a Javascript object
var student2 = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }

let length = Object.keys(student2).length
console.log(length)

// 4. Displaying the reading status
var library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
    },
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false  
  
    }
  ];
  
  function displayReadingStatus()  
   {
    for (let i = 0; i < library.length; i++) {
      const book = library[i]
      console.log("Book: " + book.title)
      console.log("Author: " + book.author)
      console.log('Reading status:' + book.readingStatus)
    }
  }
  
  displayReadingStatus()

// 5. Returning subset of a string
  function findSubstrings(str) {
    const substrings = []
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        substrings.push(str.substring(i, j))
      }
    }
  
    return substrings
  }
  console.log(findSubstrings('dog'))

// 6. Sorting an array of Javascript object
  var library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
 ];
 
 
 library.sort((a, b) => b.libraryID - a.libraryID);
 console.log(library)

// 7. Printing all methods in a Javascript object
 function all_properties(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(prop) {
        return typeof obj[prop] === 'function'
    });
}

console.log(all_properties(Array));

//  8. Javascript function to parse an URL
function parseURL(url) {
    var parser = document.createElement('a')
    parser.href = url

    return {
        href: parser.href,            
        protocol: parser.protocol,    
        host: parser.host,           
        hostname: parser.hostname,    
        port: parser.port,            
        pathname: parser.pathname,    
        search: parser.search,        
        origin: parser.origin         
    }
}

console.log(parseURL('https://tms.thh-llc.com/auth/login'));

// 9. Javascript function to retrieve all the names of an object's own and inherited properties
function getAllPropertyNames(obj) {
    let properties = []

    
    for (let prop in obj) {
        properties.push(prop)
    }


    Object.getOwnPropertyNames(obj).forEach(function(prop) {
        if (!properties.includes(prop)) {
            properties.push(prop)
        }
    })

    return properties
}


function Parent() {
    this.parentProp = 'parent'
}

Parent.prototype.parentMethod = function() {}

function Child() {
    this.childProp = 'child'
}

Child.prototype = new Parent()
Child.prototype.childMethod = function() {}

let child = new Child()
console.log(getAllPropertyNames(child))

// 10. Retrieving all the values of an Object's properties
function getPropertyValues(obj) {
    return Object.values(obj)
}

const example = {
    a: 1,
    b: 2,
    c: 3
}

console.log(getPropertyValues(example))

// 11. Converting an Object into a list of `[Key, value]` pairs
function objectToPairs(obj) {
    return Object.entries(obj)
}

const example1 = {
    a: 1,
    b: 2,
    c: 3
}

console.log(objectToPairs(example1))

// 12. Copy of an Object where the Keys become the values ad the value are the keys
function invertObject(obj) {
    let inverted = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key
        }
    }
    return inverted
}

const example3 = {
    a: 1,
    b: 2,
    c: 3
}

console.log(invertObject(example3))

// 13. Js function to check whether an object contains a given property
function hasOwnProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}
const example4 = { a: 1, b: 2 }

console.log(hasOwnProperty(example4, 'b')); 
console.log(hasOwnProperty(example4, 'c'));
