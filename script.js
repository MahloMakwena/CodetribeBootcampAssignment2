var userInfo={
name:"Makwena",
surname:"Mahlo",
myaddress:"Lorraine Village"
}
let myprojects=[
{name:"EduWeb",description:"",language:"C#,JavaScript,jquery,ajax,css and html"},
{name:"Nomakuphi",description:"",language:"Java"}
]
//document.getElementById("hid").innerHTML=userInfo.name+ " " +userInfo.surname;
document.getElementById("pid").innerHTML="I am very passionate about programming and learning<br> new programming languages<br/><br/>I believe that some day i will be able to create a powerful<br> website and mobile application that will change the lives<br> of people for the better nation wide..";
let listUI="ul"
for(let i=0;i<myprojects.length;i++){
"<li>"+myprojects[i].name+"</li>"
console.log(myprojects[i].name,myprojects[i].language);
}
listUI+="</ul>";
document.getElementById("hid").innerHTML=listUI;
