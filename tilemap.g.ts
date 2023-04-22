// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`1000100004040404040404040404040404040404040201010101010101010101010101040401040104040404040104040401010404010401010401010401040104010404040104040404010404040401010101040401010101010104010101010104010404040404010401010101010401010104040101040104010401040101010101040401040401010101010404040104010404010101010401040101010401010104040404040404050401010104010401040401010101010504010101040101010404010401010405040101010404040104040101040104040401040404010101040401010101010101010101010104030404040404040404040404040404040404`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 . 2 2 2 2 2 . 2 2 2 . . 2 
2 . 2 . . 2 . . 2 . 2 . 2 . 2 2 
2 . 2 2 2 2 . 2 2 2 2 . . . . 2 
2 . . . . . . 2 . . . . . 2 . 2 
2 2 2 2 . 2 . . . . . 2 . . . 2 
2 . . 2 . 2 . 2 . 2 . . . . . 2 
2 . 2 2 . . . . . 2 2 2 . 2 . 2 
2 . . . . 2 . 2 . . . 2 . . . 2 
2 2 2 2 2 2 . 2 . . . 2 . 2 . 2 
2 . . . . . . 2 . . . 2 . . . 2 
2 . 2 . . 2 . 2 . . . 2 2 2 . 2 
2 . . 2 . 2 2 2 . 2 2 2 . . . 2 
2 . . . . . . . . . . . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLightMoss,sprites.dungeon.collectibleInsignia,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
