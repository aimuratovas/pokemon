# Pokemon Application

- This project was created utilizing the [PokeAPI](https://pokeapi.co/), [AXIOS](https://axios-http.com/docs/intro), and the [Vite + React Framework](https://vitejs.dev/guide/)!

## Features

- PAGES:

  - Home Page
    - Displays an ordered list of Pokemon names as links
  - Pokemon Page
    - Displays a `Pokemon Card`
  - PokemonTeam Page
    - Displays a list of captured `Pokemon Cards`.

- Tools that were utilized:
  1. React
  2. Axios + PokeAPI
  3. useEffect, useState
  4. React Router
  5. useParams
  6. Props

## Running Tests

To run tests, first ensure you install `vitest` and `TestRenderer` into your project.

```bash
  npm install vitest
  npm install react-test-renderer
```

Now in your `package.json` add the following key to your scripts

```json
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    // Here we are adding the test command to run with npm
    "test": "vitest"
  },
```

Now ensure the `__tests__` folder is inside your `src` folder in your project, then go through each testing file and ensure the functions and imports correlate with your project.

Finally run the test suite with the following command

```bash
  npm test
```
