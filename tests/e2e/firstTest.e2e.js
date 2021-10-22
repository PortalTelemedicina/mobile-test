describe('App', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it('should show the step one message', async () => {
    await expect(element(by.id('title'))).toBeVisible();
    await element(by.id('btn-count')).tap();
    await expect(element(by.id('count'))).toHaveText('1');
  });
});
