//your code here
const textArea = document.getElementById('evaluatedText');
const letters = document.getElementById('letterCount');

let count = 0;

textArea.addEventListener('input', ()=>{

	count++;
	letters.textContent = count;
})

