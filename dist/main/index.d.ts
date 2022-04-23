export interface IError {
    message: string;
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
    UserNotRegistered = "UserNotRegistered",
    TooManyVerificationCodes = "TooManyVerificationCodes",
    NicknameAlreadyTaken = "NicknameAlreadyTaken",
    UserBlockedByInterlocutor = "UserBlockedByInterlocutor",
    ChatNotExists = "ChatNotExists"
}
export declare type IAudioAttachment = IAttachmentBase & {
    fileName: string;
    duration: number;
};
export interface IAttachmentBase {
    /** @format int64 */
    id: number;
    /** @format date-time */
    creationDateTime: string;
    type: AttachmentType;
    url: string;
    /** @format int64 */
    byteSize: number;
}
export declare enum AttachmentType {
    Audio = "Audio",
    Voice = "Voice",
    Video = "Video",
    Picture = "Picture",
    Raw = "Raw"
}
export interface IGetAudioAttachmentsRequest {
    page: IPaginationParams;
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
    url: string;
    fileName: string;
    /** @format int32 */
    duration: number;
    /** @format int64 */
    byteSize: number;
}
export interface ICreateAvatarRequest {
    url: string;
    previewUrl: string;
}
export interface IAddUserIntoBlackListRequest {
    /** @format int64 */
    userId: number;
}
export interface ICall {
    /** @format int64 */
    id: number;
    /** @format date-time */
    creationDateTime: string;
    userInterlocutor: IUser;
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
    firstName: string;
    lastName: string;
    phoneNumber: string;
    nickname: string;
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
    url: string;
    previewUrl: string;
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
    page: IPaginationParams;
    name?: string;
}
export interface IAcceptCallRequest {
    answer: any;
    isVideoEnabled: boolean;
    /** @format int64 */
    userInterlocutorId: number;
}
export interface ISendCallOfferResponse {
    isInterlocutorBusy: boolean;
}
export interface ISendCallOfferRequest {
    /** @format int64 */
    userInterlocutorId: number;
    offer: any;
    isVideoEnabled: boolean;
}
export interface ISendIceCandidateRequest {
    candidate: any;
    /** @format int64 */
    interlocutorId: number;
}
export interface IAcceptRenegotiationRequest {
    answer: any;
    isVideoEnabled: boolean;
    /** @format int64 */
    userInterlocutorId: number;
}
export interface ISendRenegotiationRequest {
    /** @format int64 */
    interlocutorId: number;
    offer: any;
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
    /** @format int64 */
    interlocutorLastReadMessageId?: number;
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
    name: string;
    description?: string;
    /** @format int32 */
    membersCount: number;
    /** @format int64 */
    userCreatorId: number;
}
export interface IMessage {
    /** @format int64 */
    id: number;
    userCreator: IUser;
    /** @format int64 */
    userCreatorId: number;
    /** @format date-time */
    creationDateTime: string;
    isDeleted: boolean;
    text?: string;
    systemMessageType: SystemMessageType;
    linkedMessage?: ILinkedMessage;
    linkedMessageType?: MessageLinkType;
    attachments: IAttachmentBase[];
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
    GroupChatMemberLeft = "GroupChatMemberLeft",
    UserCreated = "UserCreated",
    CallEnded = "CallEnded"
}
export interface ILinkedMessage {
    /** @format int64 */
    id: number;
    userCreator: IUser;
    /** @format int64 */
    userCreatorId: number;
    text?: string;
    isEdited: boolean;
    isDeleted: boolean;
    attachments: IAttachmentBase[];
}
export declare enum MessageLinkType {
    Reply = "Reply",
    Forward = "Forward"
}
export interface IGetChatsRequest {
    name?: string;
    showOnlyHidden: boolean;
    page: IPaginationParams;
}
export interface IMarkChatAsReadRequest {
    /** @format int64 */
    chatId: number;
    /** @format int64 */
    lastReadMessageId: number;
}
export interface IDismissAddToContactsRequest {
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
    chatIds: number[];
}
export interface IChangeChatsMuteStatusRequest {
    isMuted: boolean;
    chatIds: number[];
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
    page: IPaginationParams;
    name?: string;
}
export interface IAddUserIntoContactsRequest {
    /** @format int64 */
    userId: number;
}
export interface IRemoveUsersFromContactListRequest {
    userIds: number[];
}
export interface IImportContactsRequest {
    phoneNumbers: string[];
}
export interface IGetGroupChatMembersRequest {
    /** @format int64 */
    groupChatId: number;
    name?: string;
    page: IPaginationParams;
}
export interface IGetAllowedUsersForGroupChatRequest {
    /** @format int64 */
    groupChatId: number;
    name?: string;
    page: IPaginationParams;
}
export interface IRemoveUserFromGroupChatRequest {
    /** @format int64 */
    userId: number;
    /** @format int64 */
    groupChatId: number;
}
export interface ICreateGroupChatResponse {
    /** @format int64 */
    id: number;
}
export interface ICreateGroupChatRequest {
    name: string;
    userIds: number[];
    description?: string;
    /** @format int64 */
    avatarId?: number;
}
export interface IAddUsersIntoGroupChatRequest {
    /** @format int64 */
    id: number;
    userIds: number[];
}
export interface IEditGroupChatRequest {
    /** @format int64 */
    id: number;
    name: string;
    description?: string;
    /** @format int64 */
    avatarId?: number;
}
export interface IGetMessagesRequest {
    page: IPaginationParams;
    /** @format int64 */
    chatId: number;
    searchString?: string;
}
export interface ICreateMessageResponse {
    /** @format int64 */
    id: number;
}
export interface ICreateMessageRequest {
    text?: string;
    /** @format int64 */
    chatId: number;
    attachmentIds?: number[];
    link?: IMessageLink;
    /** @format int64 */
    clientId: number;
}
export interface IMessageLink {
    type: MessageLinkType;
    /** @format int64 */
    originalMessageId: number;
}
export interface IEditMessageRequest {
    /** @format int64 */
    messageId: number;
    text?: string;
    removedAttachmentIds?: number[];
    newAttachmentIds?: number[];
}
export interface IDeleteMessagesRequest {
    /** @format int64 */
    chatId: number;
    ids: number[];
    forEveryone: boolean;
}
export interface INotifyAboutUserMessageTypingRequest {
    /** @format int64 */
    chatId: number;
    interlocutorName: string;
}
export declare type IPictureAttachment = IAttachmentBase & {
    previewUrl: string;
    fileName: string;
};
export interface IGetPictureAttachmentsRequest {
    /** @format int64 */
    chatId: number;
    page: IPaginationParams;
}
export interface ICreatePictureAttachmentRequest {
    url: string;
    previewUrl: string;
    /** @format int64 */
    byteSize: number;
    fileName: string;
}
export interface ISubscribeToPushNotificationsRequest {
    token: string;
}
export declare type IRawAttachment = IAttachmentBase & {
    fileName: string;
};
export interface IGetRawAttachmentsRequest {
    page: IPaginationParams;
    /** @format int64 */
    chatId: number;
}
export interface ICreateRawAttachmentRequest {
    url: string;
    fileName: string;
    /** @format int64 */
    byteSize: number;
}
export interface ISession {
    /** @format int64 */
    id: number;
    ipAddress: string;
    /** @format date-time */
    signedInAt: string;
    /** @format date-time */
    lastAccessedAt: string;
    os: string;
    clientApp: string;
}
export interface ITerminateSessionRequest {
    /** @format int64 */
    sessionId: number;
}
export interface IEditUserRequest {
    firstName: string;
    lastName: string;
    /** @format int64 */
    avatarId?: number;
    nickname: string;
}
export interface ICreateUserResponse {
    /** @format int64 */
    id: number;
}
export interface ICreateUserRequest {
    firstName: string;
    lastName: string;
    nickname: string;
    phoneNumber: string;
    /** @format int64 */
    avatarId?: number;
}
export interface IChangeUserPhoneNumberRequest {
    confirmationCode: string;
    phoneNumber: string;
}
export interface ISendSmsCodeRequest {
    phoneNumber: string;
}
export interface ISecurityTokens {
    accessToken: string;
    refreshToken: string;
}
export interface ILoginRequest {
    phoneNumber: string;
    code: string;
}
export interface IVerifySmsCodeResponse {
    isCodeCorrect: boolean;
    userExists: boolean;
}
export interface IVerifySmsCodeRequest {
    phoneNumber: string;
    code: string;
}
export interface IRefreshTokenRequest {
    refreshToken: string;
}
export interface IChangeOnlineStatusRequest {
    isOnline: boolean;
}
export interface IGetUserByPhoneNumberQueryResult {
    inContacts: boolean;
    user: IUser;
}
export declare type IVideoAttachment = IAttachmentBase & {
    fileName: string;
    firstFrameUrl: string;
    duration: number;
};
export interface IGetVideoAttachmentsRequest {
    page: IPaginationParams;
    /** @format int64 */
    chatId: number;
}
export interface ICreateVideoAttachmentRequest {
    url: string;
    /** @format int64 */
    byteSize: number;
    /** @format int32 */
    duration: number;
    firstFrameUrl: string;
    fileName: string;
}
export declare type IVoiceAttachment = IAttachmentBase & {
    waveFormJson: string;
    duration: number;
};
export interface IGetVoiceAttachmentsRequest {
    page: IPaginationParams;
    /** @format int64 */
    chatId: number;
}
export interface ICreateVoiceAttachmentRequest {
    url: string;
    /** @format int64 */
    byteSize: number;
    /** @format int32 */
    duration: number;
    waveFormJson: string;
}
export interface ICallEndedSystemMessage {
    /** @format int64 */
    userCallerId: number;
    /** @format int64 */
    userCalleeId: number;
    /** @format int32 */
    duration?: number;
    status: any;
}
export interface IGroupChatMemberAddedSystemMessage {
    /** @format int64 */
    addedUserId: number;
    addedUserName: string;
}
export interface IGroupChatMemberLeftSystemMessage {
    userName: string;
}
export interface IGroupChatMemberRemovedSystemMessage {
    /** @format int64 */
    removedUserId: number;
    removedUserName: string;
}
export interface IGroupChatNameChangedSystemMessage {
    oldName: string;
    newName: string;
}
