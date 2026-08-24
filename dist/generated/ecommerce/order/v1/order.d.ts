import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import type { Metadata } from "@grpc/grpc-js";
import { Observable } from "rxjs";
export declare const protobufPackage = "ecommerce.order.v1";
export declare enum OrderStatus {
    ORDER_STATUS_UNSPECIFIED = 0,
    ORDER_STATUS_PENDING = 1,
    ORDER_STATUS_STOCK_RESERVED = 2,
    ORDER_STATUS_CONFIRMED = 3,
    ORDER_STATUS_CANCELLED = 4,
    UNRECOGNIZED = -1
}
export declare enum OrderFailureReason {
    ORDER_FAILURE_REASON_UNSPECIFIED = 0,
    ORDER_FAILURE_REASON_STOCK_UNAVAILABLE = 1,
    ORDER_FAILURE_REASON_PAYMENT_FAILED = 2,
    ORDER_FAILURE_REASON_PRODUCT_NOT_FOUND = 3,
    ORDER_FAILURE_REASON_INSUFFICIENT_STOCK = 4,
    UNRECOGNIZED = -1
}
export interface OrderItemRequest {
    productId: number;
    quantity: number;
    unitPrice: number;
}
export interface OrderItemResponse {
    productId: number;
    quantity: number;
    unitPrice: string;
}
export interface CreateOrderRequest {
    userId: number;
    items: OrderItemRequest[];
    /**
     * Client-generated UUID. Same key + same client => same order returned,
     * never a duplicate. Logic lands in Phase 3; the field exists now so we
     * don't need a second breaking contract change.
     */
    idempotencyKey: string;
}
export interface CreateOrderResponse {
    orderId: number;
    status: OrderStatus;
}
export interface GetOrderStatusRequest {
    orderId: number;
}
export interface OrderStatusResponse {
    orderId: number;
    status: OrderStatus;
    failureReason: OrderFailureReason;
    totalAmount: string;
    items: OrderItemResponse[];
    failureDetail: string;
}
export interface ListOrdersRequest {
    page: number;
    limit: number;
}
export interface ListOrdersResponse {
    orders: OrderStatusResponse[];
    page: number;
    limit: number;
    total: number;
}
export declare const ECOMMERCE_ORDER_V1_PACKAGE_NAME = "ecommerce.order.v1";
export declare const OrderItemRequest: MessageFns<OrderItemRequest>;
export declare const OrderItemResponse: MessageFns<OrderItemResponse>;
export declare const CreateOrderRequest: MessageFns<CreateOrderRequest>;
export declare const CreateOrderResponse: MessageFns<CreateOrderResponse>;
export declare const GetOrderStatusRequest: MessageFns<GetOrderStatusRequest>;
export declare const OrderStatusResponse: MessageFns<OrderStatusResponse>;
export declare const ListOrdersRequest: MessageFns<ListOrdersRequest>;
export declare const ListOrdersResponse: MessageFns<ListOrdersResponse>;
export interface OrderServiceClient {
    createOrder(request: CreateOrderRequest, metadata?: Metadata): Observable<CreateOrderResponse>;
    getOrderStatus(request: GetOrderStatusRequest, metadata?: Metadata): Observable<OrderStatusResponse>;
    listOrders(request: ListOrdersRequest, metadata?: Metadata): Observable<ListOrdersResponse>;
}
export interface OrderServiceController {
    createOrder(request: CreateOrderRequest, metadata?: Metadata): Promise<CreateOrderResponse> | Observable<CreateOrderResponse> | CreateOrderResponse;
    getOrderStatus(request: GetOrderStatusRequest, metadata?: Metadata): Promise<OrderStatusResponse> | Observable<OrderStatusResponse> | OrderStatusResponse;
    listOrders(request: ListOrdersRequest, metadata?: Metadata): Promise<ListOrdersResponse> | Observable<ListOrdersResponse> | ListOrdersResponse;
}
export declare function OrderServiceControllerMethods(): (constructor: Function) => void;
export declare const ORDER_SERVICE_NAME = "OrderService";
export interface OrderService {
    createOrder(request: CreateOrderRequest, metadata?: Metadata): Promise<CreateOrderResponse>;
    getOrderStatus(request: GetOrderStatusRequest, metadata?: Metadata): Promise<OrderStatusResponse>;
    listOrders(request: ListOrdersRequest, metadata?: Metadata): Promise<ListOrdersResponse>;
}
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}
