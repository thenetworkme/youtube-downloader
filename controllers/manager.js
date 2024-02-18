const fs = require('fs')
const path = require('path')
const os = require('os')
const ytdl = require('ytdl-core')
const contentDisposition = require('content-disposition')


async function videoDownloader(req, res) {
try {

    let video = req.body.link
    let info = await ytdl.getBasicInfo(video)
    let title = info.videoDetails.title

//    res.setHeader('Content-Type', 'video/mp4');
//     res.setHeader('Content-Disposition', contentDisposition(`${title}.mp4`), { type: 'attachment'});
    

    const downloadFolderPath = path.join(os.homedir(), 'Downloads')
    const outputPath = path.join(downloadFolderPath, `${title}.mp4`)

     let downloader = ytdl(video);
     const fileStream = fs.createWriteStream(outputPath)
     downloader.pipe(fileStream);

        downloader.on('end', () => {
            res.send('¡La descarga se ha completado exitosamente!');
            console.log('¡La descarga se ha completado exitosamente!')
        });

        downloader.on('error', (error) => {
            console.error('Error al descargar el video:', error);
            res.status(500).send('Ocurrió un error al descargar el video.');
        });


} catch(err) {
    console.log(err)
}
   
  

//     downloader.on("info", (info) => {
//         console.log("Download Started")
//     })

//    ytdl.getInfo(video, (err, info) => {
//         if (err) throw err
//         videoName = info._filename + ".mp4"
//         downloader.pipe(fs.createWriteStream(videoName))
//     })

//     downloader.on("complete", function complete() {
//         'use strict' ;
//         console.log("filename" + info._filename + "already downloaded")
//     })

//     video.on("end", function() {
//             console.log("download is finished")
//     })
}


module.exports.videoDownloader = videoDownloader