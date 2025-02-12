export const AddEmployeeController = async(req, res)=>{
    const {first_name,last_name,email,phone,role} = req.body;
    if(!first_name,!last_name,email,phone,role){
        return res.status(401).body({
            success: false,
            message: "All feilds should be filled"
        })
    }

    const response = await AddEmployeeService(res,first_name,last_name,email,phone,role);
    if(response.success){
        res.status(201).send(response)
    } else {
        res.status(402).send(response)
    }
}