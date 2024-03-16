// pages/api/myroute.ts

import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET() {
	// Xử lý yêu cầu và phản hồi tại đây
	return NextResponse.json({
		hell: "true",
	});
}
