<div align="center">
  <h1>🚀 Boilerplate forl Apollo GraphQL Server w/ Prisma and TypeScript</h1>
</div>

## Getting Started

### 1. Install dependencies
```
yarn install
yarn global add prisma-cli
```

### 2. Install the Prisma service
```
cd database
docker-compose up -d
```

### 3. Deploy Prisma
Set up your Prisma endpoint and secret.

database/docker-compose.yml
```
 PRISMA_CONFIG: |
        #set up your prisma management secret
        managementApiSecret: 12345
        port: 4466
```
.env
```
PRISMA_ENDPOINT=
PRISMA_SECRET=
PRISMA_MANAGEMENT_API_SECRET=
```

and deploy prisma

```
pridma deploy
```

### 4. Start the GraphQL server
```
yarn dev
```

## License
MIT