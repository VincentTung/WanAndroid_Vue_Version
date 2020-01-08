import OriginJsonP from 'jsonp'
export default function jsonp(url, data, option) {
    return new Promise((resolve, reject) => {
        OriginJsonP(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}