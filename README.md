# RST Checklist Admin

This is a web interface to administer the RST Checklist app. The goal is to allow RST staff to log in and send notifications to everyone with the app.

## Developing

This is a [`create-react-app`][cra] that's been [ejected][], so install [Node.js][], clone this repo, and follow the typical React development workflow:

    npm install
    npm run start

And open [http://localhost:3000](http://localhost:3000). The page will refresh automatically when you make changes.

It uses [this Firebase project][fbdev] for development by default, so you'll either need access to that, or just create a new Firebase project, and copy the pertinent information to [`firebase-adapter.js`][adapter].

## Deploying

If you haven't already, set up the Firebase command-line tool:

    npm install -g firebase-tools
    firebase login

And then whenever you'd like to deploy:

    firebase deploy

[cra]: https://facebook.github.io/react/docs/getting-started.html#create-react-app
[ejected]: https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup
[fbdev]: https://console.firebase.google.com/project/checklistappdev/overview
[adapter]: https://github.com/g11x/rstappadmin/blob/master/src/firebase-adapter.js#L11
[Node.js]: https://nodejs.org
