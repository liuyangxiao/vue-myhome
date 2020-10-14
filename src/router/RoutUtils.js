/**
 * 自动生成 @/pageviews/ 下的路由路径 暂时最多两层
 *  以Name 作为路径
 * @returns {Array}
 */
export function getFileByindex() {
    let getRouterMap = []
    let childMap = []
    const allComponents = require.context('@/pageviews/', true, /index.vue$/)
    let routPath = null
    let routData = null
    allComponents.keys().forEach(fileName => {
        let comp = allComponents(fileName)
        let fName = fileName.replace('/index.vue', '').replace('./', '').toString();
        let subint = fName.indexOf('/')
        let indexPath = ""
        if (subint === -1) {
            indexPath = fName //路径
            routData = {
                path: '/' + comp.default.name,//路径
                name: comp.default.name,//名称
                component: comp.default, //引入的文件
                children: [],
            }
        } else {
            indexPath = fName.substr(0, subint)//主路径
            childMap.push({
                path: comp.default.name,//路径
                name: comp.default.name,//名称
                component: comp.default, //引入的文件
                children: [],
            })
        }

        if (routPath !== indexPath || routPath !== null) {
            //不是第一次 查询-------或路径不一致则添加
            routData.children = childMap
            getRouterMap.push(routData)
        }
        routPath = indexPath

    })
    return getRouterMap
    // router.addRoutes(getRouterMap)
}