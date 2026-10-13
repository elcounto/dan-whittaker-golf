# Dan Whittaker Golf mobile app

Native iPhone and Android prototype built with Expo, React Native and TypeScript. A browser preview is included for design review. This is an independent concept, not a published or officially endorsed app.

## Run

From `mobile`:

```powershell
npm install
npm start
```

Scan the Expo QR code with a compatible Expo Go version on a phone on the same network. The project uses Expo SDK 57; if Expo Go does not support that SDK, use an Expo development build. `npm run web` opens the browser preview. `npm run typecheck` checks TypeScript and `npm run export` bundles iOS, Android and web.

## Included

- Home, Videos, Practice and Coaching screens.
- Three YouTube playlist links extracted from https://danwhittakergolf.com/pages/youtube, plus Dan’s channel.
- Collection search, analysis filter and device-local favourites.
- Practice journal with device-local save and delete.
- Website cart button using the exact URL supplied: https://danwhittakergolf.com/cart.
- Verified official downloads, lessons and Team DWG links.

Links open externally. No videos are downloaded or rehosted. The first two playlist labels are editorial because their actual titles could not be retrieved. Playlist cards use original typography rather than unverified thumbnails. This is a static curated library, not a live YouTube feed.

## Store release work still required

Confirm branding and publication permission with Dan, select the publishing owner, and supply the final bundle/package identifiers and developer accounts. No identifiers or Expo account have been invented in the configuration. Configure EAS with `npx eas-cli build:configure`; `eas.json` includes an internal Android APK profile and a production profile.

Confirm whether the requested subscription is a recurring membership or a downloadable course purchase. The supplied cart URL is wired up, but there is no account, entitlement or paid-content integration. Before release, assess external digital-purchase links against the applicable store and regional requirements. Prepare final icons, screenshots, privacy policy and store descriptions; test on physical iPhone and Android devices before submitting. Starter Expo icon files are temporary.

Notes and favourites are stored locally via AsyncStorage. There is no cloud sync, analytics, authentication or backend; uninstalling the app can remove local data.

## Sources

- https://danwhittakergolf.com/
- https://danwhittakergolf.com/pages/youtube
- https://danwhittakergolf.com/pages/downloads
- https://danwhittakergolf.com/pages/lessons
- https://danwhittakergolf.com/pages/team-dwg
- https://www.youtube.com/c/danwhittakergolf

## Dependency audit

The current Expo template reports 22 npm audit findings (7 moderate, 15 high), largely inherited through Expo/Metro tooling. npm proposes incompatible older Expo/React Native versions as fixes; a forced downgrade has not been applied. Review and resolve supported dependency updates before production release.
