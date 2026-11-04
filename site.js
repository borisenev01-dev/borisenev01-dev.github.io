// Links that change at launch live here, so the pages never need editing for them.
const SWAGEWORK = {
  // Lemon Squeezy checkout link for "SwageWork 1.x" (same as buyUrl in src/shared/license.ts).
  // While empty, Buy buttons say "Coming soon".
  buyUrl: '',
  downloadUrl: 'https://github.com/borisenev01-dev/swagework-releases/releases/latest'
}

for (const a of document.querySelectorAll('[data-download]')) a.href = SWAGEWORK.downloadUrl

const buy = document.querySelectorAll('[data-buy]')
if (SWAGEWORK.buyUrl) {
  for (const a of buy) {
    a.href = SWAGEWORK.buyUrl // a plain link: no third-party script runs until someone chooses to buy
  }
} else {
  for (const a of buy) {
    a.removeAttribute('href')
    a.setAttribute('aria-disabled', 'true')
    a.textContent = 'Coming soon'
  }
}

for (const el of document.querySelectorAll('[data-year]')) el.textContent = String(new Date().getFullYear())
