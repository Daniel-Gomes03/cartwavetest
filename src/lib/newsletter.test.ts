import {
  subscribeNewsletter,
  NEWSLETTER_SIMULATED_DELAY_MS,
} from "./newsletter";

describe("subscribeNewsletter", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("resolve para { ok: false } após o delay simulado", async () => {
    const promise = subscribeNewsletter("user@example.com");
    await jest.advanceTimersByTimeAsync(NEWSLETTER_SIMULATED_DELAY_MS);
    await expect(promise).resolves.toEqual({ ok: false });
  });
});
