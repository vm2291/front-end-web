addButton.onclick = function(){
  addNewPet();  
};

function addNewPet(){
    petsGalleryMain.innerHTML = `<section> 
    <h2> ${nameInput.value}</h2>
    <img src="${pictureInput.value}" alt="${nameInput}'s picture">
    <h3> ${ageInput}</h3>
    </section>`;
};