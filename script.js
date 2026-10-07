// Scroll to booking section
function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}


// Select room from room cards
function selectRoom(roomName) {
    document.getElementById("room").value = roomName;

    scrollToBooking();
}


// Booking form
document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const checkin = document.getElementById("checkin").value;
        const checkout = document.getElementById("checkout").value;
        const room = document.getElementById("room").value;

        if (new Date(checkout) <= new Date(checkin)) {
            document.getElementById("message").style.color = "#dc2626";

            document.getElementById("message").textContent =
                "Check-out date must be after the check-in date.";

            return;
        }

        document.getElementById("message").style.color = "#15803d";

        document.getElementById("message").textContent =
            `Thank you, ${name}! Your ${room} has been reserved from ${checkin} to ${checkout}.`;

        document.getElementById("bookingForm").reset();
    });
