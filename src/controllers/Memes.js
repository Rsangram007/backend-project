let axios = require("axios")

let memes = async function (req, res) {
    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        // let username = req.query.username
        // let password = req.query.password
        let options = {
            method: "post",
            // url:`https://api.imgflip.com/caption_images?template_id=${memeId}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=Agduke&password=aakash1234`
            //url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=Agduke&password=aakash1234`
        }
        let result = await axios(options)
        res.send({ data: result.data })
    } catch (err) {
        res.status(500).send({ status: false, msg: "server error" })

    }
}

module.exports.memes = memes