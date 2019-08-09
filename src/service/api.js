import Config from '@/config/config'
import Request from './request'

const API_URL = Config.apiUrl

const API = {
    Novel: {
        // 获取书籍详情
        getBookDetail: id => {
            return Request.get(`${API_URL}/book/${id}`)
        },
        // 获取推荐列表
        getRecommendBookList: id => {
            return Request.get(`${API_URL}/book/${id}/recommend`)
        },
        // 获取所有排行榜
        getRankingList: () => {
            return Request.get(`${API_URL}/ranking/gender`)
        },
        // 获取分类
        getCategoryList: () => {
            return Request.get(`${API_URL}/cats/lv2/statistics`)
        },
        // 获取二级分类
        getMinorList: () => {
            return Request.get(`${API_URL}/cats/lv2`)
        },
        // 根据分类获取书籍列表
        getCategoryBookList: params => {
            return Request.get(`${API_URL}/book/by-categories`, params)
        },
        // 根据标签获取书籍列表
        getTagBookList: params => {
            return Request.get(`${API_URL}/book/by-tags`, params)
        }
    }
}

export default API