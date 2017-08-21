import { get } from '../get'

export function getUserData() {
    const result = get('/api/home')
    return result
}

export function getListData(id, page) {
    const result = get('/api/homelist/' + encodeURIComponent(id) + '/' + page)
    return result
}