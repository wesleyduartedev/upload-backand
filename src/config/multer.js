const multer = require("multer")
const { resolve, extname } = require('path');
const crypto = require("crypto");

module.exports = {

  storage: multer.diskStorage({
    destination: (req, res, cb) =>{
      cb(null, resolve(__dirname, '..', '..','tmp','uploads'));
    },
    filename: (req, file, cb) =>{
      crypto.randomBytes(16, (err, res) =>{
        if (err)
          return cb(err);
        
        return cb(null, res.toString('hex') + extname(file.originalname));
      })
    },
    limits: {
      fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
      const allowedMimes = [
        "image/jpeg",
        "image/pjpeg",
        "image/png",
        "image/gif"
      ];
      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error("Invalid file type."));
      }
    }
  
  })
}
  
    //     if (allowedMimes.includes(file.mimetype)) {
    //       cb(null, true);
    //     } else {
    //       cb(new Error("Invalid file type."));
    //     }
    //   }
    // };
    