import { NextResponse } from "next/server";
import { connectSellerSprite, isSellerSpriteConfigured } from "@/lib/sellersprite/client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!isSellerSpriteConfigured()) {
    return NextResponse.json(
      { ok: false, configured: false, message: "卖家精灵 MCP 密钥尚未配置" },
      { status: 503 },
    );
  }

  let connection: Awaited<ReturnType<typeof connectSellerSprite>> | undefined;

  try {
    connection = await connectSellerSprite();
    const result = await connection.client.listTools();

    return NextResponse.json({
      ok: true,
      configured: true,
      service: "卖家精灵 MCP",
      toolCount: result.tools.length,
      checkedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { ok: false, configured: true, message: "卖家精灵 MCP 连接失败，请检查密钥或服务状态" },
      { status: 502 },
    );
  } finally {
    await connection?.close();
  }
}
