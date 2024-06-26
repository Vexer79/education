(function (global) {
    let ajaxUtils = {};

    function getRequestObject() {
        if (global.XMLHttpRequest) {
            return (new XMLHttpRequest());
        } else {
            global.alert("Ajax is not supported");
            return (null);
        }
    }

    ajaxUtils.sendGetRequest =
        function (requestUrl, responseHandler) {
            let request = getRequestObject();
            request.onreadystatechange =
                function () {
                    handleResponse(request, responseHandler);
                };
            request.open("GET", requestUrl, true);
            request.send(null);
        };

    function handleResponse(request, responseHandler) {
        if ((request.readyState == 4) &&
            (request.status == 200)) {
            responseHandler(request);
        }
    }

    ajaxUtils.sendPostRequest =
        function (requestUrl, requestBody, responseHandler) {
            let request = getRequestObject();
            request.onreadystatechange =
                function () {
                    handleResponse(request, responseHandler);
                };
            request.open("POST", requestUrl, true);
            request.send(requestBody);
        };

    global.ajaxUtils = ajaxUtils;
})(window);

