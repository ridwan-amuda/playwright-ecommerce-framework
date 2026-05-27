async function acceptCookiesIfVisible(page) {
  const consentButton = page.getByRole('button', { name: 'Consent' });

  if (await consentButton.isVisible({ timeout: 5000 }).catch(() => false)) {
    await consentButton.click();
  }
}

module.exports = { acceptCookiesIfVisible };