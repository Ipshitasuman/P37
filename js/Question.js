class Question {
  constructor(){
   this.answer = createInput("Your option");
   this.name = createInput("Name");
   this.button = createButton("Submit"); 
   this.title = createElement('h1');
   this.title.html("My Quiz Game");
   this.q = createElement('h3');
   this.q.html("Q. Who is often called the father of the computer?");
   this.o1 = createElement("h4");
   this.o1.html("1. Pierre Omidyar");
   this.o2 = createElement("h4");
   this.o2.html("2. Charles Babbage");
   this.o3 = createElement("h4");
   this.o3.html("3. Alexander Fleming");
   this.o4 = createElement("h4");
   this.o4.html("4. Edmonton Oilers");

  }

  hide(){
    this.button.hide();
    this.answer.hide();
    this.name.hide();
  }

  display(){
    
    this.title.position(450, 0);
    this.answer.position(600, 400);
    this.name.position(300,400)
    this.button.position(510, 460);
    this.q.position(300,100);
    this.o1.position(300,150);
    this.o2.position(300,180);
    this.o3.position(300,210);
    this.o4.position(300,240);



    this.button.mousePressed(()=>{
       
        this.answer.hide();
        this.button.hide();
        this.name.hide();
        
        contestant.name = this.name.value();
        contestant.answer = this.answer.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
    });
  }
}