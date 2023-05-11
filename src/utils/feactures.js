import Project from "@/models/projects";
import ContactMe from "@/models/contact"
import dbConnect from "./dbconnect";

export const getAllProjects = async () =>{

  try {

    await dbConnect();
    let data = await Project.find();
    return { data }
  } catch (error) {
    return { error: 'Failed to fetch Projects!' }
  }
    
}

export const getProjectByID = async (_id) =>{
  try {

    await dbConnect();
    let data = await Project.findById({_id});
    return { data }
  } catch (error) {
    return { error: 'Failed to fetch Projects!' }
  }
}

export const getAllMessages = async () =>{

  try {

    await dbConnect();

    let data = await ContactMe.find();

     data = JSON.stringify(data)
    return { data } 
  } catch (error) {
    return { error: 'Failed to fetch Projects!' }
  }
    
}
