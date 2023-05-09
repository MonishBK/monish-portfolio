import dbConnect from "@/utils/dbconnect";
import Project from "@/models/projects";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConnect();
        console.log(body);
        await Project.create(body);

        return NextResponse.json({
            message:"Project added successfully!",
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