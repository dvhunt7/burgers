$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            name: $("#ca").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created a new burger");

                location.reload();
            };
        );
    });
})