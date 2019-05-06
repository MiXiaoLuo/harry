//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  list: function() {
    wx.navigateTo({
      url: '../wzdetails/wzdetails'
    })
  },
  into:function () {
    wx.navigateTo({
      url: '../chat/chat'
    })
  },
  onLoad: function (options) {
    wx:wx.request({
      url: 'https://buke.weiyuanna.com/api/articleList',
      method: 'POST',
      data:{

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res);
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
