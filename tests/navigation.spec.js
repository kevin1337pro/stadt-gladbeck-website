import { expect, test } from "@playwright/test";

const pageErrors = new WeakMap();

async function openMenu(page) {
  await page.getByRole("button", { name: "Men\u00fc", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.locator('[data-open-panel="rathaus"]')).toBeFocused();
}

test.beforeEach(async ({ page }) => {
  const errors = [];
  pageErrors.set(page, errors);
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
});

test.afterEach(async ({ page }) => {
  expect(pageErrors.get(page)).toEqual([]);
});

test("full menu contrast is selectable and remembered", async ({ page }) => {
  await openMenu(page);
  const contrast = page.locator(".menu-contrast");
  await contrast.click();
  await expect(contrast).toHaveAttribute("aria-pressed", "true");
  await expect
    .poll(() =>
      page
        .locator('[data-open-panel="sport"] strong')
        .evaluate((el) => getComputedStyle(el).opacity),
    )
    .toBe("1");
  await page.reload();
  await openMenu(page);
  await expect(contrast).toHaveAttribute("aria-pressed", "true");
});

test("native touch swipes move news and menu without opening a link", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "Native touch is checked in the mobile project.");
  const session = await page.context().newCDPSession(page);
  const swipe = async (from, to) => {
    await session.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [from],
    });
    for (let i = 1; i <= 12; i++) {
      await session.send("Input.dispatchTouchEvent", {
        type: "touchMove",
        touchPoints: [
          {
            x: from.x + ((to.x - from.x) * i) / 12,
            y: from.y + ((to.y - from.y) * i) / 12,
          },
        ],
      });
      await page.waitForTimeout(18);
    }
    await session.send("Input.dispatchTouchEvent", {
      type: "touchEnd",
      touchPoints: [],
    });
  };
  const rail = page.locator("[data-pulse-viewport]");
  await rail.scrollIntoViewIfNeeded();
  const newsBox = await rail.boundingBox();
  const y = newsBox.y + newsBox.height / 2;
  await swipe(
    { x: newsBox.x + newsBox.width * 0.85, y },
    { x: newsBox.x + newsBox.width * 0.2, y },
  );
  await expect
    .poll(() => rail.evaluate((el) => el.scrollLeft))
    .toBeGreaterThan(100);
  await expect(page).toHaveURL(/\/$/);
  await openMenu(page);
  const list = page.locator(".menu-level--root .menu-wheel-list");
  const menuBox = await list.boundingBox();
  const x = menuBox.x + menuBox.width / 2;
  await swipe(
    { x, y: menuBox.y + menuBox.height * 0.7 },
    { x, y: menuBox.y + menuBox.height * 0.2 },
  );
  await expect
    .poll(() => list.evaluate((el) => el.scrollTop))
    .toBeGreaterThan(100);
  await expect(page.locator("#menu-track")).toHaveAttribute(
    "data-current-panel",
    "root",
  );
});

test("all topics open, return to the selected topic and close with focus restored", async ({
  page,
}) => {
  await openMenu(page);
  await expect(page.locator("main")).toHaveAttribute("inert", "");
  for (const id of [
    "rathaus",
    "familie",
    "wohnen",
    "wirtschaft",
    "kultur",
    "sport",
  ]) {
    const trigger = page.locator('[data-open-panel="' + id + '"]');
    await trigger.click();
    const panel = page.locator("#menu-panel-" + id);
    await expect(panel).not.toHaveAttribute("inert", "");
    await expect(panel.locator("a").first()).toBeFocused();
    await expect(panel.locator("a")).toHaveCount(3);
    await panel.getByRole("button", { name: "Alle Themen" }).click();
    await expect(trigger).toBeFocused();
  }
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(
    page.getByRole("button", { name: "Men\u00fc", exact: true }),
  ).toBeFocused();
  await expect(page.locator("main")).not.toHaveAttribute("inert");
});

