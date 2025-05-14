# Streaming Platform

This project simulates the Rakuten TV streaming platform allowing users to explore multimedia content, view details about movies or series, and play trailers.
Here you can see the simulated home page:

![Image](https://github.com/user-attachments/assets/b47c91c7-e592-49c0-a2eb-1edadb291ef0)

## Features

- **Home Page**: Displays categories with featured content.
- **Content Details**: Provides detailed information about movies or series.
- **Trailer Player**: Plays trailers directly on the platform.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Lazy Loading**: Improves performance by loading components on demand.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: Adds static typing to JavaScript.
- **Styled Components**: For component-based styling.
- **Webpack**: Module bundler.
- **React Router**: For managing application routes.
- **Jest & Testing-library-react**: For unit testing.

## Available Scripts

- `npm run start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs the linter to check code quality.
- `npm run test`: Runs unit tests.

## Requirements
- Node v.^22

## Installation

1. Clone the repository:
```
git clone https://github.com/albertgubau/Streaming-Platform.git
```

2. In the project root directory, install the needed dependencies:
```
npm install
```

3. Modify your etc/hosts file to include:
```
127.0.0.1 localhost.rakuten.tv
```

4. Start the development server:
```
npm start
```

5. Go to the following url in your browser (Incognito mode):
```
http://localhost.rakuten.tv:3000/
```

## Important considerations (SSL and Compatible Devices/OS)

We are not generating any SSL certificates, therefore, it is normal for the web browser to try to redirect to https and fail, not allowing us to see the site's content.
To deal with that issue, I've found that browsing through `http://localhost.rakuten.tv:3000/` in **Incognito Mode** in Chrome solves the problem.

I have not been able to test the project neither in macOS nor iOS, therefore, if you encounter any trouble executing the project in those operative systems, please, open an issue regarding the problematic.

## Next steps/features that I would love to add

![Image](https://github.com/user-attachments/assets/5942c1ab-1279-40ce-8666-b15a4014ca2d)

This project has been developed in record time, and there is plenty of features that I have missed on adding and that I'd have loved to add. Here is a list of them:

- Different Architecture in order to handle the domain and implementation separately.
- Redux to store the home page state and avoid unnecessary re-fetchings (for data-caching or categories like recently seen, favourites etc.).
- Lazy loading of the main content categories in the home page (right now it is fetched all at once and that is not optimum).
- End-to-end tests with Cypress.
- Animations and cool effects on hover.
- Better error handling, for fetchings and also for not found routes.
- Better Suspense fallbacks to handle Lazy loadings of components.
- Cool customized video player controls.
- Disabled hover effects on mobile using `@media(hover:hover)` media query.
- Github actions to ensure the proper deployment pipelines.
- Better typing for the Api Response interfaces.
