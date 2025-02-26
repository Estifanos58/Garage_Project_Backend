export const fieldsNotFilled = (res)=>{
    return res.status(400).send({
        success: false,
        message: "All fields Are required"
    })
}

export const errorInServer = (service,error,res) => {
    console.log("Error happened ", error);
    // return res.status(500).send({
    //     success: false,
    //     message: `Error occured at ${service}`
    // })
}

export const sendResponse = (response,res) => {
    if(!response.success){
        return res.status(401).send(response)
    }
    return res.status(200).send(response)
}

export const errorService = (service, error) =>{
    console.log(`Error in ${service}:- ${error} `)
    return {
        success: false,
        message: `Error occured in ${service}`
    }
}