import { newE2EPage } from "@stencil/core/testing";
describe("progress-ring", () => {
    it("should render", async () => {
        const page = await newE2EPage();
        await page.setContent("<progress-ring></progress-ring>");
        const element = await page.find("progress-ring");
        expect(element).not.toBeNull();
    });
    it("should render textContent", async () => {
        const page = await newE2EPage();
        await page.setContent('<progress-ring percentage="30"></progress-ring>');
        const element = await page.find("progress-ring >>> .percentageText");
        expect(element.textContent).toEqualText("%");
    });
});
//# sourceMappingURL=progress-ring.e2e.js.map
