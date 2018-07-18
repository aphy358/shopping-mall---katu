import http from './http'


// 获取当前用户信息
export const getCurrentUser = (args, loading = true) => http.post("/user/getCurrentUser.do", args, loading)


// 登录
export const syncLogin = (args, loading = true) => http.post("/user/loginfzg.do", args, loading)


// 退出
export const syncLogout = (args, loading = true) => http.post("/user/loginoutfzg.do", args, loading)


// 获取验证码
export const syncCheckcode = (args, loading = false) => http.post("/user/getCheckcodeImg.do", args, loading)


// 获取轮播图
export const syncGetCarouselList = (args, loading = true) => http.post("/user/getAdInfoData.do", args, loading)


// 查询关注列表
export const syncGetFavoriteList = (args, loading = true) => http.post("/fzgCustomerFavorite/getMyFavoriteList.do", args, loading)


// 查询订单列表
export const syncGetOrderList = (args, loading = true) => http.post("/myinfo/queryOrderList.do", args, loading)


// 查询今日主推
export const syncGetTodayPush = (args, loading = true) => http.post("/mainPush/queryMainPushProductList.do", args, loading)


// 查询今日热推
export const syncGetHotPush = (args, loading = true) => http.post("/user/getAdInfoData.do", args, loading)


// 标记喜欢
export const syncSaveFavorite = (args, loading = true) => http.post("/fzgCustomerFavorite/saveFavorite.do", args, loading)


// 取消喜欢
export const syncRemoveFavorite = (args, loading = true) => http.post("/fzgCustomerFavorite/removeFavorite.do", args, loading)


