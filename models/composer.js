const { create } = require('domain')
const fs = require('fs')
const path = require('path')

class Composer{

    createSong(musicalNotes){
        const fileNameResult = './assets/result.ogg'
        var songComposed = fs.createWriteStream(returnFileName)
        this.addNotes(musicalNotes, songComposed)

        return fileNameResult
    }

    addNotes(musicalNotes, songComposed){
        
        if (!musicalNotes.length) {
            songComposed.end("Done")
            return 
        }
    
        currentFilePath = `./assets/oggFiles/${musicalNotes.shift()}.ogg`
        
        stream = fs.createReadStream(currentfile)
        stream.pipe(songComposed, {end: false})
        stream.on("end", () => {
            console.log(currentfile + ' appended')
            addNotes(musicalNotes, songComposed)        
        })

    }

}

module.exports = new Composer