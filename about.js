console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Success! Your form has been submitted.');
}



let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseenter', ()=>{
	alert("You deserve a spa day!");
})