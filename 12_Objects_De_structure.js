const course = {
    coursename: "Js in Hindi",
    price: "100",
    courseInstructor : "Angela-Yu",   
}
//course.courseInstructor          

const{courseInstructor: instruct } = course
console.log(instruct);

//Not about JavaScript but React just to know that there is a property in React called prop.
// const navbar = (prop.company) => {// So instead of doing prop. every time we directly give property inside the {}.

// }
// const navbar = ({company}) => {

//     // }
// navbar(company = "hitesh")    // This is the same way of destructuring  assignment we did above,  But here instead of taking all properties of company object ,we are giving a default value for company which
//     return (
        
//         <div className="navbar">
            
//             <h2>{company}</h2>  
                  
//         </div> 
       
//     )
// }

// JavaScript 
//API - Application Programming Interface, it's like the back end of an application. It allows different software applications to communicate with each other.Before we used to get API in two formats XML and JSON.

//JSON FORMAT
// {
//     "name":"John Doe",
//     "age":30,
//     "city":"New York"
// }
// In JSON format the code is given in key value pair in which both key and values are inputted as string.
//[
//     {},
//     {},
// ] //Array Format
// Fetch Method 
// fetch("https://api.github.com/users/angela4w")
// .then((response) => response.json())
// .then((data) => console.log(data))

// This is how we can get response for json api Request.