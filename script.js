const flashCards = [{
  number: 1,
  question: 'What is the makeup of H20?',
  answer: 'Two hydrogen atoms(H2) and one oxygen atom (O)'
}, {
  number: 2,
  question: 'How do you declare a variable?',
  answer: 'Use var, let, or const'
}]

let flashCardContent = document.querySelector('.js-put-card-content-here');

function removeAndStart() {
  let getRidOfMe = document.getElementById('to-be-removed');
  getRidOfMe.remove();
  displayCardFront();
}

function displayCardBack() {
  let cardBack = flashCards.answer;
  flashCardContent = cardBack;
}

function displayCardFront() {
  for (let i = 0; i < flashCards.length; i++) {
  let cardFront = flashCards[i].question;
  flashCardContent.innerText = cardFront
  console.log(cardFront);
 }
}




/* Pseudocode
have an array of objects.
When loading the page, display the starting button
Onclick of the starting button, start iterating through the cards
On default, display the title of the object in the HTML class .title-text
On the click of .show-answer, switch to the answer
On the click of the .previous-card, iterate backwards.
on the click of .next-card, iterate forwards.
Add  flashcard will display a popup form with a question and answer input
On save, It will add an object to the end of the flashcards array with =>
  the index in the array as the number, the question part as the question, and the answer part as the answer
On click of view flashcards, It will take you to another page
On the page, the objects in the array will be displayed in order.
There will be two buttons: Edit, and delete.
*/