test("a normal menu click follows the service link", async ({ page }) => {
  await page.route("https://serviceportal.gladbeck.de/**", (route) =>
    route.fulfill({
      contentType: "text/html",
      body: "<h1>Serviceportal Ziel</h1>",
    }),
  );
  await openMenu(page);
  await page.locator('[data-open-panel="rathaus"]').click();
  await page.locator("#menu-panel-rathaus a").first().click();
  await expect(page).toHaveURL("https://serviceportal.gladbeck.de/");
  await expect(
    page.getByRole("heading", { name: "Serviceportal Ziel" }),
  ).toBeVisible();
});

test("search understands service terms and alternative umlaut spelling", async ({
  page,
}) => {
  await openMenu(page);
  const search = page.getByLabel("Services und Themen im Men\u00fc suchen");
  await search.fill("Personalausweis");
  await expect(page.locator("#menu-results a")).toHaveCount(1);
  await expect(page.locator("#menu-results a")).toContainText("Serviceportal");
  await search.fill("buecherei");
  await expect(page.locator("#menu-results a")).toContainText(
    "Stadtb\u00fccherei",
  );
  await search.fill("<img src=x onerror=alert(1)>");
  await expect(page.locator(".menu-empty")).toBeVisible();
  await expect(page.locator("#menu-results img")).toHaveCount(0);
  await page.keyboard.press("Escape");
  await expect(search).toHaveValue("");
  await expect(page.locator(".menu-stage")).toBeVisible();
});

test("keyboard navigation reaches the last topic and focus stays inside the dialog", async ({
  page,
}) => {
  await openMenu(page);
  await page.keyboard.press("End");
  const last = page.locator('[data-open-panel="sport"]');
  await expect(last).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("#menu-panel-sport a").first()).toBeFocused();
  await page.keyboard.press("ArrowDown");
  await expect(page.locator("#menu-panel-sport a").nth(1)).toBeFocused();
  await page.keyboard.press("ArrowLeft");
  await expect(last).toBeFocused();
  const close = page.locator(".menu-close");
  await close.focus();
  await page.keyboard.press("Shift+Tab");
  await expect(
    page.locator('.menu-shortcuts a[href="#barrierefreiheit"]'),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(close).toBeFocused();
});

test("local shortcuts close the menu and focus the destination", async ({
  page,
}) => {
  await openMenu(page);
  await page.locator('.menu-shortcuts a[href="#quicklinks"]').click();
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(page.locator("#services-title")).toBeFocused();
  await expect(page).toHaveURL(/#quicklinks$/);
});

test("news controls reach both ends without trapping the page scroll", async ({
  page,
  isMobile,
}) => {
  const rail = page.locator("[data-pulse-viewport]");
  await rail.scrollIntoViewIfNeeded();
  await expect(page.locator("[data-pulse-prev]")).toBeDisabled();
  await page.locator("[data-pulse-next]").click();
  await expect
    .poll(() => rail.evaluate((el) => el.scrollLeft))
    .toBeGreaterThan(200);
  await rail.focus();
  await page.keyboard.press("Home");
  await expect.poll(() => rail.evaluate((el) => el.scrollLeft)).toBeLessThan(2);
  if (!isMobile) {
    await rail.hover();
    await page.mouse.wheel(0, 220);
    await expect
      .poll(() => rail.evaluate((el) => el.scrollLeft))
      .toBeGreaterThan(200);
  }
  await page.keyboard.press("End");
  await expect(page.locator("[data-pulse-next]")).toBeDisabled();
  if (!isMobile) {
    await rail.hover();
    const before = await page.evaluate(() => scrollY);
    await page.mouse.wheel(0, 300);
    await expect
      .poll(() => page.evaluate(() => scrollY))
      .toBeGreaterThan(before);
  }
});

test("dragging news cards does not navigate and changes the preview", async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, "Mouse drag is checked in the desktop project.");
  const rail = page.locator("[data-pulse-viewport]");
  await rail.scrollIntoViewIfNeeded();
  const box = await rail.boundingBox();
  await page.mouse.move(box.x + 320, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + 40, box.y + box.height / 2, { steps: 15 });
  await page.mouse.up();
  await expect(page).toHaveURL(/\/$/);
  await expect
    .poll(() => rail.evaluate((el) => el.scrollLeft))
    .toBeGreaterThan(200);
});

