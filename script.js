$(document).ready(function() {
    $("#task-form").submit(function(event) {
        event.preventDefault(); // Impede o envio do formulário

        let taskText = $("#task-input").val().trim();
        if (taskText !== "") {
            let taskItem = $("<li></li>").text(taskText);
            $("#task-list").append(taskItem);
            $("#task-input").val(""); // Limpa o campo de input

            // Adiciona o efeito de riscar a tarefa ao clicar
            taskItem.click(function() {
                $(this).toggleClass("completed");
            });
        }
    });
});
