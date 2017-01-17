//logs.js
var util = require('../../utils/util.js')
var lucky = require('../../utils/lucky.js');
var app = getApp();
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
    console.log(app.globalData.userInfo);
  },
  onShow:function(){
    console.log(app.globalData.userInfo);
    lucky.printLog("niuniu");
  },
  onPullDownRefresh: function () {
    console.log("__refresh");
  }
})
