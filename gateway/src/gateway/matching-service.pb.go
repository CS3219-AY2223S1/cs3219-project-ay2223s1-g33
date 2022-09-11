// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.5
// source: matching-service.proto

package gateway

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type JoinQueueErrorCode int32

const (
	JoinQueueErrorCode_JOIN_QUEUE_ERROR_NONE        JoinQueueErrorCode = 0
	JoinQueueErrorCode_JOIN_QUEUE_MISSING_DIFFCULTY JoinQueueErrorCode = 1
	JoinQueueErrorCode_JOIN_QUEUE_BAD_REQUEST       JoinQueueErrorCode = 100
	JoinQueueErrorCode_JOIN_QUEUE_INTERNAL_ERROR    JoinQueueErrorCode = 101
)

// Enum value maps for JoinQueueErrorCode.
var (
	JoinQueueErrorCode_name = map[int32]string{
		0:   "JOIN_QUEUE_ERROR_NONE",
		1:   "JOIN_QUEUE_MISSING_DIFFCULTY",
		100: "JOIN_QUEUE_BAD_REQUEST",
		101: "JOIN_QUEUE_INTERNAL_ERROR",
	}
	JoinQueueErrorCode_value = map[string]int32{
		"JOIN_QUEUE_ERROR_NONE":        0,
		"JOIN_QUEUE_MISSING_DIFFCULTY": 1,
		"JOIN_QUEUE_BAD_REQUEST":       100,
		"JOIN_QUEUE_INTERNAL_ERROR":    101,
	}
)

func (x JoinQueueErrorCode) Enum() *JoinQueueErrorCode {
	p := new(JoinQueueErrorCode)
	*p = x
	return p
}

func (x JoinQueueErrorCode) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (JoinQueueErrorCode) Descriptor() protoreflect.EnumDescriptor {
	return file_matching_service_proto_enumTypes[0].Descriptor()
}

func (JoinQueueErrorCode) Type() protoreflect.EnumType {
	return &file_matching_service_proto_enumTypes[0]
}

func (x JoinQueueErrorCode) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use JoinQueueErrorCode.Descriptor instead.
func (JoinQueueErrorCode) EnumDescriptor() ([]byte, []int) {
	return file_matching_service_proto_rawDescGZIP(), []int{0}
}

type CheckQueueStatusErrorCode int32

const (
	CheckQueueStatusErrorCode_CHECK_QUEUE_STATUS_ERROR_NONE            CheckQueueStatusErrorCode = 0
	CheckQueueStatusErrorCode_CHECK_QUEUE_STATUS_ERROR_REQUEST         CheckQueueStatusErrorCode = 100
	CheckQueueStatusErrorCode_CHECK_QUEUE_STATUS_ERRROR_INTERNAL_ERROR CheckQueueStatusErrorCode = 101
)

// Enum value maps for CheckQueueStatusErrorCode.
var (
	CheckQueueStatusErrorCode_name = map[int32]string{
		0:   "CHECK_QUEUE_STATUS_ERROR_NONE",
		100: "CHECK_QUEUE_STATUS_ERROR_REQUEST",
		101: "CHECK_QUEUE_STATUS_ERRROR_INTERNAL_ERROR",
	}
	CheckQueueStatusErrorCode_value = map[string]int32{
		"CHECK_QUEUE_STATUS_ERROR_NONE":            0,
		"CHECK_QUEUE_STATUS_ERROR_REQUEST":         100,
		"CHECK_QUEUE_STATUS_ERRROR_INTERNAL_ERROR": 101,
	}
)

func (x CheckQueueStatusErrorCode) Enum() *CheckQueueStatusErrorCode {
	p := new(CheckQueueStatusErrorCode)
	*p = x
	return p
}

func (x CheckQueueStatusErrorCode) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (CheckQueueStatusErrorCode) Descriptor() protoreflect.EnumDescriptor {
	return file_matching_service_proto_enumTypes[1].Descriptor()
}

func (CheckQueueStatusErrorCode) Type() protoreflect.EnumType {
	return &file_matching_service_proto_enumTypes[1]
}

func (x CheckQueueStatusErrorCode) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use CheckQueueStatusErrorCode.Descriptor instead.
func (CheckQueueStatusErrorCode) EnumDescriptor() ([]byte, []int) {
	return file_matching_service_proto_rawDescGZIP(), []int{1}
}

type QueueStatus int32

const (
	QueueStatus_QUEUE_STATUS_PENDING QueueStatus = 0
	QueueStatus_QUEUE_STATUS_MATCHED QueueStatus = 1
	QueueStatus_QUEUE_STATUS_EXPIRED QueueStatus = 2
	QueueStatus_QUEUE_STATUS_INVALID QueueStatus = 3
)

