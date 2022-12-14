/* eslint-disable */
// @generated by protobuf-ts 2.8.0 with parameter server_grpc1,client_grpc1,eslint_disable,long_type_number
// @generated from protobuf file "types.proto" (package "common", syntax proto3)
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
/**
 * @generated from protobuf message common.User
 */
export interface User {
    /**
     * @generated from protobuf field: uint64 user_id = 1;
     */
    userId: number;
    /**
     * @generated from protobuf field: string username = 2;
     */
    username: string;
    /**
     * @generated from protobuf field: string nickname = 3;
     */
    nickname: string;
}
/**
 * @generated from protobuf message common.PasswordUser
 */
export interface PasswordUser {
    /**
     * @generated from protobuf field: common.User user_info = 1;
     */
    userInfo?: User;
    /**
     * @generated from protobuf field: string password = 2;
     */
    password: string;
}
/**
 * @generated from protobuf message common.PasswordResetToken
 */
export interface PasswordResetToken {
    /**
     * @generated from protobuf field: string token = 1;
     */
    token: string;
    /**
     * @generated from protobuf field: uint64 user_id = 2;
     */
    userId: number;
    /**
     * @generated from protobuf field: uint64 expires_at = 3;
     */
    expiresAt: number;
}
/**
 * @generated from protobuf message common.Question
 */
export interface Question {
    /**
     * @generated from protobuf field: uint64 question_id = 1;
     */
    questionId: number;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: common.QuestionDifficulty difficulty = 3;
     */
    difficulty: QuestionDifficulty;
    /**
     * @generated from protobuf field: string content = 4;
     */
    content: string;
    /**
     * @generated from protobuf field: string solution = 5;
     */
    solution: string;
    /**
     * @generated from protobuf field: string execution_input = 6;
     */
    executionInput: string;
}
/**
 * @generated from protobuf message common.HistoryAttempt
 */
export interface HistoryAttempt {
    /**
     * @generated from protobuf field: uint64 attempt_id = 1;
     */
    attemptId: number;
    /**
     * @generated from protobuf field: common.Question question = 2;
     */
    question?: Question;
    /**
     * @generated from protobuf field: string language = 3;
     */
    language: string;
    /**
     * @generated from protobuf field: uint64 timestamp = 4;
     */
    timestamp: number;
    /**
     * @generated from protobuf field: repeated string users = 5;
     */
    users: string[];
    /**
     * @generated from protobuf field: string submission = 6;
     */
    submission: string;
}
/**
 * @generated from protobuf message common.HistoryCompletion
 */
export interface HistoryCompletion {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
    /**
     * @generated from protobuf field: uint64 question_id = 2;
     */
    questionId: number;
}
/**
 * @generated from protobuf message common.ExecuteCode
 */
export interface ExecuteCode {
    /**
     * @generated from protobuf field: uint64 language_id = 1;
     */
    languageId: number;
    /**
     * @generated from protobuf field: string stdin = 2;
     */
    stdin: string;
    /**
     * @generated from protobuf field: string code = 3;
     */
    code: string;
}
/**
 * @generated from protobuf enum common.QuestionDifficulty
 */
