"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var graphqueryable_1 = require("./graphqueryable");
var attachments_1 = require("./attachments");
var Conversations = /** @class */ (function (_super) {
    __extends(Conversations, _super);
    function Conversations(baseUrl, path) {
        if (path === void 0) { path = "conversations"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Create a new conversation by including a thread and a post.
     *
     * @param properties Properties used to create the new conversation
     */
    Conversations.prototype.add = function (properties) {
        return this.postCore({
            body: JSON.stringify(properties),
        });
    };
    /**
     * Gets a conversation from this collection by id
     *
     * @param id Group member's id
     */
    Conversations.prototype.getById = function (id) {
        return new Conversation(this, id);
    };
    return Conversations;
}(graphqueryable_1.GraphQueryableCollection));
exports.Conversations = Conversations;
var Threads = /** @class */ (function (_super) {
    __extends(Threads, _super);
    function Threads(baseUrl, path) {
        if (path === void 0) { path = "threads"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a thread from this collection by id
     *
     * @param id Group member's id
     */
    Threads.prototype.getById = function (id) {
        return new Thread(this, id);
    };
    /**
     * Adds a new thread to this collection
     *
     * @param properties properties used to create the new thread
     * @returns Id of the new thread
     */
    Threads.prototype.add = function (properties) {
        return this.postCore({
            body: JSON.stringify(properties),
        });
    };
    return Threads;
}(graphqueryable_1.GraphQueryableCollection));
exports.Threads = Threads;
var Posts = /** @class */ (function (_super) {
    __extends(Posts, _super);
    function Posts(baseUrl, path) {
        if (path === void 0) { path = "posts"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a thread from this collection by id
     *
     * @param id Group member's id
     */
    Posts.prototype.getById = function (id) {
        return new Post(this, id);
    };
    /**
     * Adds a new thread to this collection
     *
     * @param properties properties used to create the new thread
     * @returns Id of the new thread
     */
    Posts.prototype.add = function (properties) {
        return this.postCore({
            body: JSON.stringify(properties),
        });
    };
    return Posts;
}(graphqueryable_1.GraphQueryableCollection));
exports.Posts = Posts;
var Conversation = /** @class */ (function (_super) {
    __extends(Conversation, _super);
    function Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Conversation.prototype, "threads", {
        /**
         * Get all the threads in a group conversation.
         */
        get: function () {
            return new Threads(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates this conversation
     */
    Conversation.prototype.update = function (properties) {
        return this.patchCore({
            body: JSON.stringify(properties),
        });
    };
    /**
     * Deletes this member from the group
     */
    Conversation.prototype.delete = function () {
        return this.deleteCore();
    };
    return Conversation;
}(graphqueryable_1.GraphQueryableInstance));
exports.Conversation = Conversation;
var Thread = /** @class */ (function (_super) {
    __extends(Thread, _super);
    function Thread() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Thread.prototype, "posts", {
        /**
         * Get all the threads in a group conversation.
         */
        get: function () {
            return new Posts(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    Thread.prototype.reply = function (post) {
        return this.clone(Thread, "reply").postCore({
            body: JSON.stringify({
                post: post,
            }),
        });
    };
    /**
     * Deletes this member from the group
     */
    Thread.prototype.delete = function () {
        return this.deleteCore();
    };
    return Thread;
}(graphqueryable_1.GraphQueryableInstance));
exports.Thread = Thread;
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Post.prototype, "attachments", {
        get: function () {
            return new attachments_1.Attachments(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Deletes this post
     */
    Post.prototype.delete = function () {
        return this.deleteCore();
    };
    /**
     * Forward a post to a recipient
     */
    Post.prototype.forward = function (info) {
        return this.clone(Post, "forward").postCore({
            body: JSON.stringify(info),
        });
    };
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    Post.prototype.reply = function (post) {
        return this.clone(Post, "reply").postCore({
            body: JSON.stringify({
                post: post,
            }),
        });
    };
    return Post;
}(graphqueryable_1.GraphQueryableInstance));
exports.Post = Post;
var Senders = /** @class */ (function (_super) {
    __extends(Senders, _super);
    function Senders(baseUrl, path) {
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Add a new user or group to this senders collection
     * @param id The full @odata.id value to add (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    Senders.prototype.add = function (id) {
        return this.clone(Senders, "$ref").postCore({
            body: JSON.stringify({
                "@odata.id": id,
            }),
        });
    };
    /**
     * Removes the entity from the collection
     *
     * @param id The full @odata.id value to remove (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    Senders.prototype.remove = function (id) {
        var remover = this.clone(Senders, "$ref");
        remover.query.add("$id", id);
        return remover.deleteCore();
    };
    return Senders;
}(graphqueryable_1.GraphQueryableCollection));
exports.Senders = Senders;
