import hyRequest from ".."


export function getEntireRoomList(offset = 0, size =20 ){
    // offect偏移量=20，size=20:请求20条数据，如果第二页的20条数据: offset = 20, size =20 
    return hyRequest.get({
        url:"entire/list",
        params:{
            offset,
            size
        }
    })
}
