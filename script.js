let emp = [];
let id = 1;

const Name = document.getElementById("name");
const profession = document.getElementById("profession");
const age = document.getElementById("age");
const addUserBtn = document.getElementById("addUser");
const message = document.getElementById("message");
const employeeList = document.getElementById("employeeList");

addUserBtn.addEventListener("click", function () {
    const haveName = Name.value.trim();
    const haveProfession = profession.value.trim();
    const haveAge = age.value.trim();

    if (!haveName || !haveProfession || !haveAge) {
        message.textContent = "Error : Please Make sure All the fields are filled before adding in an employee !";
        message.className = "error";
        return;
    };

    const newEmployee = {
        id: id++,
        name: haveName,
        profession: haveProfession,
        age: haveAge
    };

    emp.push(newEmployee);
    message.textContent = "Success : Employee Added!";
    message.className = "success";

    Name.value = "";
    profession.value = "";
    age.value = "";

    render();
});

function render() {
    employeeList.innerHTML = "";

    if (emp.length === 0) {
        employeeList.innerHTML = "<p>You have 0 Employees.</p>";
        return;
    }


    emp.forEach((employee, index) => {
        const div = document.createElement("div");
        div.className = "employee-card";
        div.innerHTML = `
      <p>${index + 1}. Name : ${employee.name} &nbsp;&nbsp;&nbsp; Profession: ${employee.profession} &nbsp;&nbsp;&nbsp; Age:${employee.age}</p>
      <button onclick="deleteUser(${employee.id})">Delete User</button>
    `;
        employeeList.appendChild(div);
    });
}

function deleteUser(id) {
    emp = emp.filter(employee => employee.id !== id);
    message.textContent = "Employee Deleted!";
    message.className = "warning";
    render();
}