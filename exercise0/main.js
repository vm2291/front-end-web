
function squares(val){

    for(let i = 1; i <= val; i++){
  
      displayText.innerHTML += `
        <p>
          The square of ${i} is: ${i * i}.
        </p>
      `;
  
    }
  
  };
  
  goButton.onclick = function(){
    squares(maxNumInput.value);
  };

  clearButton.onclick = function(){
    
  }


  // TODO: create the character object here
const aurora = {
  name: "Aurora",
  health: 130,
  strength: 30,
  xp: 0,
  describe() {
      return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
  }
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());