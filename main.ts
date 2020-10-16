namespace SpriteKind {
    export const Premio = SpriteKind.create()
    export const horizontal = SpriteKind.create()
    export const vertical = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Premio, function (sprite, otherSprite) {
    music.powerUp.play()
    game.setDialogTextColor(9)
    game.setDialogCursor(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
        6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
        6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
        6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
        6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
        6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
        6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
        6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
        6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
        6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `)
    game.setDialogFrame(img`
        2 2 f 2 2 2 2 2 2 2 2 2 f 2 2 
        2 f f f f f f f f f f f f f 2 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        2 f 1 f f f f f f f f f 1 f 2 
        f f 1 1 1 1 1 1 1 1 1 1 1 f f 
        2 f f f f f f f f f f f f f 2 
        2 2 f 2 2 2 2 2 2 2 2 2 f 2 2 
        `)
    console.log("tiempo empleado: " + Math.round(game.runtime() / 1000) + " seg")
    game.showLongText("tiempo empleado: " + Math.round(game.runtime() / 1000) + " seg", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadVertical, function (sprite, location) {
    if (ayuda == "S") {
        tiles.setTileAt(location, myTiles.tile1)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadHorizontal, function (sprite, location) {
    if (ayuda == "S") {
        tiles.setTileAt(location, myTiles.tile2)
    }
})
function Fondos () {
    color = randint(1, 16)
    if (color == 1) {
        scene.setBackgroundColor(0)
    } else if (color == 2) {
        scene.setBackgroundColor(1)
    } else if (color == 3) {
        scene.setBackgroundColor(2)
    } else if (color == 4) {
        scene.setBackgroundColor(3)
    } else if (color == 5) {
        scene.setBackgroundColor(4)
    } else if (color == 6) {
        scene.setBackgroundColor(5)
    } else if (color == 7) {
        scene.setBackgroundColor(6)
    } else if (color == 8) {
        scene.setBackgroundColor(7)
    } else if (color == 9) {
        scene.setBackgroundColor(8)
    } else if (color == 10) {
        scene.setBackgroundColor(9)
    } else if (color == 11) {
        scene.setBackgroundColor(10)
    } else if (color == 12) {
        scene.setBackgroundColor(11)
    } else if (color == 13) {
        scene.setBackgroundColor(12)
    } else if (color == 14) {
        scene.setBackgroundColor(13)
    } else if (color == 15) {
        scene.setBackgroundColor(14)
    } else if (color == 16) {
        scene.setBackgroundColor(15)
    }
}
let color = 0
let ayuda = ""
game.splash("Laberinto 30x30", "Autor: Claudio Orts")
ayuda = game.askForString("Quieres ayuda? S=si, N=no", 1)
let yo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
yo.setPosition(24, 24)
controller.moveSprite(yo)
scene.cameraFollowSprite(yo)
let meta = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Premio)
meta.setPosition(952, 952)
Fondos()
tiles.setTilemap(tiles.createTilemap(hex`3d003d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001020402040202020202020202020500010205000102020204020202050001020402050001020202020202020202040202020202050001020402050000030003000300000000000000000003000300030003000000030000000300030003000300030000000000000000000300000000000300030003000300000300030003000102020202020500030003000300030003000602050003000300030003000a02050001020202020006020202050003000300030003000000000300000003000000000003000300030003000300030000000300000003000000030003000300030000000000000000000300030000000300030000010208000102070002020202070006020700030003000a0202000602020207000102070003000a020700010202020202020207000602020207000300000300030003000000000000000000000000000000030003000000000000000000030000000300030000000300000000000000000000000000000003000003000602090205000102020204020500010205000602070001020200010202020700020208000300010207000102020202020500020202020202080000030000000000030003000000030003000300030000000000030000000300000000000000030003000300000003000000000003000000000000000300000602050001020700030002020700060207000a0205000202090205000602020202020500030003000602020207000300010207000102020205000300000000030003000000030000000000000000000300030000000000030000000000000003000000030000000000000003000300000003000000030000000001020700030002020902050001020500020208000602020205000a0205000102020006020202070001020500010207000a0202020700010209020500000300000003000000000003000300030000000300000000000300030003000300000000000000000003000300030000000300000000000300000003000006020500060204020500030003000602050003000102050003000300060209020500010205000202080003000a0205000300010204020700010207000000000300000003000300000003000000030000000300030003000300000000000300030003000000030000000300030000000300030000000300000000020208000300030006020202070002020800010207000602070006020500020207000300060205000a020202070006020500030003000102070003000000000300030003000000000000000000030003000000000000000000030000000000030000000300030000000000000003000300030003000000030000010209020700060205000102020205000602070002020500010205000602050001020700030003000300010202020200060207000300060202020800000300000000000000030003000000030000000000000003000300030000000300030000000300030003000300000000000000000000000000000003000003000202020205000300060205000a02020202020500060207000a020402070006020202070003000a02070003000102020202020500010202000300000300000000000300030000000300030000000000030000000000030003000000000000000000030003000000030003000000000003000300000003000006020202020207000602050003000300010202020800010202020700030001020202020205000300030003000a0207000202050003000a020402070000000000000000000000000300030000000300000003000300000000000000030000000000030003000300030003000000000003000300030003000000000102050003000102050003000602050006020500060209020402050001020700010205000300030006020700030001020202070006020700030003000003000300030003000300030000000300000003000000000003000300030000000300030003000300000000000300030000000000000000000300030000030003000602080003000300010208000102070001020500030006020700010208000300030006020500010207000602040205000202020208000300000300030000000300030003000300030003000000030003000300000000000300030003000300000003000300000000000300030000000000030003000003000a0204020700060207000300030003000102070003000602020202020700030003000300010207000300010205000300060205000300060207000003000300030000000000000000000300030003000000030000000000000000000000030003000300000003000300030000000000030003000000000000030003000300010202020202040207000602090202000300010205000300010202020700030006020202090207000602050003000a020902020205000003000300000003000000000003000000000000000000030003000300030003000000000003000000000000000000000003000300030000000000030000030006020500030001020202070001020202020205000300030003000a0207000202020207000102020205000102020207000300030002020500030000030000000300000003000000000003000000000003000300000003000300000000000000000003000000030003000000000003000300000003000300000300020209020202090205000102070002020402070006020202070006020202020205000102070001020b020902040202020700060202020700030000030000000000000000000300030000000000030000000000000000000000000000000300030000000300030000000300000000000000000000000300000602020202020202050003000300020202020700020205000102050001020202020207000300020207000602020003000102020202020202050003000000000000000000000300030003000000000000000000030003000300030000000000000003000000000000000000030003000000000000000300030000030001020202050003000602070001020202020205000300030003000300010202020500060202020500010205000300030001020202050006020700000300030000000300030000000000030000000000030003000300030003000300000003000000000003000300030003000300030000000300000000000003000602050006020902020202020700020205000300060207000602080003000300060205000202080003000602080006020902020003000102020000030000000300000000000000000000000000030003000000000000000300030003000000030000000300000000000300000000000000030003000000000a020200030003000102020205000202040209020902020202020500030003000602050003000102070001020500060202020202020207000602050000030000000300030003000000030000000300000000000000000003000300030000000300030003000000030003000000000000000000000000000300000300010209020700060202000a0202020700020205000102020003000300060202020700030003000202070003000102020205000202020204020700000300030000000000000000000300000000000000030003000000030003000000000000000300030000000000030003000000030000000000030000000003000602050001020202020207000300010205000300060205000300060202020202050006020800010202020800030003000300010202020902020000030000000300030000000000000003000300030003000000030003000000000000000300000003000300000003000300030003000300000000000000000602040207000300030001020202070003000300030003000300060205000202020207000102070003000102070003000602090207000102020205000000000300000003000300030000000000030003000300030003000000030000000000000003000000030003000000030000000000000003000000030000010207000102070003000300010202020700030003000a0207000102070001020500010209020202070006020202090205000202050003000300030000030000000300000003000300030000000000030003000300000003000000030003000300000000000000000000000000030000000300030003000300000300010207000202080006020700010202020700060208000102090205000300030003000102050001020500020205000300010209020700060207000003000300000000000300000000000300000000000000030003000000030003000300030003000300030003000000030003000300000000000000000000030003000102050003000102050006020500020205000602090202000300030003000a0207000300030006020202070003000300010202020202050000030003000300030003000300030000000300000003000000000000000300030003000300000000000300000000000000030003000300000000000300000300060207000602080003000a020200060205000a020202020205000602080003000300010202020800030001020202070006020800010202020700000300000000000000030000000300000000000300030000000000030000000300030003000300000003000300030000000000000003000300000000000003000202050001020902050003000102020207000300010202000a020202070003000300060205000602080006020202040205000300030001020500000300000003000300000003000300030000000000030003000000030000000000030003000000030000000300000000000300030000000300030003000006020202070006020200060207000602020202020700060202020902020202000602090202000602020006020202020207000602020209020700030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    2222222222222222222222222222222222222222222222222222222222222
    2...............2...2.........2.....2.................2.....2
    2.2.2.222222222.2.2.2.222.222.2.2.2.2.222222222.22222.2.2.2.2
    2.2.2.2.......2.2.2.2.2.2...2.2.2.2.2...2.....2.....2.2.2.2.2
    222.222.22222.2.2.2.2.2.222.222.222.2.2.2.222222222.2.222.2.2
    2...2...2.....2...2.2.2...2.....2...2.2...2.........2.....2.2
    2.2.2.222222222222222.2.222222222.222.2.222.222222222222222.2
    2.2.....2.......2...2...2...2.....2...2.2...2.......2.......2
    2.22222.2.222.2.2.2.22222.222.2222222.2.2.222.22222.2222222.2
    2...2...2.2...2...2...2.....2.......2.2.2.....2.2...2.....2.2
    222.2.222.222222222.2.22222.2222222.222.2222222.2.222.222.222
    2...2.2.....2...2...2.....2...2...2.....2...2...2.....2.....2
    2.222.22222.2.2.222.22222.2.2.2.222222222.2.2.222.22222.222.2
    2...2.....2.2.2...2.2...2.2.2.....2...2...2.2...2.2.....2...2
    222.222.2.222.222.222.2.2.2.22222.2.2.222.222.2.222.2.222.222
    2...2.2.2.....2...2...2...2...2...2.2...2.....2...2.2.2...2.2
    222.2.2.222222222.2.222222222.22222.222.2.2222222.2.2.2.222.2
    2.....2...2.....2...2...2...2...2...2.2.2.2.....2...2.2.....2
    2.2222222.2.222.2222222.2.2.222.2.222.2.2.2.222222222222222.2
    2.2.....2.2...2.......2...2.....2.....2.2...2.2.......2...2.2
    2.22222.2.222.2.22222.22222.2.222222222.2.222.2.22222.2.222.2
    2.......2...2.2.2.....2.....2.2.......2.2.2.2...2...2.2.....2
    22222222222.2.222.222.2.2222222.22222.2.2.2.2.22222.2.2.2.222
    2...2.2...2.2...2...2.......2...2...2.2.2...2.2.....2...2.2.2
    2.2.2.2.2.2.222.222.22222.2.2.222.2.2.2.22222.2.222222222.2.2
    2.2.2...2.2.2...2...2...2.2...2...2.2.2...2...2.....2.....2.2
    2.2.222.2.2.2.2.2.222.2.2.22222.2.2.2.222.2.22222.2.22222.2.2
    2.2.....2...2.2.2.2...2.2.......2.2.2.2...2.2...2.2...2.2...2
    2.2.2.222222222.2.2.222.22222222222.2.2.222.2.2.22222.2.22222
    2.2.2.2.........2.....2.2...2.2.....2.2.......2...2.2.......2
    2.2.222.22222.222222222.2.2.2.2.22222.22222222222.2.2.22222.2
    2.2...2.2.....2.......2.2.2.2...2.....2.....2.....2.2.2...2.2
    2.222.222.22222.22222.2.222.2.222222222.222.2.22222.2.222.2.2
    2.2.........2...2.....2.....2.......2...2...........2.....2.2
    2.222222222.2.22222.222222222222222.2.222.2.222.22222222222.2
    2.........2.2.2.....2...2...2.......2.2...2...2.2.........2.2
    222222222.2.2.222222222.2.2.2.2222222.222222222.2.2222222.2.2
    2.2.....2.2...2.......2.2.2.2.2.....2.....2...2.2.2.....2...2
    2.2.222.2.22222.22222.2.2.2.2.2.222.22222.2.2.2.2.2.222.22222
    2.2...2.........2...2.2...2...2.2.2...2...2.2...2.....2.2...2
    2.222.2222222222222.2.2222222.2.2.222.222.22222.2222222.2.222
    2...2.2.2.....2.............2.2.2...2.2...2...2.........2...2
    2.222.2.2.222.222.222222222.2.2.222.2.2.222.2.2222222222222.2
    2.2.....2...2.....2...2...2.2.2.....2.2.2...2.2.....2.......2
    2.2.222222222.2222222.2.222.2.2222222.2.22222.2.222.22222.222
    2.2...2.......2.2...2.2...2.2.......2...2.....2.2.2.2.......2
    2.222.2.2222222.2.2.2.222.2.2222222.222.2.222.2.2.2.2.2222222
    2.....2.2.2.....2.2.2.2.2.2...2.....2...2.2...2.2.....2.....2
    222.222.2.2.22222.2.2.2.2.222.2222222.222.2.222.2222222.222.2
    2...2...2.2.2.....2.2.2...2...2...2.......2.......2...2.2.2.2
    2.222.222.2.2.22222.2.2.222.222.2.2.2222222222222.222.2.2.2.2
    2.2...2...2...2.....2...2.....2.2.2.2...2...2...2.2.....2...2
    2.2.22222.22222.2222222.2.222.2.2.2.2.2.2.2.222.2.2.222222222
    2.2.2...2.2...2...2...2.....2.2.2.2...2.2.2.....2.2.2.......2
    2.2.2.2.2.2.2.222.222.2222222.2.2.2.22222.2222222.2.2.22222.2
    2.2...2...2.2...2...2.......2...2.2.2.....2.2.....2...2.....2
    2.2222222.222.22222.2.22222.222.2.2.2.222.2.2.2222222.2.22222
    2.2...2.....2.2.....2.2...2.....2.2.2...2...2.......2.2.2...2
    2.222.2.222.2.2.22222.2.222.22222.2.222.222.22222.2.222.2.2.2
    2.....2...2...2.......2.........2.....2...2.......2.......2.2
    2222222222222222222222222222222222222222222222222222222222222
    `, [myTiles.transparency16,sprites.vehicle.roadTurn1,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection2,myTiles.tile3], TileScale.Sixteen))
