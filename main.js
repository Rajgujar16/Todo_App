
    const form = document.querySelector("form");
    const inputHeading = document.querySelector("#inputHeading");
    const inputDescription = document.querySelector("#inputDescription");
    const todoList = document.querySelector("#todoList");
    const themeBtn = document.querySelector("#themeBtn");
    const navbar = document.querySelector(".navbar");
    const h1 = document.querySelector("h1");
    const span = document.querySelector("span")
    const body = document.body;
    let theme = 0;

    themeBtn.addEventListener("click", () => {
        if (theme === 0) {
            // Switch to Dark Theme
            body.style.backgroundColor = "black";
            navbar.classList.remove("bg-warning"); // Remove default Bootstrap background color class
            navbar.style.backgroundColor = "#343a40"; // Set custom dark background color for navbar
            h1.style.color = "white";
            span.style.color = "white"
            themeBtn.innerText = "Light";
            theme = 1;
        } else {
            // Switch to Light Theme
            body.style.backgroundColor = "white";
            navbar.classList.add("bg-warning"); // Add default Bootstrap background color class
            navbar.style.backgroundColor = ""; // Reset inline background color for navbar
            themeBtn.innerText = "Dark";
            h1.style.color = "dark";
            span.style.color = "dark"
            theme = 0;
        }
    });

    const saveTodo = (e) => {
        e.preventDefault();
        let heading = inputHeading.value;
        let description = inputDescription.value;
    
        if (heading.trim() === '' || description.trim() === '') {
            alert('Please fill out both heading and description fields.');
            return;
        }
    
        // Create <li> element
        let li = document.createElement("li");
        li.innerText = `${heading}: ${description}`;
        li.className = "list-group-item rounded-0";
    
        // Create Delete button
        let btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.className = "btn btn-sm btn-danger rounded-0 float-end";
        btn.addEventListener("click", () => {
            if (window.confirm("Are you sure you want to delete this Todo?")) {
                li.remove();
            }
        });
    
        
        li.appendChild(btn);
    
        
        todoList.appendChild(li);
        form.reset();
    };
    
    form.addEventListener("submit", saveTodo);

    

    9111844484
