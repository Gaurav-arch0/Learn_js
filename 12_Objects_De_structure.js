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
// navbar(company = "hitesh")// This is the same way of destructuring  assignment we did above,  But here instead of taking all properties of company object ,we are giving a default value for company which
//     return (
        
//         <div className="navbar">
            
//             <h2>{company}</h2>  
                  
//         </div> 
       
//     )
// }