import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

export async function POST(request: NextRequest) {
  try {
    const reqBody: any = await request.json();
    const {email, subject, message} = reqBody;

    // console.log(email, subject, message);

      sendEmail({email, subject, message});

    return NextResponse.json({
      message: "Email sent successfully!",
      success: true
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
