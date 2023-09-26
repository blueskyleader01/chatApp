const generateMessage = (username,text) =>{
    return {
        username,
        text,
        createdAt : new Date().getTime() 
    }
}

const generateLocationMessage = (username,data) =>{
    return {
        username,
        url: `https://www.google.com/maps?q=${data.latitude},${data.longitude}`,
        createdAt : new Date().getTime() 
    }
}


module.exports = {
    generateMessage,
    generateLocationMessage
}