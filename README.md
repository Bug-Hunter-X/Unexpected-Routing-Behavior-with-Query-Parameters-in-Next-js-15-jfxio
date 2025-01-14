# Unexpected Routing Behavior with Query Parameters in Next.js 15

This repository demonstrates an unexpected routing behavior in a Next.js 15 application when redirecting to a page with query parameters. The redirect works as expected, but the query parameters are not handled correctly on the target page.

## Problem Description

The application consists of two pages: `Home` and `About`.  The `About` page has a button that redirects to the `Home` page with a query parameter. However, even though the redirect takes place, the query parameters are not accessible using `router.query` on the `Home` page. 

## Setup

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm run dev` to start the development server.

## How to Reproduce

1. Navigate to `/about`.
2. Click on the 'Go to Home with Query' button.
3. Observe that the home page is loaded, but the query parameter is missing.

## Solution

The solution involves handling the query parameters directly within the component's `getInitialProps` or the `getServerSideProps` function (or `getStaticProps` if the page is statically generated).

This updated repo shows the correct implementation. 