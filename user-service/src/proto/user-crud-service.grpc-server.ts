/* eslint-disable */
// @generated by protobuf-ts 2.8.0 with parameter server_grpc1,client_grpc1,eslint_disable,long_type_number
// @generated from protobuf file "user-crud-service.proto" (package "user_crud_service", syntax proto3)
// tslint:disable
import { DeleteResetTokenResponse } from "./user-crud-service";
import { DeleteResetTokenRequest } from "./user-crud-service";
import { CreateResetTokenResponse } from "./user-crud-service";
import { CreateResetTokenRequest } from "./user-crud-service";
import { GetResetTokenResponse } from "./user-crud-service";
import { GetResetTokenRequest } from "./user-crud-service";
import { DeleteUserResponse } from "./user-crud-service";
import { DeleteUserRequest } from "./user-crud-service";
import { EditUserResponse } from "./user-crud-service";
import { EditUserRequest } from "./user-crud-service";
import { CreateUserResponse } from "./user-crud-service";
import { CreateUserRequest } from "./user-crud-service";
import { GetUserResponse } from "./user-crud-service";
import { GetUserRequest } from "./user-crud-service";
import type * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service user_crud_service.UserCrudService
 */
export interface IUserCrudService extends grpc.UntypedServiceImplementation {
    /**
     * @generated from protobuf rpc: GetUser(user_crud_service.GetUserRequest) returns (user_crud_service.GetUserResponse);
     */
    getUser: grpc.handleUnaryCall<GetUserRequest, GetUserResponse>;
    /**
     * @generated from protobuf rpc: CreateUser(user_crud_service.CreateUserRequest) returns (user_crud_service.CreateUserResponse);
     */
    createUser: grpc.handleUnaryCall<CreateUserRequest, CreateUserResponse>;
    /**
     * @generated from protobuf rpc: EditUser(user_crud_service.EditUserRequest) returns (user_crud_service.EditUserResponse);
     */
    editUser: grpc.handleUnaryCall<EditUserRequest, EditUserResponse>;
    /**
     * @generated from protobuf rpc: DeleteUser(user_crud_service.DeleteUserRequest) returns (user_crud_service.DeleteUserResponse);
     */
    deleteUser: grpc.handleUnaryCall<DeleteUserRequest, DeleteUserResponse>;
    /**
     * @generated from protobuf rpc: GetResetToken(user_crud_service.GetResetTokenRequest) returns (user_crud_service.GetResetTokenResponse);
     */
    getResetToken: grpc.handleUnaryCall<GetResetTokenRequest, GetResetTokenResponse>;
    /**
     * @generated from protobuf rpc: CreateResetToken(user_crud_service.CreateResetTokenRequest) returns (user_crud_service.CreateResetTokenResponse);
     */
    createResetToken: grpc.handleUnaryCall<CreateResetTokenRequest, CreateResetTokenResponse>;
    /**
     * @generated from protobuf rpc: DeleteResetToken(user_crud_service.DeleteResetTokenRequest) returns (user_crud_service.DeleteResetTokenResponse);
     */
    deleteResetToken: grpc.handleUnaryCall<DeleteResetTokenRequest, DeleteResetTokenResponse>;
}
/**
 * @grpc/grpc-js definition for the protobuf service user_crud_service.UserCrudService.
 *
 * Usage: Implement the interface IUserCrudService and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IUserCrudService = ...
 * server.addService(userCrudServiceDefinition, service);
 * ```
 */
export const userCrudServiceDefinition: grpc.ServiceDefinition<IUserCrudService> = {
    getUser: {
        path: "/user_crud_service.UserCrudService/GetUser",
        originalName: "GetUser",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => GetUserResponse.fromBinary(bytes),
        requestDeserialize: bytes => GetUserRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(GetUserResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(GetUserRequest.toBinary(value))
    },
    createUser: {
        path: "/user_crud_service.UserCrudService/CreateUser",
        originalName: "CreateUser",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => CreateUserResponse.fromBinary(bytes),
        requestDeserialize: bytes => CreateUserRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(CreateUserResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(CreateUserRequest.toBinary(value))
    },
    editUser: {
        path: "/user_crud_service.UserCrudService/EditUser",
        originalName: "EditUser",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => EditUserResponse.fromBinary(bytes),
        requestDeserialize: bytes => EditUserRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(EditUserResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(EditUserRequest.toBinary(value))
    },
    deleteUser: {
        path: "/user_crud_service.UserCrudService/DeleteUser",
        originalName: "DeleteUser",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => DeleteUserResponse.fromBinary(bytes),
        requestDeserialize: bytes => DeleteUserRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(DeleteUserResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(DeleteUserRequest.toBinary(value))
    },
    getResetToken: {
        path: "/user_crud_service.UserCrudService/GetResetToken",
        originalName: "GetResetToken",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => GetResetTokenResponse.fromBinary(bytes),
        requestDeserialize: bytes => GetResetTokenRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(GetResetTokenResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(GetResetTokenRequest.toBinary(value))
    },
    createResetToken: {
        path: "/user_crud_service.UserCrudService/CreateResetToken",
        originalName: "CreateResetToken",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => CreateResetTokenResponse.fromBinary(bytes),
        requestDeserialize: bytes => CreateResetTokenRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(CreateResetTokenResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(CreateResetTokenRequest.toBinary(value))
    },
    deleteResetToken: {
        path: "/user_crud_service.UserCrudService/DeleteResetToken",
        originalName: "DeleteResetToken",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => DeleteResetTokenResponse.fromBinary(bytes),
        requestDeserialize: bytes => DeleteResetTokenRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(DeleteResetTokenResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(DeleteResetTokenRequest.toBinary(value))
    }
};
