import { describe, expect, it } from "vitest";
import { whatsappLink } from "@/lib/site";

describe("WhatsApp link", () => {
  it("uses the client's real number with encoded message", () => {
    const url = whatsappLink("Olá!");
    expect(url).toBe("https://wa.me/5562996644803?text=Ol%C3%A1!");
  });
});
