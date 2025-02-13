export const AddService = async (req,res)=> {
    try {
        const {userId, name, description, price} = req.body;
        if(!userId, !name, !description, !price){
            return res.status(400).send({
                success: false,
                message: "All field shoul be field",
            })
        }
         const response = await AddService_service(userId,name, description,price);
         if(!response.success) return res.status(400).send(response);

         return res.status(201).send(response);
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Error occured while Adding Service at the controller "+ error
        })
    }
}