// Enum value maps for QueueStatus.
var (
	QueueStatus_name = map[int32]string{
		0: "QUEUE_STATUS_PENDING",
		1: "QUEUE_STATUS_MATCHED",
		2: "QUEUE_STATUS_EXPIRED",
		3: "QUEUE_STATUS_INVALID",
	}
	QueueStatus_value = map[string]int32{
		"QUEUE_STATUS_PENDING": 0,
		"QUEUE_STATUS_MATCHED": 1,
		"QUEUE_STATUS_EXPIRED": 2,
		"QUEUE_STATUS_INVALID": 3,
	}
)

func (x QueueStatus) Enum() *QueueStatus {
	p := new(QueueStatus)
	*p = x
	return p
}

func (x QueueStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (QueueStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_matching_service_proto_enumTypes[2].Descriptor()
}

func (QueueStatus) Type() protoreflect.EnumType {
	return &file_matching_service_proto_enumTypes[2]
}

func (x QueueStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use QueueStatus.Descriptor instead.
func (QueueStatus) EnumDescriptor() ([]byte, []int) {
	return file_matching_service_proto_rawDescGZIP(), []int{2}
}

type JoinQueueRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SessionToken string             `protobuf:"bytes,1,opt,name=session_token,json=sessionToken,proto3" json:"session_token,omitempty"`
	Difficulty   QuestionDifficulty `protobuf:"varint,2,opt,name=difficulty,proto3,enum=common.QuestionDifficulty" json:"difficulty,omitempty"`
}

func (x *JoinQueueRequest) Reset() {
	*x = JoinQueueRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_matching_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *JoinQueueRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*JoinQueueRequest) ProtoMessage() {}

func (x *JoinQueueRequest) ProtoReflect() protoreflect.Message {
	mi := &file_matching_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use JoinQueueRequest.ProtoReflect.Descriptor instead.
func (*JoinQueueRequest) Descriptor() ([]byte, []int) {
	return file_matching_service_proto_rawDescGZIP(), []int{0}
}

func (x *JoinQueueRequest) GetSessionToken() string {
	if x != nil {
		return x.SessionToken
	}
	return ""
}

func (x *JoinQueueRequest) GetDifficulty() QuestionDifficulty {
	if x != nil {
		return x.Difficulty
	}
	return QuestionDifficulty_QUESTION_DIFFICULTY_UNUSED
}

type JoinQueueResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ErrorMessage string             `protobuf:"bytes,1,opt,name=error_message,json=errorMessage,proto3" json:"error_message,omitempty"`
	ErrorCode    JoinQueueErrorCode `protobuf:"varint,2,opt,name=error_code,json=errorCode,proto3,enum=matching_service.JoinQueueErrorCode" json:"error_code,omitempty"`
}

func (x *JoinQueueResponse) Reset() {
	*x = JoinQueueResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_matching_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *JoinQueueResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*JoinQueueResponse) ProtoMessage() {}

func (x *JoinQueueResponse) ProtoReflect() protoreflect.Message {
	mi := &file_matching_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use JoinQueueResponse.ProtoReflect.Descriptor instead.
func (*JoinQueueResponse) Descriptor() ([]byte, []int) {
	return file_matching_service_proto_rawDescGZIP(), []int{1}
}

func (x *JoinQueueResponse) GetErrorMessage() string {
	if x != nil {
		return x.ErrorMessage
	}
	return ""
}

func (x *JoinQueueResponse) GetErrorCode() JoinQueueErrorCode {
	if x != nil {
		return x.ErrorCode
	}
	return JoinQueueErrorCode_JOIN_QUEUE_ERROR_NONE
}

type CheckQueueStatusRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SessionToken string `protobuf:"bytes,1,opt,name=session_token,json=sessionToken,proto3" json:"session_token,omitempty"`
}

func (x *CheckQueueStatusRequest) Reset() {
	*x = CheckQueueStatusRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_matching_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CheckQueueStatusRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CheckQueueStatusRequest) ProtoMessage() {}

func (x *CheckQueueStatusRequest) ProtoReflect() protoreflect.Message {
	mi := &file_matching_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CheckQueueStatusRequest.ProtoReflect.Descriptor instead.
func (*CheckQueueStatusRequest) Descriptor() ([]byte, []int) {
	return file_matching_service_proto_rawDescGZIP(), []int{2}
}

func (x *CheckQueueStatusRequest) GetSessionToken() string {
	if x != nil {
		return x.SessionToken
	}
	return ""
}

type CheckQueueStatusResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	QueueStatus  QueueStatus               `protobuf:"varint,1,opt,name=queue_status,json=queueStatus,proto3,enum=matching_service.QueueStatus" json:"queue_status,omitempty"`
	RoomToken    string                    `protobuf:"bytes,2,opt,name=room_token,json=roomToken,proto3" json:"room_token,omitempty"`
	ErrorMessage string                    `protobuf:"bytes,3,opt,name=error_message,json=errorMessage,proto3" json:"error_message,omitempty"`
	ErrorCode    CheckQueueStatusErrorCode `protobuf:"varint,4,opt,name=error_code,json=errorCode,proto3,enum=matching_service.CheckQueueStatusErrorCode" json:"error_code,omitempty"`
}

func (x *CheckQueueStatusResponse) Reset() {
	*x = CheckQueueStatusResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_matching_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CheckQueueStatusResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CheckQueueStatusResponse) ProtoMessage() {}

func (x *CheckQueueStatusResponse) ProtoReflect() protoreflect.Message {
	mi := &file_matching_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CheckQueueStatusResponse.ProtoReflect.Descriptor instead.
func (*CheckQueueStatusResponse) Descriptor() ([]byte, []int) {
	return file_matching_service_proto_rawDescGZIP(), []int{3}
}

func (x *CheckQueueStatusResponse) GetQueueStatus() QueueStatus {
	if x != nil {
		return x.QueueStatus
	}
	return QueueStatus_QUEUE_STATUS_PENDING
}

func (x *CheckQueueStatusResponse) GetRoomToken() string {
	if x != nil {
		return x.RoomToken
	}
	return ""
}

func (x *CheckQueueStatusResponse) GetErrorMessage() string {
	if x != nil {
		return x.ErrorMessage
	}
	return ""
}

func (x *CheckQueueStatusResponse) GetErrorCode() CheckQueueStatusErrorCode {
	if x != nil {
		return x.ErrorCode
	}
	return CheckQueueStatusErrorCode_CHECK_QUEUE_STATUS_ERROR_NONE
}

var File_matching_service_proto protoreflect.FileDescriptor

var file_matching_service_proto_rawDesc = []byte{
	0x0a, 0x16, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x69, 0x6e, 0x67, 0x2d, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x69,
	0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x1a, 0x0b, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x73, 0x0a, 0x10, 0x4a, 0x6f, 0x69, 0x6e, 0x51,
	0x75, 0x65, 0x75, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x23, 0x0a, 0x0d, 0x73,
	0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0c, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x12, 0x3a, 0x0a, 0x0a, 0x64, 0x69, 0x66, 0x66, 0x69, 0x63, 0x75, 0x6c, 0x74, 0x79, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x1a, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x51, 0x75,
	0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x69, 0x66, 0x66, 0x69, 0x63, 0x75, 0x6c, 0x74, 0x79,
	0x52, 0x0a, 0x64, 0x69, 0x66, 0x66, 0x69, 0x63, 0x75, 0x6c, 0x74, 0x79, 0x22, 0x7d, 0x0a, 0x11,
	0x4a, 0x6f, 0x69, 0x6e, 0x51, 0x75, 0x65, 0x75, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x23, 0x0a, 0x0d, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x4d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x43, 0x0a, 0x0a, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x5f,
	0x63, 0x6f, 0x64, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x24, 0x2e, 0x6d, 0x61, 0x74,
	0x63, 0x68, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x4a, 0x6f,
	0x69, 0x6e, 0x51, 0x75, 0x65, 0x75, 0x65, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x43, 0x6f, 0x64, 0x65,
	0x52, 0x09, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x43, 0x6f, 0x64, 0x65, 0x22, 0x3e, 0x0a, 0x17, 0x43,
	0x68, 0x65, 0x63, 0x6b, 0x51, 0x75, 0x65, 0x75, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x23, 0x0a, 0x0d, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f,
	0x6e, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x73,
	0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0xec, 0x01, 0x0a, 0x18,
	0x43, 0x68, 0x65, 0x63, 0x6b, 0x51, 0x75, 0x65, 0x75, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x40, 0x0a, 0x0c, 0x71, 0x75, 0x65, 0x75,
	0x65, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1d,
	0x2e, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x2e, 0x51, 0x75, 0x65, 0x75, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x0b, 0x71,
	0x75, 0x65, 0x75, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x72, 0x6f,
	0x6f, 0x6d, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09,
	0x72, 0x6f, 0x6f, 0x6d, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x23, 0x0a, 0x0d, 0x65, 0x72, 0x72,
	0x6f, 0x72, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0c, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x4a,
	0x0a, 0x0a, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x2b, 0x2e, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x51, 0x75, 0x65, 0x75, 0x65,
	0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x43, 0x6f, 0x64, 0x65, 0x52,
	0x09, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x43, 0x6f, 0x64, 0x65, 0x2a, 0x8c, 0x01, 0x0a, 0x12, 0x4a,
	0x6f, 0x69, 0x6e, 0x51, 0x75, 0x65, 0x75, 0x65, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x43, 0x6f, 0x64,
	0x65, 0x12, 0x19, 0x0a, 0x15, 0x4a, 0x4f, 0x49, 0x4e, 0x5f, 0x51, 0x55, 0x45, 0x55, 0x45, 0x5f,
	0x45, 0x52, 0x52, 0x4f, 0x52, 0x5f, 0x4e, 0x4f, 0x4e, 0x45, 0x10, 0x00, 0x12, 0x20, 0x0a, 0x1c,
	0x4a, 0x4f, 0x49, 0x4e, 0x5f, 0x51, 0x55, 0x45, 0x55, 0x45, 0x5f, 0x4d, 0x49, 0x53, 0x53, 0x49,
	0x4e, 0x47, 0x5f, 0x44, 0x49, 0x46, 0x46, 0x43, 0x55, 0x4c, 0x54, 0x59, 0x10, 0x01, 0x12, 0x1a,
	0x0a, 0x16, 0x4a, 0x4f, 0x49, 0x4e, 0x5f, 0x51, 0x55, 0x45, 0x55, 0x45, 0x5f, 0x42, 0x41, 0x44,
	0x5f, 0x52, 0x45, 0x51, 0x55, 0x45, 0x53, 0x54, 0x10, 0x64, 0x12, 0x1d, 0x0a, 0x19, 0x4a, 0x4f,
	0x49, 0x4e, 0x5f, 0x51, 0x55, 0x45, 0x55, 0x45, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x4e, 0x41,
	0x4c, 0x5f, 0x45, 0x52, 0x52, 0x4f, 0x52, 0x10, 0x65, 0x2a, 0x92, 0x01, 0x0a, 0x19, 0x43, 0x68,
	0x65, 0x63, 0x6b, 0x51, 0x75, 0x65, 0x75, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x45, 0x72,
	0x72, 0x6f, 0x72, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x21, 0x0a, 0x1d, 0x43, 0x48, 0x45, 0x43, 0x4b,
	0x5f, 0x51, 0x55, 0x45, 0x55, 0x45, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x45, 0x52,
	0x52, 0x4f, 0x52, 0x5f, 0x4e, 0x4f, 0x4e, 0x45, 0x10, 0x00, 0x12, 0x24, 0x0a, 0x20, 0x43, 0x48,
	0x45, 0x43, 0x4b, 0x5f, 0x51, 0x55, 0x45, 0x55, 0x45, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53,
	0x5f, 0x45, 0x52, 0x52, 0x4f, 0x52, 0x5f, 0x52, 0x45, 0x51, 0x55, 0x45, 0x53, 0x54, 0x10, 0x64,
	0x12, 0x2c, 0x0a, 0x28, 0x43, 0x48, 0x45, 0x43, 0x4b, 0x5f, 0x51, 0x55, 0x45, 0x55, 0x45, 0x5f,
	0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x45, 0x52, 0x52, 0x52, 0x4f, 0x52, 0x5f, 0x49, 0x4e,
	0x54, 0x45, 0x52, 0x4e, 0x41, 0x4c, 0x5f, 0x45, 0x52, 0x52, 0x4f, 0x52, 0x10, 0x65, 0x2a, 0x75,
	0x0a, 0x0b, 0x51, 0x75, 0x65, 0x75, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x18, 0x0a,
	0x14, 0x51, 0x55, 0x45, 0x55, 0x45, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x50, 0x45,
	0x4e, 0x44, 0x49, 0x4e, 0x47, 0x10, 0x00, 0x12, 0x18, 0x0a, 0x14, 0x51, 0x55, 0x45, 0x55, 0x45,
	0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x4d, 0x41, 0x54, 0x43, 0x48, 0x45, 0x44, 0x10,
	0x01, 0x12, 0x18, 0x0a, 0x14, 0x51, 0x55, 0x45, 0x55, 0x45, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55,
	0x53, 0x5f, 0x45, 0x58, 0x50, 0x49, 0x52, 0x45, 0x44, 0x10, 0x02, 0x12, 0x18, 0x0a, 0x14, 0x51,
	0x55, 0x45, 0x55, 0x45, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x49, 0x4e, 0x56, 0x41,
	0x4c, 0x49, 0x44, 0x10, 0x03, 0x32, 0xcf, 0x01, 0x0a, 0x0c, 0x51, 0x75, 0x65, 0x75, 0x65, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x54, 0x0a, 0x09, 0x4a, 0x6f, 0x69, 0x6e, 0x51, 0x75,
	0x65, 0x75, 0x65, 0x12, 0x22, 0x2e, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x69, 0x6e, 0x67, 0x5f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x4a, 0x6f, 0x69, 0x6e, 0x51, 0x75, 0x65, 0x75, 0x65,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x69,
	0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x4a, 0x6f, 0x69, 0x6e, 0x51,
	0x75, 0x65, 0x75, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x69, 0x0a, 0x10,
	0x43, 0x68, 0x65, 0x63, 0x6b, 0x51, 0x75, 0x65, 0x75, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x12, 0x29, 0x2e, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2e, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x51, 0x75, 0x65, 0x75, 0x65, 0x53, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2a, 0x2e, 0x6d, 0x61,
	0x74, 0x63, 0x68, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x43,
	0x68, 0x65, 0x63, 0x6b, 0x51, 0x75, 0x65, 0x75, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x25, 0x5a, 0x23, 0x63, 0x73, 0x33, 0x32, 0x31,
	0x39, 0x2d, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x2d, 0x61, 0x79, 0x32, 0x32, 0x32, 0x33,
	0x73, 0x31, 0x2d, 0x67, 0x33, 0x33, 0x2f, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_matching_service_proto_rawDescOnce sync.Once
	file_matching_service_proto_rawDescData = file_matching_service_proto_rawDesc
)

func file_matching_service_proto_rawDescGZIP() []byte {
	file_matching_service_proto_rawDescOnce.Do(func() {
		file_matching_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_matching_service_proto_rawDescData)
	})
	return file_matching_service_proto_rawDescData
}

var file_matching_service_proto_enumTypes = make([]protoimpl.EnumInfo, 3)
var file_matching_service_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_matching_service_proto_goTypes = []interface{}{
	(JoinQueueErrorCode)(0),          // 0: matching_service.JoinQueueErrorCode
	(CheckQueueStatusErrorCode)(0),   // 1: matching_service.CheckQueueStatusErrorCode
	(QueueStatus)(0),                 // 2: matching_service.QueueStatus
	(*JoinQueueRequest)(nil),         // 3: matching_service.JoinQueueRequest
	(*JoinQueueResponse)(nil),        // 4: matching_service.JoinQueueResponse
	(*CheckQueueStatusRequest)(nil),  // 5: matching_service.CheckQueueStatusRequest
	(*CheckQueueStatusResponse)(nil), // 6: matching_service.CheckQueueStatusResponse
	(QuestionDifficulty)(0),          // 7: common.QuestionDifficulty
}
var file_matching_service_proto_depIdxs = []int32{
	7, // 0: matching_service.JoinQueueRequest.difficulty:type_name -> common.QuestionDifficulty
	0, // 1: matching_service.JoinQueueResponse.error_code:type_name -> matching_service.JoinQueueErrorCode
	2, // 2: matching_service.CheckQueueStatusResponse.queue_status:type_name -> matching_service.QueueStatus
	1, // 3: matching_service.CheckQueueStatusResponse.error_code:type_name -> matching_service.CheckQueueStatusErrorCode
	3, // 4: matching_service.QueueService.JoinQueue:input_type -> matching_service.JoinQueueRequest
	5, // 5: matching_service.QueueService.CheckQueueStatus:input_type -> matching_service.CheckQueueStatusRequest
	4, // 6: matching_service.QueueService.JoinQueue:output_type -> matching_service.JoinQueueResponse
	6, // 7: matching_service.QueueService.CheckQueueStatus:output_type -> matching_service.CheckQueueStatusResponse
	6, // [6:8] is the sub-list for method output_type
	4, // [4:6] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_matching_service_proto_init() }
func file_matching_service_proto_init() {
	if File_matching_service_proto != nil {
		return
	}
	file_types_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_matching_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*JoinQueueRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_matching_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*JoinQueueResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_matching_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CheckQueueStatusRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_matching_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CheckQueueStatusResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_matching_service_proto_rawDesc,
			NumEnums:      3,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_matching_service_proto_goTypes,
		DependencyIndexes: file_matching_service_proto_depIdxs,
		EnumInfos:         file_matching_service_proto_enumTypes,
		MessageInfos:      file_matching_service_proto_msgTypes,
	}.Build()
	File_matching_service_proto = out.File
	file_matching_service_proto_rawDesc = nil
	file_matching_service_proto_goTypes = nil
	file_matching_service_proto_depIdxs = nil
}
