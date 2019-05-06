// pages/my/my.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login:'登录 / 注册',
    image:'../../img/portrait.png',
    code:'',
    encryptedData:'',
    iv:'',
    signature:'',
    rawData:'',  //
    location:''  //地理坐标
  },

  /*登录*/
  login:function(){
    var ti = this;
    //请求微信用户信息
    wx.getUserInfo({
      success:function(res){
        ti.setData({
          login:res.userInfo.nickName,
          image:res.userInfo.avatarUrl,
          iv:res.iv,
          signature:res.signature,
          rawData:res.rawData,
          encryptedData: res.encryptedData
        })
        //获取用户地理位置
        wx.getLocation({
          type: 'wgs84',
          success:function(res){
            ti.setData({
              location: '' + res.longitude + ',' + res.latitude +''
            })
            //获取code
            wx: wx.login({
              success: function (res) {
                ti.setData({
                  code: res.code
                })
                //发送请求给后台
                wx.request({
                  url: 'https://buke.weiyuanna.com/api/login',
                  method: 'POST',
                  data: {
                    encryptedData: ti.data.encryptedData,
                    iv: ti.data.iv,
                    signature: ti.data.signature,
                    rawData: ti.data.rawData,
                    location: ti.data.location,
                    code:ti.data.code
                  },
                  header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                  },
                  success(res) {
                    app.user = res.data.data.signature;
                  }
                })
              }
            })
          }
        })
      }
    })
  },
  //我的关注
  focus:function(){
    wx:wx.navigateTo({
      url: '../focus/focus'
    })
  },
  //我的收藏
  collection:function(){
    wx:wx.navigateTo({
      url: '../collection/collection'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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