$(document).ready(function () {

    // Welcome animation
    $(".home-content").hide();

    $(".home-content").fadeIn(1500);

    // Button hover effect
    $(".btn").hover(

        function () {
            $(this).css("transform", "translateY(-3px)");
        },

        function () {
            $(this).css("transform", "translateY(0)");
        }

    );

});
// Contact Form

$(document).ready(function () {

    $("#contactForm").submit(function (event) {

        event.preventDefault();

        let name = $("#name").val();

        $("#successMessage").text(
            "Thank you, " + name +
            "! Your message has been submitted successfully."
        );

        $("#contactForm")[0].reset();

    });

});