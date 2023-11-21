# DNC News Front-end

This is a News page project created as a Challeng from DNC School. This repository will contain only the front-end. If you wanna look the backend, [access here](https://www.google.com/search?q=was+not+done+yet+dictionary&client=ubuntu-sn&hs=CbH&sca_esv=584099460&channel=fs&biw=960&bih=968&tbs=li%3A1&sxsrf=AM9HkKnL9Sn1zXUBQhTp6G43wgfoWYbSgA%3A1700521223530&ei=B-VbZcHtH9vn1sQPtZG4-AY&ved=0ahUKEwiBjdib19OCAxXbs5UCHbUIDm8Q4dUDCA8&oq=was+not+done+yet+dictionary&gs_lp=Egxnd3Mtd2l6LXNlcnAiG3dhcyBub3QgZG9uZSB5ZXQgZGljdGlvbmFyeTIIECEYoAEYwwRIhBZQxQNY5gZwAXgAkAEAmAGgAaAB6wSqAQMwLjS4AQzIAQD4AQHCAg4QABiABBiKBRiGAxiwA8ICBxAjGLACGCfCAgoQIRigARjDBBgK4gMEGAEgQYgGAZAGBQ&sclient=gws-wiz-serp)

## Table of Contents

- [Technologies](#technologies)
- [Getting started](#getting-started)
- [Deploy on Vercel](#deploy-on-vercel)
- [What I Learned](#what-i-learned)
  - ['use client](#use-client)
  - [Tech Debit concept](#tech-debit)
  - [Type of Form Event](#type-of-form-event)
  - [SideBar slide smoothly](#sidebar-slide-smoothly)


## Technologies
- React
- Typescript
- SCSS
- Framework: NextJS

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

### Type of Form Event

When trying to handler the Form event, the correct Type is `React.FormEvent`, or I can use `React.FormEvent<HTMLInputElement>`

### SideBar slide smoothly

I was facing a problem in the slide of sidebar. To opening it was opening well, but when I was closing, the slide bar was removed from DOM before the animation even started.

So I had to create a second flag:

```typescript
const [opening, setOpening] = useState(false);
```

Then I used in button the first flag of opening to change the animation to closing animation, then, after the 2000ms they set off the MenuLateral out of DOM :

```ts
        onClick={() => {
          setOpening(!opening);

          setTimeout(() => {
            setMenuLateral(!menuLateral);
          }, 2000);}}

```
