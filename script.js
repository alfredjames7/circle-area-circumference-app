function calculateCircle() {
    let radius = document.getElementById("radius").value;

    if (radius === "" || radius <= 0) {
        alert("Please enter a valid radius");
        return;
    }

    radius = parseFloat(radius);

    let area = Math.PI * radius * radius;
    let circumference = 2 * Math.PI * radius;
    let diameter = 2 * radius;

    document.getElementById("area").textContent =
        "Area: " + area.toFixed(2);

    document.getElementById("circumference").textContent =
        "Circumference: " + circumference.toFixed(2);

    document.getElementById("diameter").textContent =
        "Diameter: " + diameter.toFixed(2);
}
