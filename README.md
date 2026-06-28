# Baja Norte — Surf & Spear Expedition 🌊🐟

An interactive trip-planning map for a surf + spearfishing road trip down the
Pacific coast of northern Baja California — **late August 2026**, Tijuana →
Santa Rosaliíta (~350 mi).

**Live map:** https://isaacmenge.github.io/baja-trip/

Every spot is scored honestly for the late-August window (south-swell season),
with a swell-window compass, spearfishing notes, lodging, hazards, forecast
links, and the original notes from a friend who knows the coast. Trip-wide
driving/gear/etiquette intel lives in the **Field Notes** panel.

### Deep links
Link straight to one spot by adding its id, e.g.
`https://isaacmenge.github.io/baja-trip/#punta-baja`

### Edit the spots
All data lives in [`data/spots.js`](data/spots.js) — coordinates, ratings, and
notes are easy to tweak. Pins flagged `approx` still need on-the-ground / local
confirmation.

Built with [Leaflet](https://leafletjs.com/) + Esri satellite imagery. No build
step, no API keys — just static files.
