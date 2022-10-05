/* eslint-disable */
// @generated by protobuf-ts 2.8.0 with parameter server_grpc1,client_grpc1,eslint_disable,long_type_number
// @generated from protobuf file "history-service.proto" (package "history_service", syntax proto3)
// tslint:disable
import { HistoryService } from "./history-service";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { GetAttemptHistoryResponse } from "./history-service";
import type { GetAttemptHistoryRequest } from "./history-service";
import * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service history_service.HistoryService
 */
export interface IHistoryServiceClient {
    /**
     * @generated from protobuf rpc: GetAttemptHistory(history_service.GetAttemptHistoryRequest) returns (history_service.GetAttemptHistoryResponse);
     */
    getAttemptHistory(input: GetAttemptHistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: GetAttemptHistoryResponse) => void): grpc.ClientUnaryCall;
    getAttemptHistory(input: GetAttemptHistoryRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: GetAttemptHistoryResponse) => void): grpc.ClientUnaryCall;
    getAttemptHistory(input: GetAttemptHistoryRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: GetAttemptHistoryResponse) => void): grpc.ClientUnaryCall;
    getAttemptHistory(input: GetAttemptHistoryRequest, callback: (err: grpc.ServiceError | null, value?: GetAttemptHistoryResponse) => void): grpc.ClientUnaryCall;
}
/**
 * @generated from protobuf service history_service.HistoryService
 */
export class HistoryServiceClient extends grpc.Client implements IHistoryServiceClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * @generated from protobuf rpc: GetAttemptHistory(history_service.GetAttemptHistoryRequest) returns (history_service.GetAttemptHistoryResponse);
     */
    getAttemptHistory(input: GetAttemptHistoryRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: GetAttemptHistoryResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: GetAttemptHistoryResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: GetAttemptHistoryResponse) => void)): grpc.ClientUnaryCall {
        const method = HistoryService.methods[0];
        return this.makeUnaryRequest<GetAttemptHistoryRequest, GetAttemptHistoryResponse>(`/${HistoryService.typeName}/${method.name}`, (value: GetAttemptHistoryRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): GetAttemptHistoryResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
}
