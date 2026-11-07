# Rodlyta Ittabi Ulya — Portfolio

A Next.js App Router portfolio built with TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run lint`, `npm run typecheck`, and `npm run build` to validate a production build.

## Editing projects

Project content, order, image captions, and gallery layouts are managed in [`data/projects.ts`](./data/projects.ts). Project numbers, total count, and next-project links are derived from the array order.

1. Add your project artwork under `public/images/<project-slug>/`.
2. Add one project object to `data/projects.ts`, including its text, cover image, and gallery images with descriptive alt text.
3. Use `layout: "full"` or `layout: "half"` for each gallery image. Leave out optional fields when they do not apply.

The included SVG artwork is original placeholder imagery, intended to be replaced with project images as they become available. Update each image path in the project data when replacing it.