test("all story images are present in the production build", async ({
  page,
}) => {
  await page.evaluate(async () => {
    await Promise.all(
      [...document.images].map(async (image) => {
        image.loading = "eager";
        await image.decode().catch(() => {});
      }),
    );
  });
  const broken = await page.evaluate(() =>
    [...document.images]
      .filter((image) => !image.naturalWidth)
      .map((image) => image.currentSrc),
  );
  expect(broken).toEqual([]);
});

test("cards fit narrow, tablet, desktop and enlarged text layouts", async ({
  page,
}) => {
  for (const width of [320, 390, 760, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.evaluate(() => document.fonts.ready);
    const overflows = await page.evaluate(() => {
      const selectors =
        ".pulse-card, .quicklink-card, .theme-card, .news-card, .agenda-item, .video-slot, .access-card, .story-card";
      return [...document.querySelectorAll(selectors)].flatMap((card) => {
        const bounds = card.getBoundingClientRect();
        return [...card.querySelectorAll("h3, p")]
          .filter((text) => {
            const rect = text.getBoundingClientRect();
            return (
              rect.left < bounds.left - 1 ||
              rect.right > bounds.right + 1 ||
              rect.top < bounds.top - 1 ||
              rect.bottom > bounds.bottom + 1 ||
              text.scrollWidth > text.clientWidth + 1
            );
          })
          .map((text) => text.textContent);
      });
    });
    expect(overflows, "Overflow at " + width + "px").toEqual([]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    ).toBe(true);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => {
    document.documentElement.style.fontSize = "200%";
  });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth + 1,
    ),
  ).toBe(true);
});

test("a short landscape screen still shows the selected menu link fully", async ({
  page,
}) => {
  await page.setViewportSize({ width: 844, height: 390 });
  await openMenu(page);
  await page.locator('[data-open-panel="rathaus"]').click();
  const link = page.locator("#menu-panel-rathaus a").first();
  const visible = await link.evaluate((el) => {
    const linkBounds = el.getBoundingClientRect();
    const viewport = el.closest(".menu-wheel-list").getBoundingClientRect();
    return (
      linkBounds.top >= viewport.top && linkBounds.bottom <= viewport.bottom - 8
    );
  });
  expect(visible).toBe(true);
});

test("enlarged menu text switches to a readable scrolling list", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => {
    document.documentElement.style.fontSize = "200%";
  });
  await openMenu(page);
  await expect(page.locator(".menu-panel")).toHaveClass(/is-reflow/);
  await page.keyboard.press("End");
  const last = page.locator('[data-open-panel="sport"]');
  await expect(last).toBeFocused();
  await expect(last).toBeInViewport();
  await page.keyboard.press("Enter");
  await expect(page.locator("#menu-panel-sport a").first()).toBeFocused();
  await expect(page.locator("#menu-panel-sport a").first()).toBeInViewport();
});

test("reduced motion disables animation and the newsletter stays an honest demo", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await openMenu(page);
  expect(
    await page
      .locator(".menu-panel")
      .evaluate((el) => getComputedStyle(el).transitionDuration),
  ).toBe("0s");
  await page.keyboard.press("Escape");
  await page.locator("#newsletter-email").fill("test@example.com");
  await page.locator("#newsletter-consent").check();
  await page.getByRole("button", { name: "Anmeldung ausprobieren" }).click();
  await expect(page.locator("#newsletter-feedback")).toContainText(
    "keine Daten gespeichert",
  );
});
