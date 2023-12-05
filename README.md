# sveltePriceEstimator

## This is an example SvelteKit ecommerce pricing estimator, what could become part of a larger platform where users can login and save their estimates / shopping history. 

* Each window estimate is saved to a sqlite development database using Prisma as an ORM
* Estimates are immediately displayed back to the user using server-side data loading that queries the database for the existance of a user's estimate.
* The app is styled using TailwindCSS.

-- This is not deployment ready - it is just to show off my CRUD abilities in SvelteKit using an ORM and simple database.

-- The Login / Logout functionality are not setup at this time.

![Screenshot 2023-12-04 at 3 53 29 PM](https://github.com/chasetmartin/svelteCommerce_prisma/assets/36861079/46bc39c7-e7bc-4463-a485-0160261f26cb)

## Installation

To clone and run this application with the sqlite db in its current state:

* Ensure you have Node > v16 installed on your machine, then:

```bash
# Clone this repository
$ git clone https://github.com/chasetmartin/sveltePriceEstimator.git

# Go into the repository
$ cd sveltePriceEstimator

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```
