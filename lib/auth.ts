const encoder = new TextEncoder();

function toHex(bytes: ArrayBuffer) {
  return Array.from(new Uint8Array(bytes)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function toBase64Url(bytes: ArrayBuffer) {
  let binary = "";
  for (const byte of new Uint8Array(bytes)) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

async function hmac(value: string) {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET is not configured");
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return toBase64Url(await crypto.subtle.sign("HMAC", key, encoder.encode(value)));
}

export async function hashPassword(value: string) {
  return toHex(await crypto.subtle.digest("SHA-256", encoder.encode(value)));
}

export async function createSessionToken() {
  const expiresAt = String(Date.now() + 1000 * 60 * 60 * 12);
  return `${expiresAt}.${await hmac(expiresAt)}`;
}

export async function verifySessionToken(token?: string) {
  if (!token) return false;
  const [expiresAt, signature] = token.split(".");
  if (!expiresAt || !signature || Number(expiresAt) <= Date.now()) return false;
  const expected = await hmac(expiresAt);
  if (signature.length !== expected.length) return false;
  let mismatch = 0;
  for (let index = 0; index < signature.length; index++) mismatch |= signature.charCodeAt(index) ^ expected.charCodeAt(index);
  return mismatch === 0;
}
