import multer from 'multer'
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/')
    },
    filename: function (req, file, cb) {
      cb(null, req.params.id + '.jpg') //Appending .jpg
      //console.log(file.mimetype)
    }
  })
  
export let upload = multer({ storage: storage });
