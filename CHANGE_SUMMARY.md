# Change Summary (Local Assets)

## Goal
Serve images/videos from local project files without changing existing `src` / URL strings used throughout the site.

## Changes Made

### 1) `.env.local`
- **Changed** `NEXT_PUBLIC_BASE_URL` from:
  - `https://api.luxorpen.com/v1`
- **To**:
  - `/v1`

This makes all existing code like:
- `${process.env.NEXT_PUBLIC_BASE_URL}/...`
resolve to relative URLs on the same Next.js server.

### 2) `next.config.js`
- **Added** a rewrite rule:
  - `source: "/v1/:path*"`
  - `destination: "/assets/:path*"`

Meaning:
- Any request to `/v1/<something>` is served from the local file:
  - `public/assets/<something>`

## How To Add/Use Local Media

### Mapping Rule
If the app requests:
- `/v1/<SOMETHING>`

Then you must place the file at:
- `public/assets/<SOMETHING>`

### Examples
- Request: `/v1/1.mp4`
  - File: `public/assets/1.mp4`
- Request: `/v1/products/abc.jpg`
  - File: `public/assets/products/abc.jpg`

## Notes
- After changing `.env.local`, you must **restart** the Next.js dev server for changes to apply.
- This approach keeps existing image/video URL construction unchanged in the React/Next pages/components.
