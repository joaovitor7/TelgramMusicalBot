const { create } = require('domain')
const fs = require('fs')
const path = require('path')

class Composer{
   
    createSong(musicalNotes){
        const fileNameResult = './assets/result.ogg'
        var songComposed = fs.createWriteStream(fileNameResult)
        this.addNotes(musicalNotes, songComposed)

        return fileNameResult
    }

    addNotes(musicalNotes, songComposed){
        
        if (!musicalNotes.length) {
            songComposed.end("Done")
            return 
        }
    
        this.currentFilePath = `./assets/oggFiles/${musicalNotes.shift()}.ogg`
        let path = this.currentFilePath
        
        fs.createReadStream(path)
        .pipe(songComposed, {end: false})
        .on("end", () => {
            console.log(path + ' appended')
            addNotes(musicalNotes, songComposed)        
        })

    }

}

module.exports = new Composer