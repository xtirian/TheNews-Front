# DNC News Front-end

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## What I learned

### 'use client'

When I first passed the CadastroForm to the Cadastro Page, I got thi Error message:

```bash
Error: Event handlers cannot be passed to Client Component props.
  <form onSubmit={function} children=...>
                 ^^^^^^^^^^
If you need interactivity, consider converting part of this to a Client Component.
```

To solve this, I had inform on top of the file where I am using the component this line

```tsx
"use client";
import React from "react";
```

### Tech Debit

Learned a notation when I have something that I have to left behind to finish later.

```tsx
//TODO describe what I have to do later

```
