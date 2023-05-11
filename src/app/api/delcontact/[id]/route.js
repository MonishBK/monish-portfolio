
import dbConnect from "@/utils/dbconnect";
import ContactMe from "@/models/contact";
import {NextResponse} from "next/server";


export async function DELETE(req,{params}) {
    try {

        const _id = params.id;
        await dbConnect();

        await ContactMe.findByIdAndDelete({_id})

        return NextResponse.json({
            message: "deleted Successfully!!.."
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