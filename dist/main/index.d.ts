export interface IError {
    message?: string;
    code: ErrorCode;
}
export declare enum ErrorCode {
    BadRequest = "BadRequest",
    Unauthorized = "Unauthorized",
    Forbidden = "Forbidden",
    InternalServerError = "InternalServerError",
    DuplicateNickname = "DuplicateNickname",
    DuplicatePhoneNumber = "DuplicatePhoneNumber",
    InvalidVerificationCode = "InvalidVerificationCode",
    PhoneNumberNotConfirmed = "PhoneNumberNotConfirmed",
    ResourceNotFound = "ResourceNotFound",
    TooManyVerificationCodes = "TooManyVerificationCodes",
    NicknameAlreadyTaken = "NicknameAlreadyTaken"
}
export declare type IAudioAttachment = IAttachmentBase & {
    fileName?: string;
    duration: number;
    type: AttachmentType;
};
export declare enum AttachmentType {
    Audio = "Audio",
    Voice = "Voice",
    Video = "Video",
    Picture = "Picture",
    Raw = "Raw"
}
export interface IAttachmentBase {
    /** @format int64 */
    id: number;
    /** @format date-time */
    creationDateTime: string;
    url?: string;
    /** @format int64 */
    byteSize: number;
    type: AttachmentType;
}
export interface IGetAudioAttachmentsRequest {
    page?: IPaginationParams;
    /** @format int64 */
    chatId: number;
}
export interface IPaginationParams {
    /** @format int32 */
    offset: number;
    /** @format int32 */
    limit: number;
}
export interface ICreateAudioAttachmentRequest {
    url?: string;
    fileName?: string;
    /** @format int32 */
    duration: number;
    /** @format int64 */
    byteSize: number;
}
export interface ICreateAvatarRequest {
    url?: string;
    previewUrl?: string;
}
export interface IAddUserIntoBlackListRequest {
    /** @format int64 */
    userId: number;
}
export interface IRemoveUserFromBlackListRequest {
    /** @format int64 */
    userId: number;
}
export interface ICall {
    /** @format int64 */
    id: number;
    /** @format date-time */
    creationDateTime: string;
    userInterlocutor?: IUser;
    /** @format int64 */
    userCallerId: number;
    status: CallStatus;
    /** @format date-time */
    startDateTime?: string;
    /** @format date-time */
    endDateTime?: string;
}
export interface IUser {
    /** @format int64 */
    id: number;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    nickname?: string;
    avatar?: IAvatar;
    /** @format date-time */
    lastOnlineTime: string;
    online: boolean;
    deactivated: boolean;
    deleted: boolean;
}
export interface IAvatar {
    /** @format int64 */
    id: number;
    url?: string;
    previewUrl?: string;
}
export declare enum CallStatus {
    Negotiating = "Negotiating",
    Active = "Active",
    Ended = "Ended",
    Cancelled = "Cancelled",
    Declined = "Declined",
    NotAnswered = "NotAnswered",
    Interrupted = "Interrupted"
}
export interface IGetCallsRequest {
    page?: IPaginationParams;
    name?: string;
}
export interface IAcceptCallRequest {
    answer?: any;
    isVideoEnabled: boolean;
    /** @format int64 */
    userInterlocutorId: number;
}
export interface ISendCallOfferCommandResponse {
    isInterlocutorBusy: boolean;
}
export interface ISendCallOfferRequest {
    /** @format int64 */
    userInterlocutorId: number;
    offer?: any;
    isVideoEnabled: boolean;
}
export interface ISendIceCandidateRequest {
    candidate?: any;
    /** @format int64 */
    interlocutorId: number;
}
export interface IAcceptRenegotiationRequest {
    answer?: any;
    isVideoEnabled: boolean;
    /** @format int64 */
    userInterlocutorId: number;
}
export interface ISendRenegotiationRequest {
    /** @format int64 */
    interlocutorId: number;
    offer?: any;
    isVideoEnabled: boolean;
}
export interface IChat {
    /** @format int64 */
    id: number;
    groupChat?: IGroupChat;
    interlocutor?: IUser;
    lastMessage?: IMessage;
    /** @format int32 */
    unreadMessagesCount: number;
    interlocutorLastReadMessageId?: string;
    isHidden: boolean;
    isMuted: boolean;
    isBlockedByInterlocutor: boolean;
    isBlockedByUser: boolean;
    isInContacts: boolean;
    isDismissedAddToContacts: boolean;
}
export interface IGroupChat {
    /** @format int64 */
    id: number;
    avatar?: IAvatar;
    name?: string;
    description?: string;
    /** @format int32 */
    membersCount: number;
    /** @format int64 */
    userCreatorId: number;
}
export interface IMessage {
    id: string;
    userCreator?: IUser;
    /** @format int64 */
    userCreatorId: number;
    /** @format date-time */
    creationDateTime: string;
    isDeleted: boolean;
    text?: string;
    systemMessageType: SystemMessageType;
    linkedMessage?: ILinkedMessage;
    linkedMessageType?: MessageLinkType;
    attachments?: IAttachmentBase[];
    isEdited: boolean;
}
export declare enum SystemMessageType {
    None = "None",
    GroupChatMemberRemoved = "GroupChatMemberRemoved",
    GroupChatAvatarChanged = "GroupChatAvatarChanged",
    GroupChatCreated = "GroupChatCreated",
    GroupChatMemberAdded = "GroupChatMemberAdded",
    GroupChatNameChanged = "GroupChatNameChanged",
    GroupChatAvatarRemoved = "GroupChatAvatarRemoved",
    UserCreated = "UserCreated",
    CallEnded = "CallEnded"
}
export interface ILinkedMessage {
    id: string;
    userCreator?: IUser;
    text?: string;
    isEdited: boolean;
    isDeleted: boolean;
    attachments?: IAttachmentBase[];
}
export declare enum MessageLinkType {
    Reply = "Reply",
    Forward = "Forward"
}
export interface IGetChatsRequest {
    name?: string;
    showOnlyHidden: boolean;
    showAll: boolean;
    page?: IPaginationParams;
}
export interface IMarkChatAsReadRequest {
    /** @format int64 */
    chatId: number;
    /** @format int64 */
    lastReadMessageId: number;
}
export interface IDismissAddToContactsCommand {
    /** @format int64 */
    userInterlocutorId: number;
}
export interface IClearChatRequest {
    forEveryone: boolean;
    /** @format int64 */
    chatId: number;
}
export interface IChangeChatsHiddenStatusRequest {
    isHidden: boolean;
    chatIds?: number[];
}
export interface IChangeChatsMuteStatusRequest {
    isMuted: boolean;
    chatIds?: number[];
}
export interface IChatInfo {
    /** @format int32 */
    rawAttachmentsCount: number;
    /** @format int32 */
    voiceAttachmentsCount: number;
    /** @format int32 */
    videoAttachmentsCount: number;
    /** @format int32 */
    audioAttachmentsCount: number;
    /** @format int32 */
    pictureAttachmentsCount: number;
}
export interface IGetContactsRequest {
    page?: IPaginationParams;
    name?: string;
}
export interface IAddUserIntoContactsRequest {
    /** @format int64 */
    userId: number;
}
export interface IRemoveUsersFromContactListCommand {
    userIds?: number[];
}
export interface IGetGroupChatMembersRequest {
    /** @format int64 */
    groupChatId: number;
    name?: string;
    page?: IPaginationParams;
}
export interface IRemoveUserFromGroupChatRequest {
    /** @format int64 */
    userId: number;
    /** @format int64 */
    groupChatId: number;
}
export interface ICreateGroupChatRequest {
    name?: string;
    userIds?: number[];
    description?: string;
    /** @format int64 */
    avatarId?: number;
}
export interface IAddUsersIntoGroupChatRequest {
    /** @format int64 */
    id: number;
    userIds?: number[];
}
export interface IEditGroupChatRequest {
    /** @format int64 */
    id: number;
    name?: string;
    description?: string;
    /** @format int64 */
    avatarId?: number;
}
export interface IGetMessagesRequest {
    page?: IPaginationParams;
    /** @format int64 */
    chatId: number;
    searchString?: string;
}
export interface ICreateMessageRequest {
    text?: string;
    /** @format int64 */
    chatId: number;
    attachments?: ITypedAttachmentId[];
    link?: IMessageLink;
    clientId: string;
}
export interface ITypedAttachmentId {
    /** @format int64 */
    id: number;
    type: AttachmentType;
}
export interface IMessageLink {
    type: MessageLinkType;
    originalMessageId: string;
}
export interface IEditMessageRequest {
    messageId: string;
    text?: string;
    removedAttachments?: ITypedAttachmentId[];
    newAttachments?: ITypedAttachmentId[];
}
export interface IDeleteMessagesRequest {
    ids?: string[];
    forEveryone: boolean;
}
export interface INotifyAboutUserMessageTypingRequest {
    /** @format int64 */
    chatId: number;
    text?: string;
    interlocutorName?: string;
}
export declare type IPictureAttachment = IAttachmentBase & {
    fileName?: string;
    previewUrl?: string;
    type: AttachmentType;
};
export interface IGetPictureAttachmentsRequest {
    /** @format int64 */
    chatId: number;
    page?: IPaginationParams;
}
export interface ICreatePictureAttachmentRequest {
    url?: string;
    previewUrl?: string;
    /** @format int64 */
    byteSize: number;
    fileName?: string;
}
export interface ISubscribeToPushNotificationsRequest {
    token: string;
}
export interface IUnsubscribeFromPushNotificationsRequest {
    token: string;
}
export declare type IRawAttachment = IAttachmentBase & {
    fileName?: string;
    type: AttachmentType;
};
export interface IGetRawAttachmentsRequest {
    page?: IPaginationParams;
    /** @format int64 */
    chatId: number;
}
export interface ICreateRawAttachmentRequest {
    url?: string;
    fileName?: string;
    /** @format int64 */
    byteSize: number;
}
export interface ISessionDto {
    /** @format int64 */
    id: number;
    ipAddress?: string;
    /** @format date-time */
    signedInDateTime: string;
    /** @format date-time */
    lastAccessedDateTime: string;
    os?: string;
    clientApp?: string;
}
export interface ITerminateSessionRequest {
    /** @format int64 */
    sessionId: number;
}
export interface IEditUserRequest {
    firstName?: string;
    lastName?: string;
    /** @format int64 */
    avatarId?: number;
    nickname?: string;
}
export interface ICreateUserRequest {
    lastName?: string;
    firstName?: string;
    nickname?: string;
    twoLetterCountryCode?: string;
    phoneNumber?: string;
    /** @format int64 */
    avatarId?: number;
}
export interface IChangeUserPhoneNumberRequest {
    confirmationCode?: string;
    phoneNumber?: string;
}
export interface ISendSmsCodeRequest {
    phoneNumber?: string;
}
export interface IVerifySmsCodeResponse {
    isCodeCorrect: boolean;
    userExists: boolean;
}
export interface IVerifySmsCodeRequest {
    phoneNumber?: string;
    code?: string;
}
export interface ISecurityTokens {
    accessToken?: string;
    refreshToken?: string;
    /** @format date-time */
    refreshTokenExpirationTime: string;
}
export interface ILoginRequest {
    phoneNumber?: string;
    code?: string;
}
export interface IRefreshTokenRequest {
    refreshToken?: string;
}
export interface IChangeOnlineStatusRequest {
    isOnline: boolean;
}
export declare type IVideoAttachment = IAttachmentBase & {
    fileName?: string;
    firstFrameUrl?: string;
    duration: number;
    type: AttachmentType;
};
export interface IGetVideoAttachmentsRequest {
    page?: IPaginationParams;
    /** @format int64 */
    chatId: number;
}
export interface ICreateVideoAttachmentRequest {
    url?: string;
    /** @format int64 */
    byteSize: number;
    /** @format int32 */
    duration: number;
    firstFrameUrl?: string;
    fileName?: string;
}
export declare type IVoiceAttachment = IAttachmentBase & {
    waveFormJson?: string;
    duration: number;
    type: AttachmentType;
};
export interface IGetVoiceAttachmentsRequest {
    page?: IPaginationParams;
    /** @format int64 */
    chatId: number;
}
export interface ICreateVoiceAttachmentRequest {
    url?: string;
    /** @format int64 */
    byteSize: number;
    /** @format int32 */
    duration: number;
    waveFormJson?: string;
}
