import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Timestamp } from "../../../google/protobuf/timestamp";
export declare const protobufPackage = "ecommerce.events.v1";
export interface UserRegisteredEvent {
    eventId: string;
    eventType: string;
    userId: number;
    email: string;
    name: string;
    registeredAt?: Timestamp | undefined;
}
export declare const ECOMMERCE_EVENTS_V1_PACKAGE_NAME = "ecommerce.events.v1";
export declare const UserRegisteredEvent: MessageFns<UserRegisteredEvent>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}
