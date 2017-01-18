//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

  },
  loadData: function () {
    wx.request({
      url: 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10',
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log("res.data");
        var data = res.data;
      }
    });
  }


})
