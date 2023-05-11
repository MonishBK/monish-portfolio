
import dbConnect from "@/utils/dbconnect";
import Project from "@/models/projects";
import {NextResponse} from "next/server";


export async function GET() {
    try {

        await dbConnect();
        let data = await Project.find()
 
        return NextResponse.json({
            data
        }, {
            status: 200
        })

    }catch (e) {
        console.log(e)
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}