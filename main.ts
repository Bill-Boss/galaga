controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 50, 0)
})
let fireball: Sprite = null
let projectile: Sprite = null
let ship: Sprite = null
let mySprite = null
ship = sprites.create(img`
    . . . . 3 3 3 . . . . . . . . . 
    . . . 3 3 3 3 3 . . . . . . . . 
    . . 5 5 5 5 5 5 5 . . . . . . . 
    . . 5 f 5 5 5 f 5 . . . . . . . 
    . . 5 5 5 5 5 5 5 . . . . . . . 
    . . 5 f f f f f 5 . . . . . . . 
    . . 5 5 5 5 5 5 5 . . . . . . . 
    . . . . . 5 . . . . . . . . . . 
    . . . . . 5 . . . . . . . . . . 
    . . 3 5 5 5 5 5 f f . . . . . . 
    . . . . . 5 . . f . . . . . . . 
    . . . . . 5 . . . . . . . . . . 
    . . . 5 5 5 5 5 . . . . . . . . 
    . . . 5 . . . 5 . . . . . . . . 
    . . . 5 . . . 5 . . . . . . . . 
    . . . 3 3 . . 3 3 . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(ship)
scene.setBackgroundColor(9)
ship.setStayInScreen(true)
ship.setPosition(30, 60)
game.onUpdateInterval(0.1, function () {
    fireball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 4 4 4 4 4 2 . . . . . 
        . 2 2 2 4 f 4 4 4 f 4 2 . . . . 
        . . 2 . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 f f f f 4 4 . . . . . 
        . . . . 4 f 4 4 f 4 4 . . . . . 
        . . . . . 2 2 2 4 4 . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    fireball.setVelocity(-50, 0)
    fireball.setPosition(160, randint(0, 120))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {   
  game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {   
  info.changeScoreBy(1)
  sprite.destroy()
  otherSprite.destroy()
})