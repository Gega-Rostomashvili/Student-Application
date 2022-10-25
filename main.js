
class Student{
    image;
    firstName;
    lastName;
    age;
    email;
    phone;

    constructor(image,firstName,lastName,age,email,phone){
     this.image = image;
     this.firstName = firstName;
     this.lastName =lastName;
     this.age = age;
     this.email = email;
     this.phone = phone;
    }
}



class ViewController{
    getStudentCard(collection){
    return `
    <div class="card" style="width: 35rem;">
    <img src="${collection.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h3 class="card-text"> student name is -- ${collection.firstName}</h3>
    <h3 class="card-text"> student lastname is -- ${collection.lastName}</h3>
    <h3 class="card-text"> student age is -- ${collection.age}</h3>
    <h3 class="card-text"> student meil is -- ${collection.email}</h3>
    <h3 class="card-text"> student phone  is  -- ${collection.phone}</h3>
    </div>
    </div>
    
    `
    }
    
    showStudentCard(collection){
       card.innerHTML += this.getStudentCard(collection);
       
   
    }
    
}


class filteredStudent{
    firstName;
    lastName;
    phone;
    mail;
    constructor(firstName,lastName,phone,mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.mail = mail;
    }

}



const image = document.querySelector("#imageUrl");
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#lastName");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const allInputs = document.querySelectorAll(".info");
const card = document.querySelector(".student-cards")
const saveInfo = document.querySelector("#saveInfo");
const filterInputBtn = document.querySelector("#filter");
const filterInput = document.querySelector(".filter-cards");
const filterInputs = document.querySelectorAll(".filterInput")
const filterBtn = document.querySelector("#filterBtn");
const filterName = document.querySelector("#filterName");
const filterLastName = document.querySelector("#filterLastName");
const filterPhone = document.querySelector("#filterPhone");
const filterEmail = document.querySelector("#filterEmail");
const showBtn = document.querySelector("#show");
const filteredCont = document.querySelector(".filtered_container")
let viewController = new ViewController();
let studentCollection = [];
let filteredCollection = [];



function checkValidation(){
 let isValidate = true;
 allInputs.forEach(input => {
    if(input.value.length == 0 || input.value == undefined){
        input.classList.add("error-border")
        isValidate = false;
    } else{
        input.classList.remove("error-border")
    }
 })
 return isValidate;
}

function clearInputs(){
    allInputs.forEach(input => {
        input.value ='';
    })
    filterInputs.forEach(input => {
        input.value ='';
    })
}



saveInfo.addEventListener('click',function(){
    if(checkValidation()){
        let student = new Student(image.value, firstName.value, lastName.value, age.value, email.value, phone.value);
        viewController.showStudentCard(student);
        studentCollection.push(student);
         clearInputs()
        card.classList.add("hide");
       
    }
})
showBtn.addEventListener('click',function(){
    if(card.classList.toggle("show")){
      showBtn.innerHTML = "hide students";
    } else{
      showBtn.innerHTML = "show students";
    }
  })

  filterBtn.addEventListener("click",function(){
    let filteredList = new filteredStudent(filterName.value,filterLastName.value,filterPhone.value,filterEmail.value);
    filteredCollection.push(filteredList); 
    let filterArr = studentCollection.filter(obj => {
      if(obj.firstName == filterName.value || obj.lastName == filterLastName.value 
         || obj.phone == filterPhone.value || obj.mail == filterEmail.value){
            return true
      }  
   });


  for(let i = 0; i < filterArr.length; i++){
    filteredCont.innerHTML += viewController.getStudentCard(filterArr[i]);
    
  }
  clearInputs();
 });

filterInputBtn.addEventListener("click",function(){
    filterInput.classList.toggle("show");
});


