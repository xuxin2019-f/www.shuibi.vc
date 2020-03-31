// 先这么写
export function getToken() {
    return this.$http.post('/login').then(
         res.getHeader('token')
    )
}