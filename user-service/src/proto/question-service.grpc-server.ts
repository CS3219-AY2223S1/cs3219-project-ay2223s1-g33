/* eslint-disable */
// @generated by protobuf-ts 2.8.0 with parameter server_grpc1,client_grpc1,eslint_disable,long_type_number
// @generated from protobuf file "question-service.proto" (package "user_service", syntax proto3)
// tslint:disable
import { DeleteQuestionResponse } from "./question-service";
import { DeleteQuestionRequest } from "./question-service";
import { EditQuestionResponse } from "./question-service";
import { EditQuestionRequest } from "./question-service";
import { CreateQuestionResponse } from "./question-service";
import { CreateQuestionRequest } from "./question-service";
import { GetQuestionResponse } from "./question-service";
import { GetQuestionRequest } from "./question-service";
import type * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service user_service.QuestionService
 */
export interface IQuestionService extends grpc.UntypedServiceImplementation {
    /**
     * @generated from protobuf rpc: GetQuestion(user_service.GetQuestionRequest) returns (user_service.GetQuestionResponse);
     */
    getQuestion: grpc.handleUnaryCall<GetQuestionRequest, GetQuestionResponse>;
    /**
     * @generated from protobuf rpc: CreateQuestion(user_service.CreateQuestionRequest) returns (user_service.CreateQuestionResponse);
     */
    createQuestion: grpc.handleUnaryCall<CreateQuestionRequest, CreateQuestionResponse>;
    /**
     * @generated from protobuf rpc: EditQuestion(user_service.EditQuestionRequest) returns (user_service.EditQuestionResponse);
     */
    editQuestion: grpc.handleUnaryCall<EditQuestionRequest, EditQuestionResponse>;
    /**
     * @generated from protobuf rpc: DeleteQuestion(user_service.DeleteQuestionRequest) returns (user_service.DeleteQuestionResponse);
     */
    deleteQuestion: grpc.handleUnaryCall<DeleteQuestionRequest, DeleteQuestionResponse>;
}
/**
 * @grpc/grpc-js definition for the protobuf service user_service.QuestionService.
 *
 * Usage: Implement the interface IQuestionService and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IQuestionService = ...
 * server.addService(questionServiceDefinition, service);
 * ```
 */
export const questionServiceDefinition: grpc.ServiceDefinition<IQuestionService> = {
    getQuestion: {
        path: "/user_service.QuestionService/GetQuestion",
        originalName: "GetQuestion",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => GetQuestionResponse.fromBinary(bytes),
        requestDeserialize: bytes => GetQuestionRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(GetQuestionResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(GetQuestionRequest.toBinary(value))
    },
    createQuestion: {
        path: "/user_service.QuestionService/CreateQuestion",
        originalName: "CreateQuestion",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => CreateQuestionResponse.fromBinary(bytes),
        requestDeserialize: bytes => CreateQuestionRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(CreateQuestionResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(CreateQuestionRequest.toBinary(value))
    },
    editQuestion: {
        path: "/user_service.QuestionService/EditQuestion",
        originalName: "EditQuestion",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => EditQuestionResponse.fromBinary(bytes),
        requestDeserialize: bytes => EditQuestionRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(EditQuestionResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(EditQuestionRequest.toBinary(value))
    },
    deleteQuestion: {
        path: "/user_service.QuestionService/DeleteQuestion",
        originalName: "DeleteQuestion",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => DeleteQuestionResponse.fromBinary(bytes),
        requestDeserialize: bytes => DeleteQuestionRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(DeleteQuestionResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(DeleteQuestionRequest.toBinary(value))
    }
};
