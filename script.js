document.body.addEventListener('click',(Event)=>{

    // Message
    const greetings = [
        "Hi","Hello","Hey","Yo","Hola","Bonjour","Ciao","Aloha","Howdy","Sup","Greetings", "Salutations","Heya","Namaste","Ola","Hiya", "Ahoy","Salut","Shalom","Hallo"
      ];      
    
    // background colour
    const fancyBackgroundColors = [
        "#FFD700", "#FF6347", "#EE82EE", "#7FFFD4", "#40E0D0",
        "#FF69B4", "#8A2BE2", "#FF4500", "#DA70D6", "#F0E68C",
        "#00FA9A", "#6495ED", "#D2691E", "#DC143C", "#9932CC",
        "#BA55D3", "#7B68EE", "#FF8C00", "#00CED1", "#CD5C5C"
      ];
     
    // create a div element with id circle  
    const circle = document.createElement('div')
    circle.id = 'circle';
    circle.textContent = greetings[Math.floor(Math.random()*greetings.length)];
    document.body.appendChild(circle)
    console.log(Event.target)
    

    // mouse click position
    let left = Event.clientX;
    let top = Event.clientY
    circle.style.top = `${top-50}px`
    circle.style.left = `${left-50}px`
    
    // Random backgroundcolour genrate
    circle.style.backgroundColor = fancyBackgroundColors[Math.floor(Math.random()*fancyBackgroundColors.length)];
    setTimeout(()=>{
        circle.remove();
    },5000)
})