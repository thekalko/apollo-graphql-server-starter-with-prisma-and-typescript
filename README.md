<div align="center">
  <h1>🚀 Boilerplate for Apollo GraphQL Server w/ Prisma and TypeScript</h1>
</div>

## Getting Started

### 1. Install dependencies
```
yarn install
```

### 2. Set yout database

#### optional - create MySQL docker

```
cd prisma
docker-compose up -d
```

#### set up your database url in your prisma/.env file

```
DATABASE_URL=
```

### 4. Start the GraphQL server
```
yarn dev
```

## License
MIT