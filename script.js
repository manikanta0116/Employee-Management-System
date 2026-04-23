let employees = [
    {name: "John", dept: "IT", salary: 60000},
    {name: "Alice", dept: "HR", salary: 50000},
    {name: "Bob", dept: "Finance", salary: 70000}
];

function display(data) {
    const table = document.getElementById("table");
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
        </tr>`;

    data.forEach((emp, index) => {
        let row = table.insertRow();
        row.insertCell(0).innerText = emp.name;
        row.insertCell(1).innerText = emp.dept;
        row.insertCell(2).innerText = emp.salary;

        let btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.onclick = () => {
            employees.splice(index, 1);
            display(employees);
        };

        row.insertCell(3).appendChild(btn);
    });
}

function addEmployee() {
    let name = document.getElementById("name").value;
    let dept = document.getElementById("dept").value;
    let salary = document.getElementById("salary").value;

    employees.push({name, dept, salary});
    display(employees);
}

function searchEmployee() {
    let val = document.getElementById("search").value.toLowerCase();
    let filtered = employees.filter(e => e.name.toLowerCase().includes(val));
    display(filtered);
}

function filterDept() {
    let dept = document.getElementById("filter").value;
    if (dept === "All") return display(employees);
    let filtered = employees.filter(e => e.dept === dept);
    display(filtered);
}

display(employees);
