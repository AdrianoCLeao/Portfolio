document.addEventListener("mousemove", (mouse) => {
    const gradientElement = document.getElementById("gradient");
    const gradientX = mouse.clientX;
    const gradientY = mouse.clientY;

    gradientElement.style.transform = `translate(${gradientX}px, ${gradientY}px)`;

    if (
        mouse.clientX >= 0 && mouse.clientX <= window.innerWidth &&
        mouse.clientY >= 0 && mouse.clientY <= window.innerHeight
    ) {
        gradientElement.classList.add("visible");
    } else {
        gradientElement.classList.remove("visible");
    }
});