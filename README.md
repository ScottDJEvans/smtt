This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

View my work at [http://localhost:3000/document-search](http://localhost:3000/document-search) 

## Architecture & changes
Due to the amount of user interactivity and the nature of said interactivity, I opted to have an initial React Server Component/SSR rendered page which would then have client rendered child components - `Dashboard` and its subsequent children specifically. I also opted to use regular JS and ShadCN components to save time and dedicate those savings to making sure the key objectives were met.


The file structure is as follows:
```
/app
  /document-search
    /page.js
      /components
        /ApproveSection.js
        /constants.js
        /Dashboard.js
        /EditRegexSection.js
        /MainDocumentArea.js
        /Sidebar.js
        /utils.js
```
With ShadCN generating it's own `components/ui` folder for its implementations.


With additional time, I would have refactored the `components` folder to more subdirectories to seperate the UI concerns and hopefully make more sense to someone glancing over it. Same for both `utils.js` and `constants.js` - I would have moved them one level up into the `document-search` folder.  I don't believe that either should have been moved to a more abstract/base level due to their closely tied nature with this specific page & area.

Additionally, the lack of polish for styling was regrettable - though throughout my work I always ensure a good base is built first to then 'paint' over, so at least my methodology was consistent in this task too! 

In terms of assumptions, one that gave me a slight headache and additional overhead was making sure all of the regex matches were displayed simultaneously and not on individual selection in the `EditRegex` section (though this is the case for the `ApproveSection`). However, this did in turn allow me to refactor the helper function I previously created to perform the regex search and split it to be more concise/clear about it's intention & usage.


In hindsight I could have used potentially another few ShadCN components, I even discussed in one of the MR's about implementing grouping of select values in the `ApproveSecton`, which would have been relatively straight-forward given I had time remaining.

Unfortunately I did not get to implement saving/retrieving expressions due to the time limit, but I would have used cookies (as they're SSR-friendly) via `next/headers` to retrieve at the `page.js` level.

But in closing, I'm mostly satisfied as I at least hit majority of the objectives of the task within the 6 hour time limit, and I really appreciate the opportunity!
Again, my work is available to view here:

http://localhost:3000/document-search

