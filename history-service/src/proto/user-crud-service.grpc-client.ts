/* eslint-disable */
// @generated by protobuf-ts 2.8.0 with parameter server_grpc1,client_grpc1,eslint_disable,long_type_number
// @generated from protobuf file "user-crud-service.proto" (package "user_crud_service", syntax proto3)
// tslint:disable
import { UserCrudService } from "./user-crud-service";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { DeleteResetTokenResponse } from "./user-crud-service";
import type { DeleteResetTokenRequest } from "./user-crud-service";
import type { CreateResetTokenResponse } from "./user-crud-service";
import type { CreateResetTokenRequest } from "./user-crud-service";
import type { GetResetTokensResponse } from "./user-crud-service";
import type { GetResetTokensRequest } from "./user-crud-service";
import type { DeleteUserResponse } from "./user-crud-service";
import type { DeleteUserRequest } from "./user-crud-service";
import type { EditUserResponse } from "./user-crud-service";
import type { EditUserRequest } from "./user-crud-service";
import type { CreateUserResponse } from "./user-crud-service";
import type { CreateUserRequest } from "./user-crud-service";
import type { GetUserResponse } from "./user-crud-service";
import type { GetUserRequest } from "./user-crud-service";
import * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service user_crud_service.UserCrudService
 */
