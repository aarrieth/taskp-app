# Task App API

Get all or unique tasks from a database instance of PostgreSQL on Amazon web services. This works with CRUD operations

## API Reference

#### Get all task: root path

```http
  GET /
```

#### Get an unique tasks

```http
  GET /task/{id}
```

#### Post task

```http
  POST /
```

#### Delete an unique tasks

```http
   DELETE /task/{id}
```

#### Update an unique tasks

```http
   PUT /task/{id}
```

## Scripts

This project run:

```bash
  npm run start
```

Development mode:

```bash
  npm run dev
```

To deploy this project run

```bash
  npm run deploy
```

## Run Locally

Clone the project

```bash
  https://github.com/aarrieth/taskp-app.git
```

Go to the project directory

```bash
  cd taskp-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
