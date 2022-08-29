let creditUnit= document.getElementById("credit");
let grade= document.getElementById("grade");
let addMore= document.getElementById("addMore");
let course =document.getElementById("course");


//create input fields
const addCourse = () => {
   var x= document.createElement("INPUT");
   x.setAttribute("type", "text");
 x.setAttribute("value", "Type in course code");
   document.getElementById('form').appendChild("x");

}
//calling the addcourse function
addMore.addEventListener("click", addCourse);