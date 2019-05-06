//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    con:[]  //所有文章信息
  },
  //事件处理函数

  //内容详情
  list: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../wzdetails/wzdetails?id='+ id
    })
  },
  //聊天室
  into:function () {
    wx.navigateTo({
      url: '../chat/chat'
    })
  },
  onLoad: function (options) {
    
  },
  onShow:function(){
    var ti = this;
    //页面显示时发起请求获取文章信息
    wx: wx.request({
      url: 'https://buke.weiyuanna.com/api/articleList',
      method: 'POST',
      data: {
        signature:app.user  //保存用户的id信息
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        ti.setData({
          con:res.data.data.articleList
        })
      }
    })
  }
})
