import { NextResponse } from "next/server";
import { chromium, webkit } from "playwright";

export async function POST(request: Request) {
    const res = await request.json();
    const url = new URL(request.url)
    const params = url.searchParams;
    const isHeadless = params.get('headless') === 'true' ? true : false;

    try {
        const browser = await webkit.launch({ headless: isHeadless });
        const page = await browser.newPage();

        await page.goto("https://google.com");
        await page.fill('textarea[name="q"]', `${res.data.flight_number}`);
        await page.press('textarea[name="q"]', "Enter");

        await page.waitForLoadState("networkidle");

        
        const results = await page.$$(".g");
        const arr = [];
        for (let i = 0; i < Math.min(results.length, 5); i++) {
            const linkElement = await results[i].$("a");
            const linkText = await linkElement?.innerText();
            const linkUrl = await linkElement?.getAttribute("href");
            arr.push(linkUrl);
        }

        await browser.close();
        return NextResponse.json({ res: arr });

    }
    catch (error) {
        return NextResponse.json({ res: error });
    }
}





