$(document).ready(function() {
    setTimeout(function() {
        $("#showGenreOptions").click(function() {
            $(".genreList").toggle("slow", function() {
                // Animation complete.
            });
        });
    }, 100);
});
