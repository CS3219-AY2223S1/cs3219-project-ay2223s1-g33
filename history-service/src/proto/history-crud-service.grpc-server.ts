/* eslint-disable */
// @generated by protobuf-ts 2.8.0 with parameter server_grpc1,client_grpc1,eslint_disable,long_type_number
// @generated from protobuf file "history-crud-service.proto" (package "history_crud_service", syntax proto3)
// tslint:disable
import { DeleteCompletionResponse } from "./history-crud-service";
import { DeleteCompletionRequest } from "./history-crud-service";
import { GetCompletionResponse } from "./history-crud-service";
import { GetCompletionRequest } from "./history-crud-service";
import { CreateCompletionResponse } from "./history-crud-service";
import { CreateCompletionRequest } from "./history-crud-service";
import { DeleteAttemptResponse } from "./history-crud-service";
import { DeleteAttemptRequest } from "./history-crud-service";
import { CreateAttemptResponse } from "./history-crud-service";
import { CreateAttemptRequest } from "./history-crud-service";
import { GetAttemptsResponse } from "./history-crud-service";
import { GetAttemptsRequest } from "./history-crud-service";
import { GetAttemptResponse } from "./history-crud-service";
import { GetAttemptRequest } from "./history-crud-service";
import type * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service history_crud_service.HistoryCrudService
 */
export interface IHistoryCrudService extends grpc.UntypedServiceImplementation {
    /**
     * @generated from protobuf rpc: GetAttempt(history_crud_service.GetAttemptRequest) returns (history_crud_service.GetAttemptResponse);
     */
    getAttempt: grpc.handleUnaryCall<GetAttemptRequest, GetAttemptResponse>;
    /**
     * @generated from protobuf rpc: GetAttempts(history_crud_service.GetAttemptsRequest) returns (history_crud_service.GetAttemptsResponse);
     */
    getAttempts: grpc.handleUnaryCall<GetAttemptsRequest, GetAttemptsResponse>;
    /**
     * @generated from protobuf rpc: CreateAttempt(history_crud_service.CreateAttemptRequest) returns (history_crud_service.CreateAttemptResponse);
     */
    createAttempt: grpc.handleUnaryCall<CreateAttemptRequest, CreateAttemptResponse>;
    /**
     * @generated from protobuf rpc: DeleteAttempt(history_crud_service.DeleteAttemptRequest) returns (history_crud_service.DeleteAttemptResponse);
     */
    deleteAttempt: grpc.handleUnaryCall<DeleteAttemptRequest, DeleteAttemptResponse>;
    /**
     * @generated from protobuf rpc: CreateCompletion(history_crud_service.CreateCompletionRequest) returns (history_crud_service.CreateCompletionResponse);
     */
    createCompletion: grpc.handleUnaryCall<CreateCompletionRequest, CreateCompletionResponse>;
    /**
     * @generated from protobuf rpc: GetCompletion(history_crud_service.GetCompletionRequest) returns (history_crud_service.GetCompletionResponse);
     */
    getCompletion: grpc.handleUnaryCall<GetCompletionRequest, GetCompletionResponse>;
    /**
     * @generated from protobuf rpc: DeleteCompletion(history_crud_service.DeleteCompletionRequest) returns (history_crud_service.DeleteCompletionResponse);
     */
    deleteCompletion: grpc.handleUnaryCall<DeleteCompletionRequest, DeleteCompletionResponse>;
}
/**
 * @grpc/grpc-js definition for the protobuf service history_crud_service.HistoryCrudService.
 *
 * Usage: Implement the interface IHistoryCrudService and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IHistoryCrudService = ...
 * server.addService(historyCrudServiceDefinition, service);
 * ```
 */
export const historyCrudServiceDefinition: grpc.ServiceDefinition<IHistoryCrudService> = {
    getAttempt: {
        path: "/history_crud_service.HistoryCrudService/GetAttempt",
        originalName: "GetAttempt",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => GetAttemptResponse.fromBinary(bytes),
        requestDeserialize: bytes => GetAttemptRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(GetAttemptResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(GetAttemptRequest.toBinary(value))
    },
    getAttempts: {
        path: "/history_crud_service.HistoryCrudService/GetAttempts",
        originalName: "GetAttempts",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => GetAttemptsResponse.fromBinary(bytes),
        requestDeserialize: bytes => GetAttemptsRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(GetAttemptsResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(GetAttemptsRequest.toBinary(value))
    },
    createAttempt: {
        path: "/history_crud_service.HistoryCrudService/CreateAttempt",
        originalName: "CreateAttempt",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => CreateAttemptResponse.fromBinary(bytes),
        requestDeserialize: bytes => CreateAttemptRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(CreateAttemptResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(CreateAttemptRequest.toBinary(value))
    },
    deleteAttempt: {
        path: "/history_crud_service.HistoryCrudService/DeleteAttempt",
        originalName: "DeleteAttempt",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => DeleteAttemptResponse.fromBinary(bytes),
        requestDeserialize: bytes => DeleteAttemptRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(DeleteAttemptResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(DeleteAttemptRequest.toBinary(value))
    },
    createCompletion: {
        path: "/history_crud_service.HistoryCrudService/CreateCompletion",
        originalName: "CreateCompletion",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => CreateCompletionResponse.fromBinary(bytes),
        requestDeserialize: bytes => CreateCompletionRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(CreateCompletionResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(CreateCompletionRequest.toBinary(value))
    },
    getCompletion: {
        path: "/history_crud_service.HistoryCrudService/GetCompletion",
        originalName: "GetCompletion",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => GetCompletionResponse.fromBinary(bytes),
        requestDeserialize: bytes => GetCompletionRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(GetCompletionResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(GetCompletionRequest.toBinary(value))
    },
    deleteCompletion: {
        path: "/history_crud_service.HistoryCrudService/DeleteCompletion",
        originalName: "DeleteCompletion",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => DeleteCompletionResponse.fromBinary(bytes),
        requestDeserialize: bytes => DeleteCompletionRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(DeleteCompletionResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(DeleteCompletionRequest.toBinary(value))
    }
};
