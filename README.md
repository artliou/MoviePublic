 # Project Name

Premiere is a movie recommendation engine.

## Team

- [Andrew Hyeon](https://github.com/dshyeon)
- [Kelly Whiting](https://github.com/whithang)
- [Arthur Liou](https://github.com/artliou)
- [James Critelli](https://github.com/jmaxc6)

## Roadmap

View the [project roadmap] (https://docs.google.com/document/d/1G0QEuFhXAR2H6vbSgyYonfQ1UkbpUq5ephmo5YCSVgc/edit?usp=sharing)

## Contributing

See [CONTRIBUTING.md](https://github.com/artliou/premiere/blob/master/CONTRIBUTING.md) for contribution guidelines.

# Table of Contents

1. [Usage](#usage)
2. [Requirements](#requirements)
3. [Development](#development)
    1. [Installing Dependencies](#installing-system-dependencies)
    2. [Install Project Dependencies](#installing-project-dependencies)
    3. [App Configuration](#app-configuration)
4. [Database Initialization](#database-initialization)
    1. [User Setup](#database-user-setup)
    2. [Creation](#database-creation)
    3. [Migration & Data Seeding](#run-migrations-&-data-seeds)
5. [Running the App](#running-the-app)

## Usage

>

## Requirements

- Node 6.9.x
- Redis 3.2.x
- Postgresql 9.6.x
- etc

## Development

### Installing System Dependencies

```
brew install yarn
brew install redis
brew install postgresql
```

Yarn is a replacement for npm. It's faster and *guarantees* consistency -- as you deploy your code in various environments, you won't run the risk of slight variations in what gets installed.

-- output from redis install below --
To have launchd start redis now and restart at login:
  brew services start redis
Or, if you don't want/need a background service you can just run:
  redis-server /usr/local/etc/redis.conf

-- output from postgresql install below --
To have launched start postgresql now and restart at login:
  brew services start postgresql
Or, if you don't want/need a background service you can just run:
  pg_ctl -D /usr/local/var/postgres start

### Install Project Dependencies

```
yarn global add grunt-cli knex eslint
yarn install
```

### App Configuration

Override settings `config/default.json` in any environment by making a copy of `config/ENV.example.json` and naming it `config/ENV.json` and setting the appropriate variable.

For environments that require use of environment variables, you can supply variables as defined in `config/custom-environment-variables.json`.

See https://www.npmjs.com/package/config and https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables

If you are using Atom and don't see these new files, follow instructions here:
http://blog.lukebennett.com/2015/09/21/show-hidden-files-in-atom-sidebar/

If you have any CRLF and LF errors due to a mix between Mac and Windows contributors, run `git config core.autocrlf false`

# Database Initialization

IMPORTANT: ensure `postgres` is running before performing these steps with below command:

`brew services start postgresql`

See [DB_DOCUMENTATION.md](https://github.com/artliou/premiere/blob/master/DB_DOCUMENTATION.md) for more explanation of the DB setup

### Database User Setup

##Postgres
1. Open the postgresql command prompt with `psql postgres`
2. Create a project specific user with this command:
`create role raiders with login password 'theLostApp' createdb;`
3. This user / password is the same as found in the config/default.json file
4. Confirm user was created with this command:
`\du`
5. Exit the prompt with `\q`

Other helpful postgres command lines:
`\l` - list databases
`\c <database>` - connect to a database
`\dt` - list tables in a connected database
`\d <table>` - list columns on a table

##MongoDB
1. run from a command shell to start the db `mongod`
2. some helpful mongo command lines:
`mongo` - start the command shell
`use fetcher` - to switch to our project db
there is only one collection - movies
`db.movies.find()` - to see the content of the movies db

### Database Creation:

Use grunt to create a new database for your development and test environments:

Development environment: `grunt pgcreatedb:default`

Other environments, specify like so: `NODE_ENV=test grunt pgcreatedb:default`

Test environment: `NODE_ENV=test grunt pgcreatedb:default`
Production environment: `NODE_ENV=production grunt pgcreatedb:default`

### Run Migrations & Data Seeds

In terminal, from the root directory:

To migrate to the latest version, run:

`knex migrate:latest --env NODE_ENV`

To rollback a version, run:

`knex migrate:rollback --env NODE_ENV`

To create a new migration after altering schema, run:

`knex migrate:make [migration name]`

Use a descriptive migration name.

To populate the database with seed data, run:

`knex seed:run --env NODE_ENV`

Note: `--env NODE_ENV` may be omitted for development. For example, `knex migrate:latest` will run all migrations in the development environment, while `knex migrate:latest --env test` will migrate in the test environment.

## Running the App

Requirements: 5 Open Tabs

To run webpack build: `yarn run build`

To run server: `yarn run start`

To run your redis server for the session store `redis-server`

To run the search server: `yarn run startm`

To start the database: `mongod`

## To run tests

`yarn run test`

## Deploy to Heroku

Start by creating a new app on Heroku

## Install Heroku Addon for Heroku Postgres

Heroku Postgres - populate the schema by following instructions for `Import`
https://devcenter.heroku.com/articles/heroku-postgres-import-export
step 1: create dump of local db copy: `PGPASSWORD='theLostApp' pg_dump -Fc --no-acl --no-owner -h localhost -U raiders thesis_devel > thesis_devel.dump`
step 2: You can use DropBox to host the saved dump
latest schema load:
 https://www.dropbox.com/s/4e7l2zex29ka0qs/thesis_devel.dump?dl=0
also saved in `thesis_devel.dump`
step 3: import to the heroku postgres db: `heroku pg:backups:restore 'https://www.dropbox.com/s/4e7l2zex29ka0qs/thesis_devel.dump?dl=0' DATABASE_URL --app <app name prod/staging>`
step 4: to force the required SSL connection
`heroku config:set PGSSLMODE=require --app <app_name>`
step 5: to connect to query from you local command prompt:
`heroku pg:psql --app <app_name>`

Additional Example - to update a jsonb field
`update profiles set follow_movies='["59b65fed39aea70343a063df","59b663c23931a704b088b5d0", "59b6561f4843acff45ed1663"]'::jsonb where id=1;`

## Install Heroku Addon for Heroku Redis
Heroku Redis - promote the redis store to the app
`heroku redis:promote <redisStoreName> -a <appName>` (redisStoreName found on Heroku add-on page, looks like below)
`heroku redis:promote redis-rigid-79334 -a raidersofthelostapp-movies`

## Install Heroku Addon for mLab MongoDB

Create a user/password under the `Users` section of the Addon Interface

To connect to query from your local command prompt:
`mongo <mongoDbURL>` (mongoDbURL found on Heroku add-on page, looks like below)
`mongo ds133814.mlab.com:33814/heroku_kbc22vfb -u <username> -p <password>`

`exit`

`mongodump --db fetcher` at regular (not mongo) command prompt to create a backup of the local DB schema

Various options for restoring the db under the `Tools` section of the addon, we used the first one (use the properties for your addon but looks like below):
staging:
`mongorestore -h ds135624.mlab.com:35624 -d heroku_9vff0tpt -u <username> -p <password> dump/fetcher/`
production:
`mongorestore -h ds133814.mlab.com:33814 -d heroku_kbc22vfb -u <username> -p <password> dump/fetcher/`


## Update Configs

Update Heroku Config variables for Facebook, Google, TMDB, OMDB, and Twilio

## Deploy the App from the Local Instance

Your master will auto deploy so if you want to deploy from your branch, follow this command:

`git push heroku <nameofbranch>:master`

## Build the Pipeline for GitHub

Start by connecting to your Github account

> Build the pipeline for staging and update configs to match that environment for callback urls. Need to update Facebook to have multiple developer apps for each environment. Need to add new domains to the Google developers page.
