input.onButtonPressed(Button.A, function () {
    jugadorArrriba.change(LedSpriteProperty.Y, -1)
    juegoAbajo.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    jugadorArrriba.change(LedSpriteProperty.Y, 1)
    juegoAbajo.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    jugadorArrriba.change(LedSpriteProperty.X, -1)
    juegoAbajo.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
    jugadorArrriba.change(LedSpriteProperty.X, 1)
    jugadorArrriba.change(LedSpriteProperty.Y, -1)
})
let juegoAbajo: game.LedSprite = null
let jugadorArrriba: game.LedSprite = null
jugadorArrriba = game.createSprite(1, 3)
juegoAbajo = game.createSprite(1, 4)
let Obstaculo = game.createSprite(4, 4)
basic.forever(function () {
    Obstaculo.change(LedSpriteProperty.X, -1)
    basic.pause(750)
    if (Obstaculo.get(LedSpriteProperty.X) == 0) {
        Obstaculo.set(LedSpriteProperty.X, 4)
        Obstaculo.set(LedSpriteProperty.Y, randint(3, 4))
    }
    if (Obstaculo.isTouching(juegoAbajo)) {
        game.gameOver()
    }
    if (Obstaculo.isTouching(jugadorArrriba)) {
        game.gameOver()
    }
})
