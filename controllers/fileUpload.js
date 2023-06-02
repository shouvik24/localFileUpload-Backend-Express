const File = require("../models/File");

//localfileUpload -> handler function

exports.localFileUpload = async (req, res) => {
  try {
    //fetch file
    const file = req.files.file;
    console.log("File is here : ", file);

    //create path where file needs to be stored on server
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`; //server path

    //add path to the move function
    file.mv(path, (err) => {
      console.log(err);
    });

    //create a successfull response
    res.json({
      success: true,
      message: "Local File Uploaded Successfully",
    });
  } catch (error) {
    console.log("Error while file uploading is : " + error);
  }
};
