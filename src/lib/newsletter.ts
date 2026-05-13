export const NEWSLETTER_SIMULATED_DELAY_MS = 1200;

export type SubscribeNewsletterResult = {
  ok: boolean;
};

export async function subscribeNewsletter(
  email: string
): Promise<SubscribeNewsletterResult> {
  void email;
  await new Promise((r) => setTimeout(r, NEWSLETTER_SIMULATED_DELAY_MS));
  return { ok: false };
}
