<script>
        function changeButtons(labNumber) {
            const buttonContainer = document.getElementById("lab-buttons");
            buttonContainer.innerHTML = ""; // Очищаємо поточні кнопки

            let buttons = [];
            switch(labNumber) {
                case 1:
                    buttons = ["Опис проєктного середовища", "Тема/Мета місце розташування лаби №1", "HTML-код таблиць"];
                    break;
                case 2:
                    buttons = ["Тема/Мета місце розташування лаби №2", "Структура документа", "HTML-код форм"];
                    break;
                case 3:
                    buttons = ["HTML-код зображень", "Висновки"];
                    break;
                default:
                    buttons = ["Опис проєктного середовища", "Тема/Мета місце розташування лаби №1"];
            }

            buttons.forEach(function(buttonText) {
                const button = document.createElement("button");
                button.textContent = buttonText;
                buttonContainer.appendChild(button);
            });
        }
    </script>