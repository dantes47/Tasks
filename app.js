document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#new_task").onsubmit = () => {

        // Create new item for list: 
        const li = document.createElement("li");
        li.innerHTML = document.querySelector("#task").value;

        // Add new item to task list:
        document.querySelector("#tasks").append(li);

        // Clear input field:
        document.querySelector("#task").value = '';

        // Stop form for submitting:
        return false;
    };

    document.querySelector('button').onclick = () => window.location.reload(false); 
});