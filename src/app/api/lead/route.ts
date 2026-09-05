import { NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/schemas";
import { sendLeadEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = leadFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  try {
    const result = await sendLeadEmail(parsed.data);
    if ('skipped' in result || result.error) {
      return NextResponse.json(
        { error: "Enquiries are temporarily unavailable. Please contact us by phone or email." },
        { status: 503 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/lead] failed to send email", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again shortly." },
      { status: 500 }
    );
  }
}
