# beatboop

Cloud player take-home assignment for [redacted].

## Requirements

* Result list with title, artist, duration and a play button.
* You can play back the music using the soundcloud widget player. (Bonus: Play back the track using web audio)
* Use AngularJS, React or other Javascript framework of your choice. No server-side code.
* If you want to: make it with a twist if you like – fancy graphics, odd javascript library, animations, audio effects.
* It should have at least one test.
* It should have a readme file.
* Upload the assignment and a readme file to Google Drive as a zip file and share it.

## Setup

In the root of the project, create a file called `.env.local` and add your Soundcloud API key like this:

```
REACT_APP_SOUNDCLOUD_API_KEY=replacethistextwithyourkey
```

Run `yarn` and then `yarn start` and the app will fire up on http://localhost:3000/. If you have any trouble with it, the app's already online at https://hen.cat/beatboop as well. But these dependencies are fairly standard create-react-app stuff so I'd be surprised if there was any tricky `yarn` errors to deal with unless you're running one of those shiny new M1 Macbooks or something.

The API key you included with the assignment sometimes gets rate limited (429 Too Many Requests), so so keep an eye out for that because there's been a few times when I thought I had a bug in my code which turned out to be the rate limit. I tried to create a new key but it looks like Soundcloud have closed down their developer program for now.

## Notes

I've hit all the requirements, and tried to build something that's reasonably robust on mobile devices and accessible to screen reader users as well as keyboard-only users.

Instead of having a play button per search result, I made each search result into one big button each. This makes for quite a nice screen reader UX where the narrator announces each item in the result list as "Button, play ${track name} by ${artist}", allowing the user to hit play immediately instead of poking around in a soup of elements to find the play button.

Some of the styling might be a little surprising at first glance, especially the absolute positioning of the #root element. Mobile Safari is the main browser our visitors use at my current job so I have a lot of habits around optimizing for that browser. If you open this app in mobile Safari you'll notice that there's no annoying whole-page scroll bounce effect because the UI
fits exactly in the viewport. The mobile Safari bottom bar is also visible on page load, which means the user can tap the search results even at the very bottom of the element without having their first tap ignored by Safari to instead summon the bottom bar (very annoying browser behaviour!).

I didn't have time to do lots of stuff I'd have liked to do. One thing I had to leave out was handling landscape orientation nicely on phones. It's still perfectly functional in landscape but I'd like to have gotten it a bit more pixel-perfect. I also deliberately didn't do any desktop-specific layout work which was partially to save time for the exercise, and partially because I think mobile-first MVP implementations are often good enough for production use anyway and if people AB tested the introduction of their desktop-specific layouts they'd often find they don't have much impact on key metrics. The hardest thing to leave out was that I'd have loved to spend a while making it beautiful. At least it's a very robust foundation to add that kind of polish to.

I might have extracted a few more components from `<Player />` and `<Search />` with a little more time. But I do really like the balance the code strikes right now because the only components extracted into `src/app/components` are ones that are actually used in more than one place. I think that's often a good heuristic for whether a component should be extracted or not, but I'm generally pretty flexible these days about those kinds of refactoring decisions as they tend to vary a lot between teams.
