/* =========================================
 * Simple angular clone
 */
/*
module.exports = {
    isObject: function(value) {
        return value !== null && typeof value === 'object';
    },
    isString: function(value) {
        return typeof value === 'string';
    },
    isObjectx: function(value) { return this.isObject(value); }
    
};*/
(function()
{
    var slice = [].slice;
    
    function isObject(value) {
        return value !== null && typeof value === 'object';
    };
    function isFunction(value) {return typeof value === 'function';}
    
    var isArray = Array.isArray;
    
    function isString(value) {
        return typeof value === 'string';
    };
    // Hash key is set with ng-repeat
    function setHashKey(obj, h) {
        if (h) {
            obj.$$hashKey = h;
        } else {
            delete obj.$$hashKey;
        }
    }
    function baseExtend(dst, objs, deep) {
        var h = dst.$$hashKey;

        for (var i = 0, ii = objs.length; i < ii; ++i) {
            var obj = objs[i];
            if (!isObject(obj) && !isFunction(obj)) continue;
            var keys = Object.keys(obj);
            for (var j = 0, jj = keys.length; j < jj; j++) {
                var key = keys[j];
                var src = obj[key];

                if (deep && isObject(src)) {
                    if (!isObject(dst[key])) dst[key] = isArray(src) ? [] : {};
                    baseExtend(dst[key], [src], true);
                } else {
                    dst[key] = src;
                }
            }
        }
        setHashKey(dst, h);
        return dst;
    }
    function extend(dst) {
        return baseExtend(dst, slice.call(arguments, 1), false);
    }
    function merge(dst) {
        return baseExtend(dst, slice.call(arguments, 1), true);
    }

    var ang = {
        isObject:   isObject,
        isFunction: isFunction,
        isArray:    isArray,
        isString:   isString,
        extend:     extend,
        merge:      merge
    };
    module.exports = ang;
})();