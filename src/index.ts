/* eslint-disable @typescript-eslint/no-explicit-any */
import { WebsocketService, Socket, WsClient } from './typings';

export type Options = WebsocketService.Options;

export type ServerOptions = WebsocketService.Options;

export type MiddlewareFn<Attribute extends Record<string, any>> = WebsocketService.MiddlewareFn<Attribute>;

export type MethodFn<Attribute extends Record<string, any>> = WebsocketService.MethodFn<Attribute>;

export type OnlineCallbackFn = WebsocketService.OnlineCallbackFn;

export type OfflineCallbackFn<Attribute extends Record<string, any>> = WebsocketService.OfflineCallbackFn<Attribute>;

export type ErrorCallbackFn<Attribute extends Record<string, any>, E> = WebsocketService.ErrorCallbackFn<Attribute, E>;

export type MethodResponse = Socket.MethodResponse;

export type Link<Attribute extends Record<string, any>> = Socket.Link<Attribute>;

export type ClientOptions = WsClient.Options;

export type ListenCallbackFn = WsClient.ListenCallbackFn;

export type RequestResult = WsClient.RequestResult;

export { WebsocketServer } from './server';

export { WebsocketClient } from './client';
