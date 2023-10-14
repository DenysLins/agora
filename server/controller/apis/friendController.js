/**
 * Agora - Close the loop
 * © 2021-2023 Brian Gormanly
 * BSD 3-Clause License
 * see included LICENSE or https://opensource.org/licenses/BSD-3-Clause 
 */

// dependencies
const fs = require('fs');
let path = require('path');

// import models
const User = require('../../model/user');
// import controllers
const { errorController } = require("./apiErrorController");

// import util Models
const ApiMessage = require('../../model/util/ApiMessage');

// import services
const workspaceService = require('../../service/friendService');
const userService = require('../../service/userService');

exports.getAllFriends = async (req, res) => {
    let friends = await friendService.getAllFriends(req.user.userID);
    res.set("x-agora-message-title", "Success");
    res.set("x-agora-message-detail", "Returned all Friends");
    res.status(200).json(friends);
};

exports.saveFriend = async (req, res) => {
    let authUserId;
    if (req.user) {
        authUserId = req.user.userId;
    }
    else if (req.session.authUser) {
        authUserId = req.session.authUser.userId;
    }
};

exports.getFriendByID = async () => {
    let authUserId;
    if (req.user) {
        authUserId = req.user.userId;
    }
    else if (req.session.authUser) {
        authUserId = req.session.authUser.userId;
    }
    if (authUserID) {
        let friend = await friendService.getFriendByID(req.params.userID, authUserID);
        if (friend) {
            res.set("x-agora-message-title", "Success");
            res.set("x-agora-message-detail", "Returned friend by id");
            res.status(200).json(friend);
        }
        else {
            res.set("x-agora-message-title", "Not Found");
            res.set("x-agora-message-detail", "Friend not found");
            res.status(400).json(message);
        }
    }
};

exports.deleteFriendByID = async () => {

};
