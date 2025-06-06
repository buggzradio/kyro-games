class ChickenSmall extends CollidableObject {
  height = 80;
  width = 80;
  y = 360;
  alive = true;
  IMAGES_WALKING = [
      'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
      'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
      'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
  ];
  IMAGES_DEAD = ['img/3_enemies_chicken/chicken_small/2_dead/dead.png'];

  constructor() {
      super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
      this.x = 400 + Math.random() * 1500;
      this.speed = 0.35 + Math.random() * 0.25;
      this.loadImages(this.IMAGES_WALKING);
      this.loadImages(this.IMAGES_DEAD);
      this.animateChicken();
  } 
}
