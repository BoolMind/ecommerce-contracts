# Ecommerce Contracts

`@ecommerce/contracts` contains the shared Protocol Buffer contracts used by the Ecommerce Microservices.

These contracts define the gRPC interfaces and message structures used for communication between services.

## Responsibilities

* Define gRPC services
* Define protobuf messages
* Define request and response structures
* Maintain shared service contracts
* Provide generated TypeScript types and gRPC interfaces

## Architecture

```text
                    Ecommerce Contracts
                           |
             ---------------|---------------
             |              |              |
             v              v              v
       API Gateway    User Service    Catalog Service
```

## Tech Stack

* Protocol Buffers
* gRPC
* TypeScript
* Buf
* Buf Build
* ts-proto / generated TypeScript code

## Structure

The repository contains protobuf definitions and generated contract code.

Example:

```text
proto/
├── user.proto
├── product.proto
└── category.proto
```

The exact structure may vary as the contracts evolve.

## Installation

```bash
npm install
```

## Build

```bash
npm run build
```

## Usage

The generated contracts are consumed by the API Gateway and microservices to ensure that gRPC communication follows a shared interface.

## Design Principles

This repository should contain:

* API contracts
* Protobuf definitions
* Generated contract code

Business logic should not be implemented here.

## Related Repositories

* [API Gateway](https://github.com/BoolMind/api-gateway)
* [User Service](https://github.com/BoolMind/user-service)
* [Catalog Service](https://github.com/BoolMind/catalog-service)
* [Ecommerce Common](https://github.com/BoolMind/ecommerce-common)

## License

Private project developed under BoolMind.
