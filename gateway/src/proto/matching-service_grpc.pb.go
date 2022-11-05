// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.9
// source: matching-service.proto

package proto

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// QueueServiceClient is the client API for QueueService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type QueueServiceClient interface {
	JoinQueue(ctx context.Context, in *JoinQueueRequest, opts ...grpc.CallOption) (*JoinQueueResponse, error)
	CheckQueueStatus(ctx context.Context, in *CheckQueueStatusRequest, opts ...grpc.CallOption) (*CheckQueueStatusResponse, error)
	LeaveQueue(ctx context.Context, in *LeaveQueueRequest, opts ...grpc.CallOption) (*LeaveQueueResponse, error)
}

type queueServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewQueueServiceClient(cc grpc.ClientConnInterface) QueueServiceClient {
	return &queueServiceClient{cc}
}

func (c *queueServiceClient) JoinQueue(ctx context.Context, in *JoinQueueRequest, opts ...grpc.CallOption) (*JoinQueueResponse, error) {
	out := new(JoinQueueResponse)
	err := c.cc.Invoke(ctx, "/matching_service.QueueService/JoinQueue", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queueServiceClient) CheckQueueStatus(ctx context.Context, in *CheckQueueStatusRequest, opts ...grpc.CallOption) (*CheckQueueStatusResponse, error) {
	out := new(CheckQueueStatusResponse)
	err := c.cc.Invoke(ctx, "/matching_service.QueueService/CheckQueueStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queueServiceClient) LeaveQueue(ctx context.Context, in *LeaveQueueRequest, opts ...grpc.CallOption) (*LeaveQueueResponse, error) {
	out := new(LeaveQueueResponse)
	err := c.cc.Invoke(ctx, "/matching_service.QueueService/LeaveQueue", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueueServiceServer is the server API for QueueService service.
// All implementations must embed UnimplementedQueueServiceServer
// for forward compatibility
type QueueServiceServer interface {
	JoinQueue(context.Context, *JoinQueueRequest) (*JoinQueueResponse, error)
	CheckQueueStatus(context.Context, *CheckQueueStatusRequest) (*CheckQueueStatusResponse, error)
	LeaveQueue(context.Context, *LeaveQueueRequest) (*LeaveQueueResponse, error)
	mustEmbedUnimplementedQueueServiceServer()
}

// UnimplementedQueueServiceServer must be embedded to have forward compatible implementations.
type UnimplementedQueueServiceServer struct {
}

func (UnimplementedQueueServiceServer) JoinQueue(context.Context, *JoinQueueRequest) (*JoinQueueResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method JoinQueue not implemented")
}
func (UnimplementedQueueServiceServer) CheckQueueStatus(context.Context, *CheckQueueStatusRequest) (*CheckQueueStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckQueueStatus not implemented")
}
func (UnimplementedQueueServiceServer) LeaveQueue(context.Context, *LeaveQueueRequest) (*LeaveQueueResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LeaveQueue not implemented")
}
func (UnimplementedQueueServiceServer) mustEmbedUnimplementedQueueServiceServer() {}

// UnsafeQueueServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to QueueServiceServer will
// result in compilation errors.
type UnsafeQueueServiceServer interface {
	mustEmbedUnimplementedQueueServiceServer()
}

func RegisterQueueServiceServer(s grpc.ServiceRegistrar, srv QueueServiceServer) {
	s.RegisterService(&QueueService_ServiceDesc, srv)
}

func _QueueService_JoinQueue_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(JoinQueueRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueueServiceServer).JoinQueue(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/matching_service.QueueService/JoinQueue",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueueServiceServer).JoinQueue(ctx, req.(*JoinQueueRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _QueueService_CheckQueueStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CheckQueueStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueueServiceServer).CheckQueueStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/matching_service.QueueService/CheckQueueStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueueServiceServer).CheckQueueStatus(ctx, req.(*CheckQueueStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _QueueService_LeaveQueue_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LeaveQueueRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueueServiceServer).LeaveQueue(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/matching_service.QueueService/LeaveQueue",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueueServiceServer).LeaveQueue(ctx, req.(*LeaveQueueRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// QueueService_ServiceDesc is the grpc.ServiceDesc for QueueService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var QueueService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "matching_service.QueueService",
	HandlerType: (*QueueServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "JoinQueue",
			Handler:    _QueueService_JoinQueue_Handler,
		},
		{
			MethodName: "CheckQueueStatus",
			Handler:    _QueueService_CheckQueueStatus_Handler,
		},
		{
			MethodName: "LeaveQueue",
			Handler:    _QueueService_LeaveQueue_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "matching-service.proto",
}
