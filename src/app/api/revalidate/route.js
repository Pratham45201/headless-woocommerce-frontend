import { revalidatePath } from "next/cache";
import { NextResponse, } from "next/server";

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    revalidatePath("/", "layout");
    return NextResponse.json(
      { validate: true, at: Date.now() },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { validate: false, at: Date.now() },
      { status: 400 }
    );
  }
}
