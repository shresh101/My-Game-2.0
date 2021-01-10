class Drone{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.Width = width
        this.image = loadImage("images/drone for game.jpg")
        this.Height = height
        this.body = Bodies.rectangle(this.x,this.y,this.Width, this.Height)
        World.add(world,this.body)
    }
}