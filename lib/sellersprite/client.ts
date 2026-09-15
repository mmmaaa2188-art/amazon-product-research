import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

const DEFAULT_MCP_URL = "https://mcp.sellersprite.com/mcp";
const ALLOWED_HOST = "mcp.sellersprite.com";
const REQUEST_TIMEOUT_MS = 20_000;

export type SellerSpriteConnection = {
  client: Client;
  close: () => Promise<void>;
};

export function isSellerSpriteConfigured() {
  return Boolean(process.env.SELLERSPRITE_SECRET_KEY?.trim());
}

function getServerUrl() {
  const url = new URL(process.env.SELLERSPRITE_MCP_URL || DEFAULT_MCP_URL);

  if (url.protocol !== "https:" || url.hostname !== ALLOWED_HOST || url.pathname !== "/mcp") {
    throw new Error("SELLERSPRITE_MCP_URL 配置无效");
  }

  if (url.search) {
    throw new Error("SELLERSPRITE_MCP_URL 不应包含查询参数");
  }

  return url;
}

export async function connectSellerSprite(): Promise<SellerSpriteConnection> {
  const secretKey = process.env.SELLERSPRITE_SECRET_KEY?.trim();
  if (!secretKey) {
    throw new Error("SELLERSPRITE_SECRET_KEY 尚未配置");
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  const transport = new StreamableHTTPClientTransport(getServerUrl(), {
    requestInit: {
      headers: { "secret-key": secretKey },
      signal: controller.signal,
    },
  });
  const client = new Client({ name: "mjc-amazon-research", version: "1.0.0" });

  try {
    await client.connect(transport);
    clearTimeout(timer);
    return {
      client,
      close: async () => {
        try {
          await client.close();
        } catch {
          // Serverless 请求结束时关闭失败不影响已返回的业务结果。
        }
      },
    };
  } catch (error) {
    clearTimeout(timer);
    try {
      await transport.close();
    } catch {
      // 保留原始连接错误。
    }
    throw error;
  }
}
