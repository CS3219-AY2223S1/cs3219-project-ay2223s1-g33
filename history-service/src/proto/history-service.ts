/* eslint-disable */
// @generated by protobuf-ts 2.8.0 with parameter server_grpc1,client_grpc1,eslint_disable,long_type_number
// @generated from protobuf file "history-service.proto" (package "history_service", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { HistoryAttempt } from "./types";
/**
 * @generated from protobuf message history_service.GetAttemptHistoryRequest
 */
export interface GetAttemptHistoryRequest {
    /**
     * @generated from protobuf field: int32 limit = 1;
     */
    limit: number;
    /**
     * @generated from protobuf field: int32 offset = 2;
     */
    offset: number;
    /**
     * @generated from protobuf field: uint64 question_id = 3;
     */
    questionId: number;
}
/**
 * @generated from protobuf message history_service.GetAttemptHistoryResponse
 */
export interface GetAttemptHistoryResponse {
    /**
     * @generated from protobuf field: repeated common.HistoryAttempt attempts = 1;
     */
    attempts: HistoryAttempt[];
    /**
     * @generated from protobuf field: int32 total_count = 2;
     */
    totalCount: number;
    /**
     * @generated from protobuf field: string error_message = 3;
     */
    errorMessage: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetAttemptHistoryRequest$Type extends MessageType<GetAttemptHistoryRequest> {
    constructor() {
        super("history_service.GetAttemptHistoryRequest", [
            { no: 1, name: "limit", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "offset", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "question_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ }
        ]);
    }
    create(value?: PartialMessage<GetAttemptHistoryRequest>): GetAttemptHistoryRequest {
        const message = { limit: 0, offset: 0, questionId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetAttemptHistoryRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAttemptHistoryRequest): GetAttemptHistoryRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 limit */ 1:
                    message.limit = reader.int32();
                    break;
                case /* int32 offset */ 2:
                    message.offset = reader.int32();
                    break;
                case /* uint64 question_id */ 3:
                    message.questionId = reader.uint64().toNumber();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetAttemptHistoryRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 limit = 1; */
        if (message.limit !== 0)
            writer.tag(1, WireType.Varint).int32(message.limit);
        /* int32 offset = 2; */
        if (message.offset !== 0)
            writer.tag(2, WireType.Varint).int32(message.offset);
        /* uint64 question_id = 3; */
        if (message.questionId !== 0)
            writer.tag(3, WireType.Varint).uint64(message.questionId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message history_service.GetAttemptHistoryRequest
 */
export const GetAttemptHistoryRequest = new GetAttemptHistoryRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAttemptHistoryResponse$Type extends MessageType<GetAttemptHistoryResponse> {
    constructor() {
        super("history_service.GetAttemptHistoryResponse", [
            { no: 1, name: "attempts", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HistoryAttempt },
            { no: 2, name: "total_count", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "error_message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetAttemptHistoryResponse>): GetAttemptHistoryResponse {
        const message = { attempts: [], totalCount: 0, errorMessage: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetAttemptHistoryResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAttemptHistoryResponse): GetAttemptHistoryResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated common.HistoryAttempt attempts */ 1:
                    message.attempts.push(HistoryAttempt.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 total_count */ 2:
                    message.totalCount = reader.int32();
                    break;
                case /* string error_message */ 3:
                    message.errorMessage = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetAttemptHistoryResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated common.HistoryAttempt attempts = 1; */
        for (let i = 0; i < message.attempts.length; i++)
            HistoryAttempt.internalBinaryWrite(message.attempts[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* int32 total_count = 2; */
        if (message.totalCount !== 0)
            writer.tag(2, WireType.Varint).int32(message.totalCount);
        /* string error_message = 3; */
        if (message.errorMessage !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.errorMessage);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message history_service.GetAttemptHistoryResponse
 */
export const GetAttemptHistoryResponse = new GetAttemptHistoryResponse$Type();
/**
 * @generated ServiceType for protobuf service history_service.HistoryService
 */
export const HistoryService = new ServiceType("history_service.HistoryService", [
    { name: "GetAttemptHistory", options: {}, I: GetAttemptHistoryRequest, O: GetAttemptHistoryResponse }
]);
