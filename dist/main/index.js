"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageLinkType = exports.SystemMessageType = exports.CallStatus = exports.AttachmentType = exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["BadRequest"] = "BadRequest";
    ErrorCode["Unauthorized"] = "Unauthorized";
    ErrorCode["Forbidden"] = "Forbidden";
    ErrorCode["InternalServerError"] = "InternalServerError";
    ErrorCode["DuplicateNickname"] = "DuplicateNickname";
    ErrorCode["DuplicatePhoneNumber"] = "DuplicatePhoneNumber";
    ErrorCode["InvalidVerificationCode"] = "InvalidVerificationCode";
    ErrorCode["PhoneNumberNotConfirmed"] = "PhoneNumberNotConfirmed";
    ErrorCode["ResourceNotFound"] = "ResourceNotFound";
    ErrorCode["TooManyVerificationCodes"] = "TooManyVerificationCodes";
    ErrorCode["NicknameAlreadyTaken"] = "NicknameAlreadyTaken";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var AttachmentType;
(function (AttachmentType) {
    AttachmentType["Audio"] = "Audio";
    AttachmentType["Voice"] = "Voice";
    AttachmentType["Video"] = "Video";
    AttachmentType["Picture"] = "Picture";
    AttachmentType["Raw"] = "Raw";
})(AttachmentType = exports.AttachmentType || (exports.AttachmentType = {}));
var CallStatus;
(function (CallStatus) {
    CallStatus["Negotiating"] = "Negotiating";
    CallStatus["Active"] = "Active";
    CallStatus["Ended"] = "Ended";
    CallStatus["Cancelled"] = "Cancelled";
    CallStatus["Declined"] = "Declined";
    CallStatus["NotAnswered"] = "NotAnswered";
    CallStatus["Interrupted"] = "Interrupted";
})(CallStatus = exports.CallStatus || (exports.CallStatus = {}));
var SystemMessageType;
(function (SystemMessageType) {
    SystemMessageType["None"] = "None";
    SystemMessageType["GroupChatMemberRemoved"] = "GroupChatMemberRemoved";
    SystemMessageType["GroupChatAvatarChanged"] = "GroupChatAvatarChanged";
    SystemMessageType["GroupChatCreated"] = "GroupChatCreated";
    SystemMessageType["GroupChatMemberAdded"] = "GroupChatMemberAdded";
    SystemMessageType["GroupChatNameChanged"] = "GroupChatNameChanged";
    SystemMessageType["GroupChatAvatarRemoved"] = "GroupChatAvatarRemoved";
    SystemMessageType["UserCreated"] = "UserCreated";
    SystemMessageType["CallEnded"] = "CallEnded";
})(SystemMessageType = exports.SystemMessageType || (exports.SystemMessageType = {}));
var MessageLinkType;
(function (MessageLinkType) {
    MessageLinkType["Reply"] = "Reply";
    MessageLinkType["Forward"] = "Forward";
})(MessageLinkType = exports.MessageLinkType || (exports.MessageLinkType = {}));
