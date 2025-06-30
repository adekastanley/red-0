A simple, responsive calendar app that lets users attach personal notes to specific dates. Built for the task requirement to demonstrate state management, custom UI, and local data persistence.

Features include

1. Interactive Calendar — built with shadcn calender which wraps react daypicker:
   after using the components={{}} allows us add special features although we loose most of the prebuilt styling provided (which defeats the purpose of using shadcn but i guess it sets it up fot you so thats a plus)
2. Notes System — Add unlimited notes to any date - click add text and hit the arrow to add a new note (note- adding a new notes gets rid of the dummy notes you start with, you'll have to clear storage to get them back)
3. Visual Indicators — Dates with notes are marked with a green dot
4. Popover Interface — View and manage notes via smooth popover cards
5. State Management — Global state using React Context for consistent data handling - added this one later when i figured out how to tie it into a project that wasnt moving between pages but i guess it makes sense in the case of a demo
6. Local Storage — Notes persist after page reloads using localStorage
7. Dummy Notes for Demo — Pre-filled notes for immediate interaction on first visit

Stack
This is a next js project, Tailwind and typescript, to run clone repo and install dependencies- pretty straightforward
