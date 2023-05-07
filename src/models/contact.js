import { Schema,model,models } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    subject:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required: true
    }
},
{
    timestamps:true,
}

);


const ContactMe = models.ContactMe || model("ContactMe",contactSchema);
// const Project = models.Project || model("Project",projects);

export default ContactMe;
