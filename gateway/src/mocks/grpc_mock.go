// Code generated by MockGen. DO NOT EDIT.
// Source: cs3219-project-ay2223s1-g33/gateway/proto (interfaces: SessionServiceClient)

// Package mocks is a generated GoMock package.
package mocks

import (
	context "context"
	proto "cs3219-project-ay2223s1-g33/gateway/proto"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	grpc "google.golang.org/grpc"
)

// MockSessionServiceClient is a mock of SessionServiceClient interface.
type MockSessionServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockSessionServiceClientMockRecorder
}

// MockSessionServiceClientMockRecorder is the mock recorder for MockSessionServiceClient.
type MockSessionServiceClientMockRecorder struct {
	mock *MockSessionServiceClient
}

// NewMockSessionServiceClient creates a new mock instance.
func NewMockSessionServiceClient(ctrl *gomock.Controller) *MockSessionServiceClient {
	mock := &MockSessionServiceClient{ctrl: ctrl}
	mock.recorder = &MockSessionServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockSessionServiceClient) EXPECT() *MockSessionServiceClientMockRecorder {
	return m.recorder
}

// AddBlacklist mocks base method.
func (m *MockSessionServiceClient) AddBlacklist(arg0 context.Context, arg1 *proto.AddBlacklistRequest, arg2 ...grpc.CallOption) (*proto.AddBlacklistResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "AddBlacklist", varargs...)
	ret0, _ := ret[0].(*proto.AddBlacklistResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// AddBlacklist indicates an expected call of AddBlacklist.
func (mr *MockSessionServiceClientMockRecorder) AddBlacklist(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddBlacklist", reflect.TypeOf((*MockSessionServiceClient)(nil).AddBlacklist), varargs...)
}

// CreateToken mocks base method.
func (m *MockSessionServiceClient) CreateToken(arg0 context.Context, arg1 *proto.CreateTokenRequest, arg2 ...grpc.CallOption) (*proto.CreateTokenResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "CreateToken", varargs...)
	ret0, _ := ret[0].(*proto.CreateTokenResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateToken indicates an expected call of CreateToken.
func (mr *MockSessionServiceClientMockRecorder) CreateToken(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateToken", reflect.TypeOf((*MockSessionServiceClient)(nil).CreateToken), varargs...)
}

// ValidateToken mocks base method.
func (m *MockSessionServiceClient) ValidateToken(arg0 context.Context, arg1 *proto.ValidateTokenRequest, arg2 ...grpc.CallOption) (*proto.ValidateTokenResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ValidateToken", varargs...)
	ret0, _ := ret[0].(*proto.ValidateTokenResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ValidateToken indicates an expected call of ValidateToken.
func (mr *MockSessionServiceClientMockRecorder) ValidateToken(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ValidateToken", reflect.TypeOf((*MockSessionServiceClient)(nil).ValidateToken), varargs...)
}
