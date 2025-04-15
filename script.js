//your code here
const textArea = document.getElementById('evaluatedText');
const letters = document.getElementById('letterCount');


textArea.addEventListener('input', ()=>{
const count = textArea.value.length;
	letters.textContent = count;
})

