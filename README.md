# sveltePriceEstimator

## This is an example SvelteKit ecommerce pricing estimator, what could become part of a larger platform where users can login and save their estimates / shopping history. 

* Each window estimate is saved to a MySQL Planetscale database using Prisma as an ORM
* Estimates are immediately displayed back to the user using server-side data loading that queries the database for the existance of a user's estimate.
* The app is styled using TailwindCSS.
* The site is password protected since it is for demo purposes and has no built-in auth. Message me to access the live site.

-- This is not deployment ready - it is just to show off my CRUD abilities in SvelteKit using an ORM and simple database.

-- The Login / Logout functionality are not setup at this time.

<img width="1480" alt="Screenshot 2023-12-15 at 9 41 32 AM" src="https://github.com/chasetmartin/sveltePriceEstimator/assets/36861079/8f9ee699-01b8-4f51-be6b-68126146137d">

## Installation

To clone and run this application with a sqlite development db:

* Ensure you have Node > v16 installed on your machine, then:

```bash
# Clone this repository
$ git clone https://github.com/chasetmartin/sveltePriceEstimator.git

# Go into the repository
$ cd sveltePriceEstimator

# Install dependencies
$ npm install
```
```bash
# Change the schema.prisma file to point to your own database
 datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```
```bash
# Initialize your dev database
$ npx prisma db push

# Run the app
$ npm run dev
```
