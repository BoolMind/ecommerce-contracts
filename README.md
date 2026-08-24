# Ecommerce Contracts

`@ecommerce/contracts` is the shared Protocol Buffer contract package for the Ecommerce microservices system.

It defines the service interfaces, request and response messages, common messages, health contracts, and event contracts used for communication between microservices.

The contracts provide a stable communication boundary between services and prevent individual services from depending on each other's internal implementation.

## Responsibilities

- Define gRPC service contracts
- Define gRPC request and response messages
- Define common reusable Protocol Buffer messages
- Define pagination and metadata structures
- Define health-check contracts
- Define user service contracts
- Define catalog service contracts
- Define order service contracts
- Define user event contracts
- Define order event contracts
- Generate TypeScript representations of Protocol Buffer definitions
- Provide contracts consumed by the API Gateway and backend services

## Project Structure

```text
ecommerce-contracts/
├── proto/
│   └── ecommerce/
│       ├── catalog/
│       │   └── v1/
│       │       └── catalog.proto
│       │
│       ├── common/
│       │   └── v1/
│       │       ├── common.proto
│       │       └── health.proto
│       │
│       ├── events/
│       │   └── v1/
│       │       ├── order-events.proto
│       │       └── user-events.proto
│       │
│       ├── order/
│       │   └── v1/
│       │       └── order.proto
│       │
│       └── user/
│           └── v1/
│               └── user.proto
│
├── generated/
├── dist/
├── buf.yaml
├── buf.gen.yaml
├── buf.lock
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Protocol Buffer Contracts

The Protocol Buffer definitions are stored under:

```text
proto/ecommerce/
```

### Common Contracts

Located under:

```text
proto/ecommerce/common/v1/
```

Common contracts contain reusable messages and structures shared across services.

The health contract is also defined in this package and is used by services implementing gRPC health checks.

### User Contracts

Located under:

```text
proto/ecommerce/user/v1/
```

Defines the gRPC interface and messages for User Service operations.

The contract includes request and response messages required for user management.

### Catalog Contracts

Located under:

```text
proto/ecommerce/catalog/v1/
```

Defines the gRPC interfaces and messages used by the Catalog Service.

The catalog contracts cover product and category operations and their associated request and response messages.

### Order Contracts

Located under:

```text
proto/ecommerce/order/v1/
```

Defines the gRPC interface and messages used by the Order Service.

The order contracts define the messages required for order operations and communication with other services.

### Event Contracts

Located under:

```text
proto/ecommerce/events/v1/
```

Defines event message structures used for asynchronous communication.

The package contains contracts for:

- User events
- Order events

These contracts are used by the messaging infrastructure to maintain a consistent event schema between producers and consumers.

## Code Generation

Protocol Buffer code generation is configured using Buf.

The main configuration files are:

```text
buf.yaml
buf.gen.yaml
buf.lock
```

Generated TypeScript files are placed under:

```text
generated/
```

Compiled package output is placed under:

```text
dist/
```

Generated files should be regenerated from the Protocol Buffer source files rather than manually modified.

## Package Usage

The contracts package is consumed by other repositories as:

```text
@ecommerce/contracts
```

Services use the package to access the Protocol Buffer definitions and generated contract types required for gRPC communication.

Example:

```typescript
import {
  UserServiceController,
  UserServiceControllerMethods,
} from "@ecommerce/contracts";
```

The exact generated exports depend on the configured Protocol Buffer generation settings.

## Contract Versioning

Contracts are organized using versioned Protocol Buffer namespaces:

```text
ecommerce.<domain>.v1
```

For example:

```text
ecommerce.user.v1
ecommerce.catalog.v1
ecommerce.order.v1
ecommerce.common.v1
ecommerce.events.v1
```

Versioned namespaces allow future contract versions to be introduced without immediately breaking existing consumers.

## Contract Design

The contracts define the communication boundary between services.

Backend services own their internal:

- Database models
- Business logic
- Persistence implementation
- Internal service structure

Other services communicate with them through the exposed Protocol Buffer contracts instead of accessing their internal implementation.

## Installation

Install dependencies:

```bash
npm install
```

## Generate Contracts

Generate the TypeScript contract output using the Buf generation script defined in `package.json`.

```bash
npm run generate
```

If the package uses a different generation script, use the corresponding script defined in `package.json`.

## Build

Build the package:

```bash
npm run build
```

## Type Checking

Run TypeScript type checking without emitting files:

```bash
npx tsc --noEmit
```

## Formatting

Format the Protocol Buffer and TypeScript source files using the formatting scripts defined in the repository.

For TypeScript source files:

```bash
npx prettier --write .
```

## Dependencies

Protocol Buffer dependencies are managed through Buf.

The dependency configuration is defined in:

```text
buf.yaml
buf.lock
```

Downloaded dependencies are kept outside the tracked source files according to `.gitignore`.

## Generated Files

Generated contract output is derived from the Protocol Buffer definitions.

Do not manually modify generated files when the corresponding `.proto` source is available.

When a contract changes:

1. Update the relevant `.proto` file.
2. Regenerate the contract output.
3. Build the package if required.
4. Update dependent services when the contract changes affect their APIs.

## Consumers

The contracts package is used by multiple components of the Ecommerce system, including:

- API Gateway
- User Service
- Catalog Service
- Order Service
- Notification Service
- Shared infrastructure

## Related Components

### `@ecommerce/common`

Provides shared runtime infrastructure such as gRPC utilities, logging, validation, health checks, messaging, tracing, exceptions, and other reusable components.

### API Gateway

Uses the contracts to communicate with backend services through gRPC.

### User Service

Implements the User Service gRPC contract and publishes user-related events.

### Catalog Service

Implements catalog-related gRPC contracts for products and categories.

### Order Service

Implements order-related gRPC contracts.

### Notification Service

Consumes the contracts required to communicate with other services and process relevant events.
```