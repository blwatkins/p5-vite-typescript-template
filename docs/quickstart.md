---
title: "Quickstart Guide"
layout: post
author:
  - Brittni Watkins
  - Claude Code
date: 2026-08-07
modified_date: 2026-08-08
toc: true
---

## System Requirements

To use this template, you will first need to have the following software installed on your system:

- Node.js - Current version compatibility is specified in `package.json` under the `engines` field
- npm - Bundled with Node.js installation
- Text editor or IDE of your choice - Visual Studio Code and WebStorm are two popular options for TypeScript development. For a pared down developer experience, you can use a text editor like Sublime Text.
- Web browser of your choice for testing and running your sketches

## Getting Started

### Creating a New Project

To create a new project from this template, you can use the GitHub "Use this template" feature to create a new repository based on this template.
Once your new repository is created, you can clone it to your local machine.

Alternatively, you can download the template source code as a ZIP file and extract it to your desired location.

### Installing Dependencies

Once you have created your new project, navigate to the project directory in your terminal and run the following command:

```shell
npm install
```

`npm install` will install all the dependencies required to test and run this project.

### Project Structure

Source code for your sketches should be placed in the `src/` directory.
The `src/sketch.ts` file provided contains a simple p5.js program with a black background and a white circle.

The `index.html` file at the project root is the Vite entry point.
It is a regular, committed HTML file that loads `src/sketch.ts` as a module, and it is where you add page markup and metadata.

This project keeps non-code files in two directories:

- `assets/` holds files imported from your source code, such as `assets/css/sketch.css`. Vite processes them, minifies them, and emits them under content-hashed filenames.
- `public/` holds files copied into the build output unchanged, such as `favicon.ico`. They should be referenced from `index.html` with a root-absolute path (e.g., `/favicon.ico`).

The Vite build configuration lives in `vite.config.ts`.

Builds are written to the `_dist/` directory, which is generated and not committed.

### Running the Sketch on a localhost Development Server

To run your sketch, navigate to the project directory in your terminal and run the following command:

```shell
npm run dev
```

`npm run dev` will check for TypeScript errors, start a localhost development server (`127.0.0.1:8080`), and open a new browser window.
Development server settings live alongside the build configuration in `vite.config.ts`, under the `server` object.

### Available npm Scripts

- `npm run lint:js` - lint repository files with `eslint.config.js.mjs`
- `npm run lint:ts` - lint repository files with `eslint.config.ts.mjs`
- `npm run lint:all` - run both lint configurations in sequence
- `npm run compile` - compile the sketch source code with `tsc` to check for TypeScript errors; this script does not emit any compiled files
- `npm run build` - check for TypeScript errors then build the production bundle with `vite`
- `npm run preview` - check for TypeScript errors then preview the production bundle with `vite preview`; this script will open a new browser window
- `npm run dev` - check for TypeScript errors then start a localhost development server with `vite`; this script will open a new browser window
- `npm run test` - placeholder for a future test runner; the template ships none, and the script exits with an error until one is added
- `npm run validate` - run `lint:all` and `build` in sequence

## Resources and References

For additional information about the software and tools discussed in this guide, the following resources may be helpful:

### Git and GitHub Resources

- [GitHub Docs - Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
- [Learn to Code, with Brittni Watkins - Create and Clone a GitHub Repository](https://blwatkins.github.io/learn-to-code/git/github/create-and-clone-repo.html)

### Unix Shell

- [Learn to Code, with Brittni Watkins - How to Execute a Unix Shell Command](https://blwatkins.github.io/learn-to-code/unix/commands.html#how-to-execute-a-unix-shell-command)
