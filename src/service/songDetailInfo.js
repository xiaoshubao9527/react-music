import request from './request'

export const getPlaySongDetailInfo = (ids) => {
  return request({
    url: 'song/detail',
    params: {
      ids
    }
  })
}
export const getPlaySongUrl = (id) => {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}