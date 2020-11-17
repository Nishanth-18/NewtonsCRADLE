class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill("brown");
      rect(0,0, this.width, this.height);
      pop()
    }
  };// hi.. try running now and come back here and tell me the error
  // Hi ma ám..
//try again did u refresh the browser?     yes.. try again
//now it came..
//send pic on watsapp
  //lets work on sketch.js now
  // ok...
