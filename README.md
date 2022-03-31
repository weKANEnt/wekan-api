# uwiVotes Dev Set-Up

Hey ladies! Ready to dev? Okay. Following the instructions carefully to begin. I know this is your first time using some of these technologies so I am going to try and be as detailed as possible with the set up.

## Installing Dependencies

First run `npm install`. This is assuming you already have [node.js](https://nodejs.org/en/) installed. If you don't start there - click the embedded link to get there.

Okay, so at this point you have all dependencies installed and _should_ be able to move on no problem.

## Creating your local database

As discussed and agreed, we will be using postgres (PostgreSQL) alongside Sequelize as our ORM. Before we get to the ORM, we first need to set up our database.

_NB: we all will have different instances of this database and records will not sync. It is *local*_

Run `psql -U postgres`. This will open the PostgreSQL interactive terminal. See more Postgres Documentation [here](https://www.postgresql.org/docs/current/app-psql.html).

You should now be in the terminal as the user _postgres_ seeing something like this:

```shell
postgres=#
```

## File Structure

Most of our work will be done within the _src_ folder. Since we went with the _Layered Architecture_ note the following:

view (FE) <- app (inside api folder w/ routes) <- logic <- db folder

Try your best not to interfere with any config files unless you are absolutely sure what you would be changing. An untraceable accidental change could potentially cause madness.
