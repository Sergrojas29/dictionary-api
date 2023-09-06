const sendResponse = require("../utils/common")
const { references, dictionaries } = require("../utils/constants")

const handler = async () =>{
    try {
        sendResponse(200,{dictionaries:dictionaries})
    } catch (error) {
        sendResponse(400,{message: `Error: ${error}`})
    }


}