export enum QuestionDifficulty {
    /**
     * @generated from protobuf enum value: QUESTION_DIFFICULTY_UNUSED = 0;
     */
    UNUSED = 0,
    /**
     * @generated from protobuf enum value: QUESTION_DIFFICULTY_EASY = 1;
     */
    EASY = 1,
    /**
     * @generated from protobuf enum value: QUESTION_DIFFICULTY_MEDIUM = 2;
     */
    MEDIUM = 2,
    /**
     * @generated from protobuf enum value: QUESTION_DIFFICULTY_HARD = 3;
     */
    HARD = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class User$Type extends MessageType<User> {
    constructor() {
        super("common.User", [
            { no: 1, name: "user_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 2, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<User>): User {
        const message = { userId: 0, username: "", nickname: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<User>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: User): User {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 user_id */ 1:
                    message.userId = reader.uint64().toNumber();
                    break;
                case /* string username */ 2:
                    message.username = reader.string();
                    break;
                case /* string nickname */ 3:
                    message.nickname = reader.string();
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
    internalBinaryWrite(message: User, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 user_id = 1; */
        if (message.userId !== 0)
            writer.tag(1, WireType.Varint).uint64(message.userId);
        /* string username = 2; */
        if (message.username !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.username);
        /* string nickname = 3; */
        if (message.nickname !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.nickname);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message common.User
 */
export const User = new User$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PasswordUser$Type extends MessageType<PasswordUser> {
    constructor() {
        super("common.PasswordUser", [
            { no: 1, name: "user_info", kind: "message", T: () => User },
            { no: 2, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<PasswordUser>): PasswordUser {
        const message = { password: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PasswordUser>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PasswordUser): PasswordUser {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* common.User user_info */ 1:
                    message.userInfo = User.internalBinaryRead(reader, reader.uint32(), options, message.userInfo);
                    break;
                case /* string password */ 2:
                    message.password = reader.string();
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
    internalBinaryWrite(message: PasswordUser, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* common.User user_info = 1; */
        if (message.userInfo)
            User.internalBinaryWrite(message.userInfo, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string password = 2; */
        if (message.password !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.password);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message common.PasswordUser
 */
export const PasswordUser = new PasswordUser$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PasswordResetToken$Type extends MessageType<PasswordResetToken> {
    constructor() {
        super("common.PasswordResetToken", [
            { no: 1, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "user_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 3, name: "expires_at", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ }
        ]);
    }
    create(value?: PartialMessage<PasswordResetToken>): PasswordResetToken {
        const message = { token: "", userId: 0, expiresAt: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PasswordResetToken>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PasswordResetToken): PasswordResetToken {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string token */ 1:
                    message.token = reader.string();
                    break;
                case /* uint64 user_id */ 2:
                    message.userId = reader.uint64().toNumber();
                    break;
                case /* uint64 expires_at */ 3:
                    message.expiresAt = reader.uint64().toNumber();
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
    internalBinaryWrite(message: PasswordResetToken, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string token = 1; */
        if (message.token !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.token);
        /* uint64 user_id = 2; */
        if (message.userId !== 0)
            writer.tag(2, WireType.Varint).uint64(message.userId);
        /* uint64 expires_at = 3; */
        if (message.expiresAt !== 0)
            writer.tag(3, WireType.Varint).uint64(message.expiresAt);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message common.PasswordResetToken
 */
export const PasswordResetToken = new PasswordResetToken$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Question$Type extends MessageType<Question> {
    constructor() {
        super("common.Question", [
            { no: 1, name: "question_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "difficulty", kind: "enum", T: () => ["common.QuestionDifficulty", QuestionDifficulty, "QUESTION_DIFFICULTY_"] },
            { no: 4, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "solution", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "execution_input", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Question>): Question {
        const message = { questionId: 0, name: "", difficulty: 0, content: "", solution: "", executionInput: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Question>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Question): Question {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 question_id */ 1:
                    message.questionId = reader.uint64().toNumber();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* common.QuestionDifficulty difficulty */ 3:
                    message.difficulty = reader.int32();
                    break;
                case /* string content */ 4:
                    message.content = reader.string();
                    break;
                case /* string solution */ 5:
                    message.solution = reader.string();
                    break;
                case /* string execution_input */ 6:
                    message.executionInput = reader.string();
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
    internalBinaryWrite(message: Question, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 question_id = 1; */
        if (message.questionId !== 0)
            writer.tag(1, WireType.Varint).uint64(message.questionId);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* common.QuestionDifficulty difficulty = 3; */
        if (message.difficulty !== 0)
            writer.tag(3, WireType.Varint).int32(message.difficulty);
        /* string content = 4; */
        if (message.content !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.content);
        /* string solution = 5; */
        if (message.solution !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.solution);
        /* string execution_input = 6; */
        if (message.executionInput !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.executionInput);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message common.Question
 */
export const Question = new Question$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HistoryAttempt$Type extends MessageType<HistoryAttempt> {
    constructor() {
        super("common.HistoryAttempt", [
            { no: 1, name: "attempt_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 2, name: "question", kind: "message", T: () => Question },
            { no: 3, name: "language", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "timestamp", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 5, name: "users", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "submission", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<HistoryAttempt>): HistoryAttempt {
        const message = { attemptId: 0, language: "", timestamp: 0, users: [], submission: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HistoryAttempt>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HistoryAttempt): HistoryAttempt {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 attempt_id */ 1:
                    message.attemptId = reader.uint64().toNumber();
                    break;
                case /* common.Question question */ 2:
                    message.question = Question.internalBinaryRead(reader, reader.uint32(), options, message.question);
                    break;
                case /* string language */ 3:
                    message.language = reader.string();
                    break;
                case /* uint64 timestamp */ 4:
                    message.timestamp = reader.uint64().toNumber();
                    break;
                case /* repeated string users */ 5:
                    message.users.push(reader.string());
                    break;
                case /* string submission */ 6:
                    message.submission = reader.string();
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
    internalBinaryWrite(message: HistoryAttempt, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 attempt_id = 1; */
        if (message.attemptId !== 0)
            writer.tag(1, WireType.Varint).uint64(message.attemptId);
        /* common.Question question = 2; */
        if (message.question)
            Question.internalBinaryWrite(message.question, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string language = 3; */
        if (message.language !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.language);
        /* uint64 timestamp = 4; */
        if (message.timestamp !== 0)
            writer.tag(4, WireType.Varint).uint64(message.timestamp);
        /* repeated string users = 5; */
        for (let i = 0; i < message.users.length; i++)
            writer.tag(5, WireType.LengthDelimited).string(message.users[i]);
        /* string submission = 6; */
        if (message.submission !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.submission);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message common.HistoryAttempt
 */
export const HistoryAttempt = new HistoryAttempt$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HistoryCompletion$Type extends MessageType<HistoryCompletion> {
    constructor() {
        super("common.HistoryCompletion", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "question_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ }
        ]);
    }
    create(value?: PartialMessage<HistoryCompletion>): HistoryCompletion {
        const message = { username: "", questionId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HistoryCompletion>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HistoryCompletion): HistoryCompletion {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                case /* uint64 question_id */ 2:
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
    internalBinaryWrite(message: HistoryCompletion, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.username);
        /* uint64 question_id = 2; */
        if (message.questionId !== 0)
            writer.tag(2, WireType.Varint).uint64(message.questionId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message common.HistoryCompletion
 */
export const HistoryCompletion = new HistoryCompletion$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecuteCode$Type extends MessageType<ExecuteCode> {
    constructor() {
        super("common.ExecuteCode", [
            { no: 1, name: "language_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 2, name: "stdin", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "code", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ExecuteCode>): ExecuteCode {
        const message = { languageId: 0, stdin: "", code: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExecuteCode>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExecuteCode): ExecuteCode {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 language_id */ 1:
                    message.languageId = reader.uint64().toNumber();
                    break;
                case /* string stdin */ 2:
                    message.stdin = reader.string();
                    break;
                case /* string code */ 3:
                    message.code = reader.string();
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
    internalBinaryWrite(message: ExecuteCode, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 language_id = 1; */
        if (message.languageId !== 0)
            writer.tag(1, WireType.Varint).uint64(message.languageId);
        /* string stdin = 2; */
        if (message.stdin !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.stdin);
        /* string code = 3; */
        if (message.code !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.code);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message common.ExecuteCode
 */
export const ExecuteCode = new ExecuteCode$Type();
