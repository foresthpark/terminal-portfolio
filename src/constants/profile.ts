import { z } from "zod";

const httpsUrl = z.string().url().startsWith("https://");
const profileSchema = z.object({
  summary: z.string(),
  location: z.string(),
  projects: z.array(z.object({
    name: z.string(),
    description: z.string(),
    url: httpsUrl.optional(),
    github: httpsUrl.optional(),
    tech: z.array(z.string()),
  })),
});

export async function getProfile() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);
  try {
    const response = await fetch("https://resume.forestp.dev/profile.json", {
      signal: controller.signal,
    });
    if (response.ok) {
      const profile = profileSchema.safeParse(await response.json());
      if (profile.success) return profile.data;
    }
  } catch {
    // Commands can still render local content when the profile host is unavailable.
  } finally {
    clearTimeout(timeout);
  }
  return null;
}

export function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
