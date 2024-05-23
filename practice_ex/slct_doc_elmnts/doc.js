//Ways of selecting elements from the document
let title = document.querySelector('.title');
title.style.color = 'green';


//.The querySelector method
let submit_button = document.querySelector('.submit');
submit_button.addEventListener('click', ()=>{
    
  //1.The getElementById method
  const username = document.getElementById("username");
  let your_name = username.value;
   
  let suggestions = document.getElementById('suggestion');
  let submit_suggestion = suggestions.value;
  computeSuggestions(your_name,submit_suggestion);

  alert(`Dear ${your_name}, your proposed suggestion, ${submit_suggestion}, have been submitted successfully`);

});
function computeSuggestions(username, suggestion){
  return username, suggestion;
}

//3. The getElementsByTagName method
//4. The getElementsByName method 
//2. The getElementsByClassName method
//5 and querySlectorAll methods 