export interface IUserCrudServiceClient {
    /**
     * @generated from protobuf rpc: GetUser(user_crud_service.GetUserRequest) returns (user_crud_service.GetUserResponse);
     */
    getUser(input: GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(input: GetUserRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(input: GetUserRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(input: GetUserRequest, callback: (err: grpc.ServiceError | null, value?: GetUserResponse) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: CreateUser(user_crud_service.CreateUserRequest) returns (user_crud_service.CreateUserResponse);
     */
    createUser(input: CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(input: CreateUserRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(input: CreateUserRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(input: CreateUserRequest, callback: (err: grpc.ServiceError | null, value?: CreateUserResponse) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: EditUser(user_crud_service.EditUserRequest) returns (user_crud_service.EditUserResponse);
     */
    editUser(input: EditUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: EditUserResponse) => void): grpc.ClientUnaryCall;
    editUser(input: EditUserRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: EditUserResponse) => void): grpc.ClientUnaryCall;
    editUser(input: EditUserRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: EditUserResponse) => void): grpc.ClientUnaryCall;
    editUser(input: EditUserRequest, callback: (err: grpc.ServiceError | null, value?: EditUserResponse) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: DeleteUser(user_crud_service.DeleteUserRequest) returns (user_crud_service.DeleteUserResponse);
     */
    deleteUser(input: DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: DeleteUserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(input: DeleteUserRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: DeleteUserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(input: DeleteUserRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: DeleteUserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(input: DeleteUserRequest, callback: (err: grpc.ServiceError | null, value?: DeleteUserResponse) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: GetResetTokens(user_crud_service.GetResetTokensRequest) returns (user_crud_service.GetResetTokensResponse);
     */
    getResetTokens(input: GetResetTokensRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: GetResetTokensResponse) => void): grpc.ClientUnaryCall;
    getResetTokens(input: GetResetTokensRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: GetResetTokensResponse) => void): grpc.ClientUnaryCall;
    getResetTokens(input: GetResetTokensRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: GetResetTokensResponse) => void): grpc.ClientUnaryCall;
    getResetTokens(input: GetResetTokensRequest, callback: (err: grpc.ServiceError | null, value?: GetResetTokensResponse) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: CreateResetToken(user_crud_service.CreateResetTokenRequest) returns (user_crud_service.CreateResetTokenResponse);
     */
    createResetToken(input: CreateResetTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CreateResetTokenResponse) => void): grpc.ClientUnaryCall;
    createResetToken(input: CreateResetTokenRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: CreateResetTokenResponse) => void): grpc.ClientUnaryCall;
    createResetToken(input: CreateResetTokenRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CreateResetTokenResponse) => void): grpc.ClientUnaryCall;
    createResetToken(input: CreateResetTokenRequest, callback: (err: grpc.ServiceError | null, value?: CreateResetTokenResponse) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: DeleteResetToken(user_crud_service.DeleteResetTokenRequest) returns (user_crud_service.DeleteResetTokenResponse);
     */
    deleteResetToken(input: DeleteResetTokenRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: DeleteResetTokenResponse) => void): grpc.ClientUnaryCall;
    deleteResetToken(input: DeleteResetTokenRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: DeleteResetTokenResponse) => void): grpc.ClientUnaryCall;
    deleteResetToken(input: DeleteResetTokenRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: DeleteResetTokenResponse) => void): grpc.ClientUnaryCall;
    deleteResetToken(input: DeleteResetTokenRequest, callback: (err: grpc.ServiceError | null, value?: DeleteResetTokenResponse) => void): grpc.ClientUnaryCall;
}
/**
 * @generated from protobuf service user_crud_service.UserCrudService
 */
export class UserCrudServiceClient extends grpc.Client implements IUserCrudServiceClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * @generated from protobuf rpc: GetUser(user_crud_service.GetUserRequest) returns (user_crud_service.GetUserResponse);
     */
    getUser(input: GetUserRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: GetUserResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: GetUserResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: GetUserResponse) => void)): grpc.ClientUnaryCall {
        const method = UserCrudService.methods[0];
        return this.makeUnaryRequest<GetUserRequest, GetUserResponse>(`/${UserCrudService.typeName}/${method.name}`, (value: GetUserRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): GetUserResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: CreateUser(user_crud_service.CreateUserRequest) returns (user_crud_service.CreateUserResponse);
     */
    createUser(input: CreateUserRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CreateUserResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CreateUserResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: CreateUserResponse) => void)): grpc.ClientUnaryCall {
        const method = UserCrudService.methods[1];
        return this.makeUnaryRequest<CreateUserRequest, CreateUserResponse>(`/${UserCrudService.typeName}/${method.name}`, (value: CreateUserRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): CreateUserResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: EditUser(user_crud_service.EditUserRequest) returns (user_crud_service.EditUserResponse);
     */
    editUser(input: EditUserRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: EditUserResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: EditUserResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: EditUserResponse) => void)): grpc.ClientUnaryCall {
        const method = UserCrudService.methods[2];
        return this.makeUnaryRequest<EditUserRequest, EditUserResponse>(`/${UserCrudService.typeName}/${method.name}`, (value: EditUserRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): EditUserResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: DeleteUser(user_crud_service.DeleteUserRequest) returns (user_crud_service.DeleteUserResponse);
     */
    deleteUser(input: DeleteUserRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: DeleteUserResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: DeleteUserResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: DeleteUserResponse) => void)): grpc.ClientUnaryCall {
        const method = UserCrudService.methods[3];
        return this.makeUnaryRequest<DeleteUserRequest, DeleteUserResponse>(`/${UserCrudService.typeName}/${method.name}`, (value: DeleteUserRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): DeleteUserResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: GetResetTokens(user_crud_service.GetResetTokensRequest) returns (user_crud_service.GetResetTokensResponse);
     */
    getResetTokens(input: GetResetTokensRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: GetResetTokensResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: GetResetTokensResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: GetResetTokensResponse) => void)): grpc.ClientUnaryCall {
        const method = UserCrudService.methods[4];
        return this.makeUnaryRequest<GetResetTokensRequest, GetResetTokensResponse>(`/${UserCrudService.typeName}/${method.name}`, (value: GetResetTokensRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): GetResetTokensResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: CreateResetToken(user_crud_service.CreateResetTokenRequest) returns (user_crud_service.CreateResetTokenResponse);
     */
    createResetToken(input: CreateResetTokenRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CreateResetTokenResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CreateResetTokenResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: CreateResetTokenResponse) => void)): grpc.ClientUnaryCall {
        const method = UserCrudService.methods[5];
        return this.makeUnaryRequest<CreateResetTokenRequest, CreateResetTokenResponse>(`/${UserCrudService.typeName}/${method.name}`, (value: CreateResetTokenRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): CreateResetTokenResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: DeleteResetToken(user_crud_service.DeleteResetTokenRequest) returns (user_crud_service.DeleteResetTokenResponse);
     */
    deleteResetToken(input: DeleteResetTokenRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: DeleteResetTokenResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: DeleteResetTokenResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: DeleteResetTokenResponse) => void)): grpc.ClientUnaryCall {
        const method = UserCrudService.methods[6];
        return this.makeUnaryRequest<DeleteResetTokenRequest, DeleteResetTokenResponse>(`/${UserCrudService.typeName}/${method.name}`, (value: DeleteResetTokenRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): DeleteResetTokenResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
}
