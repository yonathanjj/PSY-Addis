function openPopUp() {
    const popup = document.getElementById("myTicketsPopup");
    const circle = document.querySelector(".circle");

    // Hide the circle and show the popup
    circle.style.display = "none";

    // Show and animate the popup coming from the circle
    popup.style.display = "flex"; // Make the popup container visible
    setTimeout(() => {
        popup.style.transform = "scale(1)"; // Expand the popup
    }, 50);

    // Add tickets to the container
    addTickets();
}

function closePopUp(event) {
    const popup = document.getElementById("myTicketsPopup");
    const circle = document.querySelector(".circle");

    // If the click is outside the popup-content, close the popup
    const popupContent = document.querySelector(".popup-content");

    if (event.target === popupContent) return; // Prevent closing when clicking inside the content

    // Hide the popup and show the circle again
    popup.style.transform = "scale(0)";
    setTimeout(() => {
        popup.style.display = "none";
        circle.style.display = "flex"; // Show circle again
    }, 500);
}

function addTickets() {
    const ticketContainer = document.querySelector(".ticket-container");

    // Example ticket data
    const tickets = [
        { title: "Concert Ticket", date: "December 12, 2024" },
        { title: "Movie Ticket", date: "January 5, 2025" },
        { title: "Flight Ticket", date: "February 1, 2025" }
    ];

    // Dynamically create ticket cards
    tickets.forEach(ticket => {
        const card = document.createElement("div");
        card.classList.add("ticket-card");
        card.innerHTML = `
            <h3>${ticket.title}</h3>
            <p>Date: ${ticket.date}</p>
        `;
        ticketContainer.appendChild(card);
    });
}
