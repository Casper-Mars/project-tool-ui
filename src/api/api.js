import axios from 'axios'
import config from '../../vue.config'
import ElementUI from 'element-ui'

function apiCall(url, method, headers, params, success, failure, error) {
    url = config.publicPath + url;
    url = formatUrl(url);

    // const loading = this.$loading({
    //     lock: true,
    //     text: 'Loading',
    //     spinner: 'el-icon-loading',
    //     background: 'rgba(0, 0, 0, 0.7)'
    // });

    if (!headers) {
        headers = {}
    }
    headers["Content-Type"] = "application/json";
    axios({
        url: url,
        method: method,
        data: method === 'post' || method === 'put' ? params : null,
        params: method === 'get' || method === 'delete' ? params : null,
        headers: headers
    }).then((data) => {
        // loading.close();
        if (data.status === 200) {
            success(data.data);
        } else {
            failure(data)
        }
    }).catch(function (err) {
        console.log(err);
        // loading.close();
        if (err) {
            let res = err.response;
            ElementUI.Message.warning('api error');
            if (error) {
                error(res);
            }
        }
    })
}

/*除去url中出现的“//”，转为“/”*/
function formatUrl(url) {
    if (url.indexOf("http://") === 1) {
        return url.substring(1, url.length)
    }
    return url.replace("//", "/");
}


export default {
    get: function (url, params, success, failure, error, headers = null) {
        return apiCall(url, "get", headers, params, success, failure, error);
    },
    post: function (url, params, success, failure, error, headers = null) {
        return apiCall(url, "post", headers, params, success, failure, error);
    },
    put: function (url, params, success, failure, error, headers = null) {
        return apiCall(url, "put", headers, params, success, failure, error);
    },
    delete: function (url, params, success, failure, error, headers = null) {
        return apiCall(url, "delete", headers, params, success, failure, error);
    },
}
