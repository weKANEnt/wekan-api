# uwiVotes Dev Set-Up

Hey ladies! Ready to dev? Okay. Following the instructions carefully to begin. I know this is your first time using some of these technologies so I am going to try and be as detailed as possible with the set up.

## Installing Dependencies

First run `npm install`. This is assuming you already have [node.js](https://nodejs.org/en/) installed. If you don't start there - click the embedded link to get there.

Okay, so at this point you have all dependencies installed and _should_ be able to move on no problem.

## Creating your local database

As discussed and agreed, we will be using postgres (PostgreSQL) alongside Sequelize as our ORM. Before we get to the ORM, we first need to set up our database.

_NB: we all will have different instances of this database and records will not sync. It is *local*_

Run the following in your terminal

```shell
psql -U postgres
```

This will open the PostgreSQL interactive terminal. See more Postgres Documentation [here](https://www.postgresql.org/docs/current/app-psql.html).

You should now be in the terminal as the user _postgres_ seeing something like this:

```shell
postgres=#
```

If at any time you want to quit this terminal, you must use `\q`. ctrl + C will not work here. Next, do the following in the postgres terminal:

```shell
postgres=# CREATE DATABASE uwivotes;
postgres=# \c uwivotes;
```

If this is successful, running `\c` in ther terminal as seen above should connect you to the new database that you just created. Also, if you run `\dt` at this point, you should see a message telling you that it did not find any relations.

Now, we need to creat a password so we can not only secure the database but construct our URI string. Run the following:

```shell
postgres=# \password postgres
```

You should see 'Enter new password:' in the terminal now. So that we keep one uri string for the most part - let me know when you need it and I will give it to you.

_To be continued..._

## Starting the Dev Server

To start the server run

```shell
    npm run dev-start
```

You can check out the script `dev-start` in the package.json file to see what it does. When you see `Server is running` in the terminal, go to your localhost and "access" [Port8080](http://127.0.0.1:8080/). That's the server up and running. All API calls originate from and go to this point. If you make any changes to the code and save, because of _nodemon_ the sever will automatically restart so do not worry about that.

## File Structure

Most of our work will be done within the _src_ folder. Since we went with the _Layered Architecture_ note the following:

view (FE) <- app (inside api folder w/ routes) <- logic <- db folder

Try your best not to interfere with any config files unless you are absolutely sure what you would be changing. An untraceable accidental change could potentially cause madness.

## All files/info you will need from me

So files/info are going to be gitignored for either security reasons or those files just not being needed in the repo. Here's a comprehensive list:

- .env file
- db pw
