import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const supabase = await createClient();

    const { error } = await supabase
      .from("intern_applications")
      .insert({
        full_name: body.full_name,
        email: body.email,
        phone: body.phone,
        college: body.college,
        city: body.city,
        social_url: body.social_url,
        motivation: body.motivation,
        resume_url: body.resume_url,
      });

    if (error) throw error;

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
