import { Schema,model,models } from "mongoose";

const projects = new Schema({
    title: {
        type: String,
        required: true
    },
    language:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    github_link:{
        type:String,
        required: true
    },
    youtube_link:{
        type:String,
        required: true
    },
    pic_name:{
        type:String,
        required: true
    }
});

const Project = models.Project || model("Project",projects);

export default Project;
