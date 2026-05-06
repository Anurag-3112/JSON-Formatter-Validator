function formatJSON() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    const error = document.getElementById("error");

    try {
        const parsed = JSON.parse(input);
        output.value = JSON.stringify(parsed, null, 2);
        error.textContent = "Valid JSON";
        error.style.color = "#00744f";
    } catch (e) {
        error.textContent = "Invalid JSON";
        error.style.color = "#d40000";
        output.value = "";
    }
}
