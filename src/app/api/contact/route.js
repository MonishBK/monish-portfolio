import dbConnect from "@/utils/dbconnect";
import ContactMe from "@/models/contact";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConnect();

        await ContactMe.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
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