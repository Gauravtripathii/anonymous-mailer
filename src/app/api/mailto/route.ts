import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    //   sendEmail(email, subject, message);
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
