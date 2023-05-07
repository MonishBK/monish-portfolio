import dbConnect from "@/utils/dbconnect";
import Project from "@/models/projects";
import {NextResponse} from "next/server";

export async function GET(req,{params}) {
    try {

        const _id = params.id;
        await dbConnect();

        let data = await Project.findById({_id})

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