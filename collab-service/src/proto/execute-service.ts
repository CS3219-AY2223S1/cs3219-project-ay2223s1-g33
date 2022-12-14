/* eslint-disable */
// @generated by protobuf-ts 2.8.0 with parameter server_grpc1,client_grpc1,eslint_disable,long_type_number
// @generated from protobuf file "execute-service.proto" (package "execute_service", syntax proto3)
// tslint:disable
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
import { ExecuteCode } from "./types";
/**
 * @generated from protobuf message execute_service.CreateExecuteRequest
 */
export interface CreateExecuteRequest {
    /**
     * @generated from protobuf field: common.ExecuteCode execute_code = 1;
     */
    executeCode?: ExecuteCode;
}
/**
 * @generated from protobuf message execute_service.CreateExecuteResponse
 */
export interface CreateExecuteResponse {
    /**
     * @generated from protobuf field: string token = 1;
     */
    token: string;
    /**
     * @generated from protobuf field: string error_message = 2;
     */
    errorMessage: string;
}
/**
 * @generated from protobuf message execute_service.GetExecuteRequest
 */
export interface GetExecuteRequest {
    /**
     * @generated from protobuf field: string token = 1;
     */
    token: string;
}
/**
 * @generated from protobuf message execute_service.GetExecuteResponse
 */
export interface GetExecuteResponse {
    /**
     * @generated from protobuf field: string output = 1;
     */
    output: string;
    /**
     * @generated from protobuf field: string error_message = 2;
     */
    errorMessage: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CreateExecuteRequest$Type extends MessageType<CreateExecuteRequest> {
    constructor() {
        super("execute_service.CreateExecuteRequest", [
            { no: 1, name: "execute_code", kind: "message", T: () => ExecuteCode }
        ]);
    }
    create(value?: PartialMessage<CreateExecuteRequest>): CreateExecuteRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateExecuteRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateExecuteRequest): CreateExecuteRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* common.ExecuteCode execute_code */ 1:
                    message.executeCode = ExecuteCode.internalBinaryRead(reader, reader.uint32(), options, message.executeCode);
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
    internalBinaryWrite(message: CreateExecuteRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* common.ExecuteCode execute_code = 1; */
        if (message.executeCode)
            ExecuteCode.internalBinaryWrite(message.executeCode, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message execute_service.CreateExecuteRequest
 */
export const CreateExecuteRequest = new CreateExecuteRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateExecuteResponse$Type extends MessageType<CreateExecuteResponse> {
    constructor() {
        super("execute_service.CreateExecuteResponse", [
            { no: 1, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "error_message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CreateExecuteResponse>): CreateExecuteResponse {
        const message = { token: "", errorMessage: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateExecuteResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateExecuteResponse): CreateExecuteResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string token */ 1:
                    message.token = reader.string();
                    break;
                case /* string error_message */ 2:
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
    internalBinaryWrite(message: CreateExecuteResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string token = 1; */
        if (message.token !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.token);
        /* string error_message = 2; */
        if (message.errorMessage !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.errorMessage);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message execute_service.CreateExecuteResponse
 */
export const CreateExecuteResponse = new CreateExecuteResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetExecuteRequest$Type extends MessageType<GetExecuteRequest> {
    constructor() {
        super("execute_service.GetExecuteRequest", [
            { no: 1, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetExecuteRequest>): GetExecuteRequest {
        const message = { token: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetExecuteRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetExecuteRequest): GetExecuteRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string token */ 1:
                    message.token = reader.string();
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
    internalBinaryWrite(message: GetExecuteRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string token = 1; */
        if (message.token !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.token);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message execute_service.GetExecuteRequest
 */
export const GetExecuteRequest = new GetExecuteRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetExecuteResponse$Type extends MessageType<GetExecuteResponse> {
    constructor() {
        super("execute_service.GetExecuteResponse", [
            { no: 1, name: "output", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "error_message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetExecuteResponse>): GetExecuteResponse {
        const message = { output: "", errorMessage: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetExecuteResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetExecuteResponse): GetExecuteResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string output */ 1:
                    message.output = reader.string();
                    break;
                case /* string error_message */ 2:
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
    internalBinaryWrite(message: GetExecuteResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string output = 1; */
        if (message.output !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.output);
        /* string error_message = 2; */
        if (message.errorMessage !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.errorMessage);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message execute_service.GetExecuteResponse
 */
export const GetExecuteResponse = new GetExecuteResponse$Type();
