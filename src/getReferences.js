const sendResponse = require("../utils/common")
const { references } = require("../utils/constants")

const handler = async () =>{
    try {
        sendResponse(200,{references:references})
    } catch (error) {
        sendResponse(400,{message: `Error: ${error}`})
    }


}