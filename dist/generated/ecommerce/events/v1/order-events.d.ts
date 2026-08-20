import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Timestamp } from "../../../google/protobuf/timestamp";
export declare const protobufPackage = "ecommerce.events.v1";
export interface OrderItemEvent {
    productId: number;
    quantity: number;
    price: number;
}
export interface OrderCreatedEvent {
    eventId: string;
    eventType: string;
    orderId: number;
    userId: number;
    items: OrderItemEvent[];
    totalAmount: number;
    createdAt?: Timestamp | undefined;
}
export interface PaymentSucceededEvent {
    eventId: string;
    eventType: string;
    orderId: number;
    userId: number;
    amount: number;
    paidAt?: Timestamp | undefined;
}
export interface PaymentFailedEvent {
    eventId: string;
    eventType: string;
    orderId: number;
    userId: number;
    reason: string;
    failedAt?: Timestamp | undefined;
}
export interface OrderConfirmedEvent {
    eventId: string;
    eventType: string;
    orderId: number;
    userId: number;
    confirmedAt?: Timestamp | undefined;
}
export interface OrderCancelledEvent {
    eventId: string;
    eventType: string;
    orderId: number;
    userId: number;
    reason: string;
    cancelledAt?: Timestamp | undefined;
}
export declare const ECOMMERCE_EVENTS_V1_PACKAGE_NAME = "ecommerce.events.v1";
export declare const OrderItemEvent: MessageFns<OrderItemEvent>;
export declare const OrderCreatedEvent: MessageFns<OrderCreatedEvent>;
export declare const PaymentSucceededEvent: MessageFns<PaymentSucceededEvent>;
export declare const PaymentFailedEvent: MessageFns<PaymentFailedEvent>;
export declare const OrderConfirmedEvent: MessageFns<OrderConfirmedEvent>;
export declare const OrderCancelledEvent: MessageFns<OrderCancelledEvent>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}
