import { newE2EPage } from '@stencil/core/testing';

describe('progress-ring', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent('<progress-ring></progress-ring>');
    const element = await page.find('progress-ring');
    expect(element).not.toBeNull();
  });
  it('should render textContent', async () => {
    const page = await newE2EPage();
    await page.setContent('<progress-ring percent="30"></progress-ring>');
    const element = await page.find('progress-ring >>> .percentText');
    expect(element.textContent).toEqual('%');
  });
});
