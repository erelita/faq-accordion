const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');
const arrow = document.querySelectorAll('.arrow');

for (let i = 0; i < question.length; i++) {

    question[i].addEventListener('click', function() {
        question[i].classList.toggle('weight');
        answer[i].classList.toggle('hide');
        answer[i].classList.toggle('show');
        arrow[i].classList.toggle('rotate');

        for (let j = 0; j < question.length; j++) {
            if (question[j] != question[i] && question[j].classList.contains('weight')) {
                question[j].classList.remove('weight');
                answer[j].classList.add('hide');
                answer[j].classList.remove('show');
                arrow[j].classList.remove('rotate');
            }
        }
    });
}
