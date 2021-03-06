// pages/wzdetails/wzdetails.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{},  //文章信息
    user:{}   //用户信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ti = this;
    //发起请求查找文章信息
    wx:wx.request({
      url: 'https://buke.weiyuanna.com/api/articleDetail',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        signature:app.user,  //保存用户的id信息
        id: options.id       //文章的id信息
      },
      success: function(res) {
        console.log(res);
        ti.setData({
          list:res.data.data.articleInfo,
          user:res.data.data.authorInfo
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})