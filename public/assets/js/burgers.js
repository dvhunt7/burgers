//comment

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
            });
        
    });

    $(".devour").on("click", function(event) {
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted cat", id);

                location.reload();
            }
        )
    })
})