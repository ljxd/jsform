module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../usr/local/lib/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../../usr/local/lib/node_modules/webpack/node_modules/inherits/inherits_browser.js":
/*!***********************************************************!*\
  !*** (webpack)/node_modules/inherits/inherits_browser.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../../../../usr/local/lib/node_modules/webpack/node_modules/process/browser.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/process/browser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../../../usr/local/lib/node_modules/webpack/node_modules/util/support/isBufferBrowser.js":
/*!**************************************************************!*\
  !*** (webpack)/node_modules/util/support/isBufferBrowser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../../../../usr/local/lib/node_modules/webpack/node_modules/util/util.js":
/*!*******************************************!*\
  !*** (webpack)/node_modules/util/util.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = Object({"NODE_ENV":"development"}).NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../../../../usr/local/lib/node_modules/webpack/node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "../../../../usr/local/lib/node_modules/webpack/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buildin/global.js */ "../../../../usr/local/lib/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../../../usr/local/lib/node_modules/webpack/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./src/factory/factory.ts":
/*!********************************!*\
  !*** ./src/factory/factory.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const factory_1 = __webpack_require__(/*! ../libs/factory */ "./src/libs/factory.ts");
/**
 * JsonSchema工厂
 */


exports.schemaFieldFactory = new factory_1.BaseFactory();
/**
 * 关键字工厂
 */

exports.schemaKeyWordFactory = new factory_1.BaseFactory();
/**
 * 类型工厂
 */

exports.schemaTypeFactory = new factory_1.BaseFactory();
/**
 *
 * 存放jsonkey与schemaPath的对应关系
 */

exports.schemaKeysFactory = new factory_1.BaseFactory();

/***/ }),

/***/ "./src/factory/index.ts":
/*!******************************!*\
  !*** ./src/factory/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(/*! ./factory */ "./src/factory/factory.ts"));

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

const keywords_1 = __webpack_require__(/*! ./keywords */ "./src/keywords/index.ts");

const types_1 = __webpack_require__(/*! ./types */ "./src/types/index.ts");

const factory_1 = __webpack_require__(/*! ./factory */ "./src/factory/index.ts");

exports.schemaFieldFactory = factory_1.schemaFieldFactory;
exports.schemaKeyWordFactory = factory_1.schemaKeyWordFactory;
exports.schemaTypeFactory = factory_1.schemaTypeFactory;
exports.schemaKeysFactory = factory_1.schemaKeysFactory;

__export(__webpack_require__(/*! ./libs */ "./src/libs/index.ts"));

var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");

exports.typeOf = utils_1.typeOf;
exports.isArray = utils_1.isArray;
exports.isString = utils_1.isString;
exports.isNumber = utils_1.isNumber;
exports.mergeKeys = utils_1.mergeKeys;
factory_1.schemaKeyWordFactory.add("definitions", keywords_1.definitions).add("oneof", keywords_1.oneof).add("anyof", keywords_1.anyof).add("ref", keywords_1.ref);
factory_1.schemaTypeFactory.add("array", types_1.array).add("normal", types_1.normal) // .add("undefined", none)
// .add("number", none)
// .add("null", none)
// .add("any", none)
// .add("integer", none)
// .add("boolean", none)
.add("object", types_1.object);

/***/ }),

/***/ "./src/keywords/anyof.ts":
/*!*******************************!*\
  !*** ./src/keywords/anyof.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const resolve_1 = __webpack_require__(/*! ../libs/resolve */ "./src/libs/resolve.ts");

const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/**
 * 解析schema中的关键字 oneOf
 * 如果发现有oneOf关键字，遍历替换成schema
 * @param  {string}      $id    当前的schema的ID
 * @param  {JSONSchema6} schema 当前的schema
 * @return {JSONSchema6}        处理过后的schema
 */


const anyOf = ($id, schema) => {
  const {
    anyOf
  } = schema;

  if (anyOf && utils_1.isArray(anyOf)) {
    schema.anyOf = anyOf.map(schemaOfOne => {
      return resolve_1.resolve(schemaOfOne, schema.$id || resolve_1.getSchemaId(schema.$ref || "") ? undefined : resolve_1.getSchemaId($id));
    });
  }

  return schema;
};

exports.default = anyOf;

/***/ }),

/***/ "./src/keywords/defined.ts":
/*!*********************************!*\
  !*** ./src/keywords/defined.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const resolve_1 = __webpack_require__(/*! ../libs/resolve */ "./src/libs/resolve.ts");

const util_1 = __webpack_require__(/*! util */ "../../../../usr/local/lib/node_modules/webpack/node_modules/util/util.js");
/**
 * 解析schema中的关键字 definitions
 * 如果发现有definitions关键字，解析schema
 * @param  {string}      $id    当前的schema的ID
 * @param  {JSONSchema6} schema 当前的schema
 * @return {JSONSchema6}        处理过后的schema
 */


const defined = (_$id, schema) => {
  const definitions = schema.definitions;

  if (!definitions) {
    return schema;
  }

  for (const key in definitions) {
    if (definitions.hasOwnProperty(key)) {
      const element = definitions[key];

      if (!util_1.isBoolean(element)) {
        // tslint:disable-next-line:no-unused-expression
        resolve_1.resolve(element, `${schema.$id}#/definitions/${key}`);
      }
    }
  }

  return schema;
};

exports.default = defined;

/***/ }),

/***/ "./src/keywords/index.ts":
/*!*******************************!*\
  !*** ./src/keywords/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var ref_1 = __webpack_require__(/*! ./ref */ "./src/keywords/ref.ts");

exports.ref = ref_1.default;

var oneof_1 = __webpack_require__(/*! ./oneof */ "./src/keywords/oneof.ts");

exports.oneof = oneof_1.default;

var anyof_1 = __webpack_require__(/*! ./anyof */ "./src/keywords/anyof.ts");

exports.anyof = anyof_1.default;

var defined_1 = __webpack_require__(/*! ./defined */ "./src/keywords/defined.ts");

exports.definitions = defined_1.default;

/***/ }),

/***/ "./src/keywords/oneof.ts":
/*!*******************************!*\
  !*** ./src/keywords/oneof.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const resolve_1 = __webpack_require__(/*! ../libs/resolve */ "./src/libs/resolve.ts");

const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/**
 * 解析schema中的关键字 oneOf
 * 如果发现有oneOf关键字，遍历替换成schema
 * @param  {string}      $id    当前的schema的ID
 * @param  {JSONSchema6} schema 当前的schema
 * @return {JSONSchema6}        处理过后的schema
 */


exports.default = (_$id, schema) => {
  const oneOf = schema.oneOf;

  if (oneOf && utils_1.isArray(oneOf)) {
    schema.oneOf = oneOf.map(schemaOfOne => {
      return resolve_1.resolve(schemaOfOne);
    });
  }

  return schema;
};

/***/ }),

/***/ "./src/keywords/ref.ts":
/*!*****************************!*\
  !*** ./src/keywords/ref.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const invariant_1 = __importDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));

const resolve_1 = __webpack_require__(/*! ../libs/resolve */ "./src/libs/resolve.ts");

const factory_1 = __webpack_require__(/*! ../factory */ "./src/factory/index.ts");
/**
 * 解析schema中的关键字 $ref
 * 1. 获取$ref的id
 * 2. 重新定义$id = $id + $ref, 赋值给$ref
 * 3. 解析schema
 * @param  {string}      $id    当前的schema的ID
 * @param  {JSONSchema6} schema 当前的schema
 * @return {JSONSchema6}        处理过后的schema
 */


exports.default = ($id, schema) => {
  if (schema && schema.$ref) {
    const schemaId = resolve_1.getSchemaId(schema.$ref);
    let refName = schema.$ref;

    if (schema.$id) {
      refName = schema.$id + schema.$ref;
    } else if (!schemaId) {
      refName = resolve_1.getSchemaId($id) + schema.$ref;
    }

    schema.$ref = refName;

    if (!factory_1.schemaFieldFactory.has(refName)) {
      factory_1.schemaFieldFactory.add(refName, {});
    }

    const refSchema = factory_1.schemaFieldFactory.get(refName);

    if (refSchema) {
      let schemaAjv = Object.assign({}, refSchema);
      schemaAjv.$ref = refName;
      Reflect.deleteProperty(schemaAjv, "$id");
      Object.assign(schemaAjv, {
        refKeys: resolve_1.getDataKeysBySchemaKeys(refName)
      });
      return schemaAjv;
    }

    invariant_1.default(false, `${refName} not exist.`);
  }

  return schema;
};

/***/ }),

/***/ "./src/libs/factory.ts":
/*!*****************************!*\
  !*** ./src/libs/factory.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file 工厂类
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/**
 * 工厂类
 * @class
 */


class BaseFactory {
  constructor() {
    /**
     * 用来存放工厂实例
     * @protected
     * @type {{ [id: string]: T; }}
     * @memberof BaseFactory
     */
    this.store = {};
    /**
     * 用来存放被锁定工厂实例
     * @private
     * @type {{ [id: string]: T; }}
     * @memberof BaseFactory
     */

    this._lock = {};
  }
  /**
   * 添加一个实例
   * @param {string} name 实例的名称
   * @param {T} instance  实例
   * @param {boolean} [override=false] 是否覆盖
   * @returns {BaseFactory<T>} 是否添加成功
   * @memberof BaseFactory
   * @example
   *
   * this.add("key", true);
   */


  add(name, instance, override = false) {
    if (utils_1.hasOwnProperty.call(this._lock, name) || this.has(name) && !override) {
      return this;
    }

    this.store[name] = instance;
    return this;
  }
  /**
   * 是否存在key值
   * @param {string} key key值
   * @returns {boolean} 是否存在
   * @memberof BaseFactory
   */


  has(key) {
    return utils_1.hasOwnProperty.call(this.store, key);
  }
  /**
   * 获取一个实例
   * @param {string} key  实例标志
   * @returns {T}         返回当前key对应的实例
   * @memberof BaseFactory
   */


  get(key) {
    if (this.has(key)) {
      return this.store[key];
    }

    return null;
  }
  /**
   * 锁定实例,锁定后不能删除和覆盖
   * @param {string} key  key
   * @memberof BaseFactory
   */


  lock(key) {
    if (this.has(key)) {
      this._lock[key] = true;
    }
  }
  /**
   * 解锁实例
   * @param {string} key  key
   * @memberof BaseFactory
   */


  unLock(key) {
    if (this.has(key)) {
      Reflect.deleteProperty(this._lock, key);
    }
  }
  /**
   * 遍历所有的元素
   * @param {(key: string, val: T) => any} func 遍历方法
   * @returns {void}
   * @memberof BaseFactory
   */


  forEach(func) {
    if (!func) {
      return;
    }

    for (const key in this.store) {
      const element = this.store[key];

      if (func(key, element) === false) {
        break;
      }
    }
  }
  /**
   * 清空当前的hash
   * @memberof BaseFactory
   */


  clear() {
    this.store = {};
    this._lock = {};
  }

}

exports.BaseFactory = BaseFactory;

/***/ }),

/***/ "./src/libs/index.ts":
/*!***************************!*\
  !*** ./src/libs/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(/*! ./tree */ "./src/libs/tree.ts"));

__export(__webpack_require__(/*! ./merge */ "./src/libs/merge.ts"));

__export(__webpack_require__(/*! ./resolve */ "./src/libs/resolve.ts"));

__export(__webpack_require__(/*! ./factory */ "./src/libs/factory.ts"));

/***/ }),

/***/ "./src/libs/merge.ts":
/*!***************************!*\
  !*** ./src/libs/merge.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const invariant_1 = __importDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));

const factory_1 = __webpack_require__(/*! ../factory */ "./src/factory/index.ts");

const resolve_1 = __webpack_require__(/*! ./resolve */ "./src/libs/resolve.ts");
/**
* 根据给出的parentKeys和uiSchemaKeys来获取uiSchema的key
* 1. 遍历uiSchemaKeys，分别于parentKeys做合并
* 2. 合并后的keys去仓库里面找，如果为找到则报错
* 3. 判断找到的schema中是否带有 $ref
* 4. 如果有$ref，则更改parentKeys为$ref的路径
* 5. 如果没有，则更改parentKeys为当前合并的keys
* @param  {String[]} uiSchemaKeys      当前的keys
* @param  {String} parentSchemaPath    父亲的schemaPath
* @return {String}                     返回的key
*/


const getUiSchemaKeyRecursion = (uiSchemaKeys, parentSchemaPath) => {
  let parentKeysWithDef = resolve_1.getDataKeysBySchemaKeys(parentSchemaPath, true);

  while (uiSchemaKeys.length) {
    const key = uiSchemaKeys.shift() || "";
    parentKeysWithDef = parentKeysWithDef.concat(key ? [key] : []);
    const keysStr = parentKeysWithDef.join("/").replace(/\/$/, "");

    if (!factory_1.schemaKeysFactory.has(keysStr)) {
      // if (!isProd) {
      //     // console.log(schemaFieldFactory, schemaKeysFactory);
      //     warn(`${keysStr} did not found.`);
      // }
      invariant_1.default(false, `${keysStr} did not found.`);
      return "";
    }

    const schema = factory_1.schemaFieldFactory.get(factory_1.schemaKeysFactory.get(keysStr));

    if (schema.$ref) {
      parentKeysWithDef = resolve_1.getDataKeysBySchemaKeys(schema.$ref, true);
    }
  }

  return parentKeysWithDef.join("/");
};
/**
  * 获取父亲的keys
  * @param  {UiSchema}               parent 父亲schema
  * @return {Array<string | number>}
  */


const getParentSchemaKeys = parent => {
  if (parent && parent.keys) {
    return parent.keys;
  }

  return [];
};
/**
 * 获取当前uiSchema的key
 * 如果没有父亲节点
 * 默认返回父亲的key+当前uiSchema的key
 * @param  {UiSchema} parent      父亲schema
 * @param  {string}   schemaPath  schema的路径
 * @param  {UiSchema} uiSchema    uiSchma
 * @return {String}               返回的key
 */


const getCurrentSchemaKey = (parent, schemaPath, uiSchema) => {
  const $id = resolve_1.getSchemaId(schemaPath);
  let uiSchemaKeys = uiSchema.key.split("/"); // 如果父亲节点的shcemaId不是传入的schemaId，则不使用父亲的key做计算

  if (parent && resolve_1.getSchemaId(parent.key) === $id) {
    return getUiSchemaKeyRecursion(uiSchemaKeys, parent.schemaPath || "");
  } // const keys = getDataKeysBySchemaKeys(schemaPath, true);
  // console.log("计算得出的keys", $id, schemaPath, getDataKeysBySchemaKeys(schemaPath), getDataKeysBySchemaKeys(schemaPath, true));
  // keys.pop();


  return getUiSchemaKeyRecursion(uiSchemaKeys, schemaPath);
};
/**
 * 如果在【schemaKeysFactory】中没有发现uiSchema.key,则报错
 * 从【schemaKeysFactory】获取对应的schema，与uiSchema合并之后返回
 * @param  {UiSchema} uiSchema uiSchema
 * @return {UiSchema}          返回uiSchema
 */


const mergeUiSchemaToArray = uiSchema => {
  if (!factory_1.schemaKeysFactory.has(uiSchema.key)) {
    // if (!isProd) {
    //     console.log(schemaKeysFactory);
    //     warn(`${uiSchema.key} did not found. do you forget to resolve schema first.`);
    // }
    invariant_1.default(false, `${uiSchema.key} did not found. do you forget to resolve schema first.`);
    return uiSchema;
  }

  const schemaKey = factory_1.schemaKeysFactory.get(uiSchema.key);
  const schema = factory_1.schemaFieldFactory.get(schemaKey);
  return Object.assign({}, schema, uiSchema);
};
/**
 * 初始化uiSchema
 * 如果是字符串；用$id合并之后，获取schema
 * 如果是【UiSchema】；合并key之后，获取schema
 * @param  {UiSchema} parent      父亲schema
 * @param  {string}   schemaPath  schema的路径
 * @param  {UiSchema} uiSchema    uiSchma
 * @return {UiSchema}            返回uiSchema
 */


const initUiSchema = (parent, schemaPath, uiSchema) => {
  let parentKeys = getParentSchemaKeys(parent),
      key = getCurrentSchemaKey(parent, schemaPath, uiSchema),
      keys,
      isRequired = false,
      originSchema = {},
      schemaKey;
  keys = parentKeys.concat(uiSchema.key ? uiSchema.key.split("/") : []); // if (parent.type === "object" && parent.required) {
  //     const keys1 = keys.concat([]);
  //     isRequired = parent.required.indexOf((keys1.pop() || "").toString()) >= 0;
  // }

  if (factory_1.schemaKeysFactory.has(key)) {
    schemaKey = factory_1.schemaKeysFactory.get(key);

    if (factory_1.schemaFieldFactory.has(schemaKey)) {
      originSchema = factory_1.schemaFieldFactory.get(schemaKey); // isRequired = originSchema.isRequired;
    }
  }

  return Object.assign({
    isRequired
  }, originSchema, uiSchema, {
    key,
    keys
  });
};
/**
 * 合并后的数据添加到数组中去
 * 这里因为可以使用*,所有拆成了前面和后面以及*三个部分
 * @param  {UiSchema[]} uiSchemasFirst 前面部分
 * @param  {UiSchema[]} uiSchemasLast  后面部分
 * @param  {UiSchema}   uiSchema       需要处理的uiSchema
 * @return {Void}
 */


const pushMergeResult = (uiSchemasFirst, uiSchemasLast, uiSchema) => {
  if (!uiSchemasFirst.concat(uiSchemasLast).filter(val => {
    return val.key === uiSchema.key;
  }).length) {
    uiSchema = mergeUiSchemaToArray(uiSchema);
    uiSchemasFirst.push(uiSchema);
  }
};
/**
 * 合并uiSchema
 * 1. 先判断uiSchema中是否存在*
 * 2. 如果没有*号，则遍历uiSchema，合并数据
 * 3. 如果存在*号；先合并*之前和*之后的uiSchema
 * 4. 遍历当前的schema：
 *    如果是object，则遍历properties，然后合并数据
 *    如果是array，则直接返回items，然后合并数据
 * @param  {UiSchema}                    parent      父亲的uiSchema
 * @param  {string}                      schemaPath  当前的schema路径
 * @param  {Array<UiSchema | string>}    uiSchemas   全部的uiSchemas
 * @param  {FxJsonSchema}                curSchema   当前的Schema
 * @return {UiSchema[]}                              合并后的uiSchemas
 */
// tslint:disable-next-line:max-line-length


const initMergeSchema = (parent, schemaPath, uiSchemas, curSchema) => {
  let idx = uiSchemas.indexOf("*"),
      uiSchemasFirst = [],
      uiSchemasLast = [],
      types = ["object", "array"]; // 如果存在多个*，则报错

  if (uiSchemas.lastIndexOf("*") !== idx) {
    // if (!isProd) {
    //     // throw new Error("uiSchema can only has one *.");
    //     warn("uiSchema can only has one *.");
    // }
    invariant_1.default(false, "uiSchema can only has one *.");
    return [];
  } // 不存在*号的情况


  if (idx < 0) {
    uiSchemas.slice(idx + 1).map(us => {
      let uiSchema = initUiSchema(parent, schemaPath, us.constructor === String ? {
        key: us
      } : us);
      uiSchemasFirst.push(mergeUiSchemaToArray(uiSchema));
    });
    return uiSchemasFirst;
  } // 处理*之前的数据


  uiSchemas.slice(0, idx).forEach(us => {
    let uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, us.constructor === String ? {
      key: us
    } : us);
    uiSchemasFirst.push(mergeUiSchemaToArray(uiSchema));
  }); // 处理*之后的数据

  uiSchemas.slice(idx + 1).forEach(us => {
    let uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, us.constructor === String ? {
      key: us
    } : us);
    uiSchemasLast.push(mergeUiSchemaToArray(uiSchema));
  }); // 如果是object类型，遍历properties属性，与之前的数据去重后添加到数组

  if (curSchema.type === types[0] && curSchema.properties) {
    Object.keys(curSchema.properties).forEach(us => {
      const uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, {
        key: us,
        isRequired: curSchema.required ? curSchema.required.indexOf(us) >= 0 : false
      });
      pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
    });
  } // 如果是数组，获取下一级的key，然后做对比处理


  if (curSchema.type === types[1] && curSchema.items) {
    const uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, {
      key: "-"
    });
    pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
  } // 是普通对象


  if (types.indexOf(curSchema.type) < 0) {
    let uiSchema = initUiSchema(parent, schemaPath, {
      key: resolve_1.getDataKeysBySchemaKeys(curSchema.schemaPath || "", false).join("/")
    });
    pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
  }

  return uiSchemasFirst.concat(uiSchemasLast);
};
/**
 * 用来转换uiSchema的类, 如果有$ref，则直接使用
 * @param schemaPath {String}                     schema的路径
 * @param parent     {UiSchema}                   父scehma
 * @param uiSchemas  {Array<UiSchema | string>}   需要合并的uiSchemas
 */


exports.merge = (schemaPath, parent, uiSchemas) => {
  // 获取schemaPath对应的schemaId
  let keyPath = resolve_1.getDataKeysBySchemaKeys(schemaPath, true).join("/"); // 如果keyPath还没有解析，则报错

  if (!factory_1.schemaKeysFactory.has(keyPath)) {
    // if (!isProd) {
    //     warn(`${keyPath} not exist or ${keyPath} did not resolve yet.`);
    // }
    invariant_1.default(false, `${keyPath} not exist or ${keyPath} did not resolve yet.`);
    return [];
  } // 获取当前的schemaField


  const curSchema = factory_1.schemaFieldFactory.get(factory_1.schemaKeysFactory.get(keyPath)); // 去掉$id这个字段

  if (curSchema.$id) {
    if (!curSchema.$ref) {
      curSchema.$ref = curSchema.$id;
    }

    curSchema.$id = undefined;
    delete curSchema.$id;
  } // 合并schema


  return initMergeSchema(parent, schemaPath, uiSchemas || ["*"], curSchema);
};

/***/ }),

/***/ "./src/libs/resolve.ts":
/*!*****************************!*\
  !*** ./src/libs/resolve.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const invariant_1 = __importDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));

const factory_1 = __webpack_require__(/*! ../factory */ "./src/factory/index.ts");

const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/**
* schema路径解析
* 把schemaPath解析成JsonPath
* 1. 去掉properties，items关键字转换成【 - 】
* 2. 第一个字符去掉末尾的【 # 】
* @example design#/properties/appType => ["appType']
* @example design#/properties/appType/type => ["appType','type']
* @example design#/properties/appType/items/properties/type => ["appType', '-', 'type']
* @param   {String}    schemaPath schemaPath
* @param   {Boolean}   keepFirst  是否需要保留schemaId
* @returns {String[]}             返回数据路径数组
*/


const getDataKeysBySchemaKeys = (schemaPath, keepFirst = false) => {
  const regexp = /#$/g;
  return schemaPath.split("/").map((key, index) => {
    // 第一个替换末尾的#
    if (index === 0 && regexp.test(key)) {
      // 这里是regexp的陷阱,需要修改lastIndex = 0
      // 对于同一个正则表达式对象regex，不能重复调用：第一次返回true，第二次就返回false，很显然这种效果不是我们想要的。
      // 这是因为RegExp.test()方法，第一次从位置0开始查找，可以匹配；第二次的查找位置就不是0了，说以就不能匹配了。
      regexp.lastIndex = 0;
      return keepFirst ? key.replace(regexp, "") : null;
    } // 去掉properties


    if (key === "properties") {
      return null;
    } // 转换items成-


    if (key === "items") {
      return "-";
    }

    return key;
  }).filter(key => {
    return key !== null;
  });
};

exports.getDataKeysBySchemaKeys = getDataKeysBySchemaKeys;
/**
* 从schemaPath中获取$id
* @param   {String} schemaPath schemaPath
* @returns {String}
*/

const getSchemaId = schemaPath => {
  const keys = schemaPath.split("/");
  const regexp = /#$/g;

  if (!keys.length) {
    // invariant(false, `${schemaPath} not a valid schemaPath.`);
    return "";
  } // if(!regexp.test(keys[0])){
  //     invariant(false, `can not find schemaId`);
  //     return "";
  // }


  return keys[0].replace(regexp, "");
};

exports.getSchemaId = getSchemaId;
/**
* 初始化schema
* 1. 判断$id，如果不存在，报错
* 2. 验证schema的结构是否正确，不正确报错
* @param   {JSONSchema6}  schema  schema
* @returns {JSONSchema6}          处理完成的schema
*/

const initSchema = schema => {
  let $id = schema.$id; // 如果没有$id, 同时没有$ref的情况下直接报错

  if (!$id && !schema.$ref) {
    invariant_1.default(false, "id is required");
    return schema;
  }

  return schema;
};
/**
 * TODO
 * 遍历schema，生成map
 * 1. 如果schema.type不是string，报错
 * 2. 调用【schemaTypeFactory
 * @param {JSONSchema6} schema  schema
 * @param {String}      $id     id
 */


const compileSchema = ($id, schema) => {
  if (!factory_1.schemaTypeFactory.has("normal")) {
    return schema;
  }

  const id = $id || (schema.$id || "") + "#";
  let schemaGenera = factory_1.schemaTypeFactory.get("normal")(id, schema); // 如果不存在type，但是$ref则直接返回

  if (!schema.type || schema.$ref) {
    return schemaGenera;
  } // 这里只解析type为字符串的结构，不支持数组类型的type


  if (!utils_1.isString(schema.type)) {
    invariant_1.default(false, `schema type[${schema.type}] can only be string.`);
    return schemaGenera;
  }

  const type = schema.type.toString(); // 这里调用相对应的type的方法，来解析schema

  if (factory_1.schemaTypeFactory.has(type) && ["array", "object"].indexOf(type) >= 0) {
    schemaGenera = factory_1.schemaTypeFactory.get(type)(id, schema);
  }

  return schemaGenera;
};
/**
 * 解析schema
 * @param  {JSONSchema6}   schema      需要处理的JsonSchema
 * @param  {String}        $id         JsonSchema 的id
 * @returns {JSONSchema6}              返回处理过后的JsonSchema
 */


const resolve = (schema, $id = "") => {
  const schemaGenera = !$id ? initSchema(schema) : schema;
  const id = $id || schema.$ref || ""; // 生成map

  return compileSchema(id, schemaGenera);
};

exports.resolve = resolve;

/***/ }),

/***/ "./src/libs/tree.ts":
/*!**************************!*\
  !*** ./src/libs/tree.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/**
 * tree map struct
 * 这里用来记录数据的元数据信息
 * 元数据信息包括，isValid，isLoading，isShow，...etc
 */


class TreeMap {
  /**
    * 构造函数
    * @param   {String}  key    当前节点的key
    * @param   {any}     value  当前节点的值
    * @param   {TreeMap<T>} parent 当前节点的父亲节点
    * @returns {Void}
    */
  constructor(key, value, parent) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.children = [];
  }
  /**
  * 添加一个子元素
  * @param    {Array<Tsn>} keys  节点的路径，遍历keys来动态创建节点 example ["root","b"]  root -> b
  * @param    {any}        value 孩子的数据
  * @returns  {TreeMap<T>}
  */


  addChild(keys, value) {
    let curNode = this;
    let child = null;

    if (!keys.length) {
      return this;
    }

    for (const key of keys) {
      child = curNode.contains(key); // 如果是数字的话，则说明是数组，key改成`-`
      // 如果不是数组的话，则无所谓顺序，直接push就行
      // 如果是数组，则要保证顺序和数据的下标一致

      if (!child) {
        if (utils_1.isNumber(key)) {
          child = new TreeMap("-", null, curNode);
          curNode.children[key] = child;
        } else {
          child = new TreeMap(key.toString(), null, curNode);
          curNode.children.push(child);
        }
      }

      curNode = child;
    } // if (child) {


    child.value = value; // }

    return child;
  }
  /**
  * 获取当前的key
  * 如果key是`-`,代表是数组，则转换成数组下标
  * time complexity = O(1) / Constant
  * @returns string
  */


  getKey() {
    if (!this.key || this.key === "-") {
      return this.getIndexInParent().toString();
    }

    return this.key;
  }
  /**
  * 获取当前节点的keys路径
  * time complexity = O(1) / Constant
  * @returns {string[]}
  */


  getCurrentKeys() {
    let keys = [];

    if (this.parent) {
      keys = keys.concat(this.parent.getCurrentKeys());
    }

    return keys.concat([this.key]);
  }
  /**
  * 获取当前节点在父节点中的下标索引
  * time complexity = O(1) / Constant
  * @returns {number}
  */


  getIndexInParent() {
    let index = -1;

    if (!this.parent) {
      return index;
    }

    const {
      children
    } = this.parent;

    for (let i = 0, n = children.length; i < n; i++) {
      const child = children[i];

      if (child && child === this) {
        index = i;
        break;
      }
    }

    return index;
  }
  /**
  * 从当前节点查找是否存在节点
  * time complexity = O(n) / Linear
  * @param   {Tsn}     key 节点的数据
  * @returns {TreeMap<T>}
  */


  contains(key) {
    // 如果是数字的话，直接返回children中对应下标的元素
    if (utils_1.isNumber(key)) {
      if (this.children.length <= key) {
        return null;
      }

      let child = this.children[key];

      if (!child) {
        this.children[key] = new TreeMap("-", null, this);
        child = this.children[key];
      }

      return child;
    } // 如果当前节点的key===要搜索的key，则返回本身


    if (this.getKey() === key) {
      return this;
    } // 如果没有children，则返回空


    if (!this.children || this.children.length === 0) {
      return null;
    } // 遍历子节点，层层递归，直到找到


    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];

      if (child && child.contains(key)) {
        return child;
      }
    }

    return null;
  }
  /**
  * 根据给定的路径数组，返回对应的节点
  * time complexity = O(n) / Linear
  * @param   {Array<Tsn>}    keys路径
  * @returns {TreeMap<T> | null}
  */


  containPath(keys) {
    let node = this;

    for (const key of keys) {
      node = node.contains(key);

      if (!node) {
        break;
      }
    }

    return node;
  }
  /**
  * 从父亲节点中删除当前节点
  * time complexity = O(n) / Linear
  */


  removeFromParent() {
    const index = this.getIndexInParent();

    if (!this.parent) {
      return;
    }

    this.parent.children.splice(index, 1);
  }
  /**
  * 移动到某个位置
  * time complexity = O(1) / Linear
  * @param   {Number} toIndex 需要移动到的位置
  * @returns {Void}
  */


  insertToFromParent(toIndex) {
    let curIndex = this.getIndexInParent(); // 如果没有父亲，或者父亲没有子节点，或者当前位置小于0

    if (!this.parent || !this.parent.children || curIndex < 0) {
      return;
    } // 父亲节点中删除当前元素


    this.removeFromParent(); // 如果超出了父亲的子节点数量，添加一个

    if (this.parent.children.length <= toIndex) {
      this.parent.children[toIndex] = this;
      return;
    } // 将当前节点插入到指定的位置


    this.parent.children.splice(toIndex, 0, this);
  }
  /**
  * 遍历指定节点下所有子节点的value数据,当前节点不计算在内
  * @param   {(node: TreeMap<T>) => any}     clearFunc      map方法
  * @param   {Boolean}                    currentNode    是否包含当前节点
  * @returns {Void}
  */


  forEach(clearFunc, currentNode = false) {
    if (currentNode) {
      this.value = clearFunc(this);
    } // if (!this.children.length) {
    //     return;
    // }


    for (let i = 0, n = this.children.length; i < n; i++) {
      let child = this.children[i];

      if (child) {
        child.value = clearFunc(child);
        child.forEach(clearFunc);
      }
    }
  }

}

exports.TreeMap = TreeMap;

/***/ }),

/***/ "./src/types/array.ts":
/*!****************************!*\
  !*** ./src/types/array.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const resolve_1 = __webpack_require__(/*! ../libs/resolve */ "./src/libs/resolve.ts");

const itemsName = "items";
/**
 * 解析schema中的type=array的结构
 * 如果存在items,则继续解析schema.item
 * @param  {JSONSchema6} schema    当前的schema
 * @param  {String}      schemaPath 当前的schemaPath ,example "a#/properties/b/properties/c"
 * @return {JSONSchema6}           返回处理过后的schema,example "{title:'21',$id:'a'}"
 */

exports.default = (schemaPath, schema) => {
  let {
    items
  } = schema;

  if (items) {
    const itemSchemaPath = [schemaPath, itemsName].join("/");
    const mergeSchema = resolve_1.resolve(items, itemSchemaPath);
    const keys = resolve_1.getDataKeysBySchemaKeys(itemSchemaPath);
    Object.assign(mergeSchema, {
      keys
    });
  }

  return schema;
};

/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var array_1 = __webpack_require__(/*! ./array */ "./src/types/array.ts");

exports.array = array_1.default;

var object_1 = __webpack_require__(/*! ./object */ "./src/types/object.ts");

exports.object = object_1.default;

var normal_1 = __webpack_require__(/*! ./normal */ "./src/types/normal.ts");

exports.normal = normal_1.default;

/***/ }),

/***/ "./src/types/normal.ts":
/*!*****************************!*\
  !*** ./src/types/normal.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const factory_1 = __webpack_require__(/*! ../factory */ "./src/factory/index.ts");

const resolve_1 = __webpack_require__(/*! ../libs/resolve */ "./src/libs/resolve.ts");
/**
 * 遍历所有的keyword，解析schema
 * @param   {JSONSchema6} schema schema
 * @returns {JSONSchema6}        解析过后的schema
 */


exports.convertKeys = ($id, schema) => {
  factory_1.schemaKeyWordFactory.forEach((_key, val) => {
    if (schema) {
      schema = val($id, schema);
    }
  });
  return schema;
};
/**
 * 解析schema中的type!=array && type!=object的结构
 * @param  {JSONSchema6} schema    当前的schema
 * @param  {String}      schemaKey 当前的schemaKey
 * @return {JSONSchema6}           返回处理过后的schema
 */


exports.default = (schemaKey, schema) => {
  let keys = resolve_1.getDataKeysBySchemaKeys(schemaKey, false),
      $id = resolve_1.getSchemaId(schemaKey),
      currentSchema = exports.convertKeys(schemaKey, schema),
      alreadyHasEmptySchema = false,
      emptySchema = {}; // 先从缓存中提取schema，如果存在的话

  alreadyHasEmptySchema = factory_1.schemaFieldFactory.has(schemaKey);

  if (alreadyHasEmptySchema) {
    emptySchema = factory_1.schemaFieldFactory.get(schemaKey);
  } // 如果已经存在，则直接返回


  if (alreadyHasEmptySchema && emptySchema.schemaPath) {
    return currentSchema || schema;
  }

  if (!$id) {
    $id = schema.$id || "";
  }

  if (schema.$id && schema.$ref) {
    factory_1.schemaKeysFactory.add(schema.$id, schema.$ref);
  } // 将当前获取的schema加入到schemaFieldFactory中


  factory_1.schemaFieldFactory.add(schemaKey, Object.assign(emptySchema, currentSchema || schema, {
    keys,
    schemaPath: schemaKey
  })); // 加入key的索引

  factory_1.schemaKeysFactory.add([$id].concat(keys).join("/"), schemaKey);
  return currentSchema || schema;
};

/***/ }),

/***/ "./src/types/object.ts":
/*!*****************************!*\
  !*** ./src/types/object.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const invariant_1 = __importDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));

const resolve_1 = __webpack_require__(/*! ../libs/resolve */ "./src/libs/resolve.ts"); // import {warn, isProd} from "../utils";


const pro = "properties";
/**
 * 解析schema中的type=object的结构
 * 如果存在schema.properties,则遍历properties，继续解析schema.properties[key]
 * @param  {JSONSchema6} schema    当前的schema
 * @param  {String}      schemaKey 当前的schemaKey
 * @return {JSONSchema6}           返回处理过后的schema
 */

exports.default = (schemaKey, schema) => {
  const {
    properties,
    required = [],
    $ref
  } = schema;

  if (properties && !$ref) {
    Object.keys(properties).forEach(key => {
      if ([pro, "items"].indexOf(key) >= 0) {
        // if (!isProd) {
        //     warn(`${key}can not be key words.`);
        // }
        invariant_1.default(false, `${key}can not be key words.`);
        return;
      }

      if (!properties || !properties[key]) {
        return;
      }

      Object.assign(properties[key], {
        isRequired: required.indexOf(key) >= 0
      });
      const mergeSchema = resolve_1.resolve(properties[key], [schemaKey, pro, key].join("/")),
            keys = resolve_1.getDataKeysBySchemaKeys([schemaKey, pro, key].join("/"));
      Object.assign(mergeSchema, {
        keys
      });
    });
  }

  return schema;
};

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 暴露hasOwnProperty方法
 */

exports.hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * 暴露toString方法
 */

exports.toString = Object.prototype.toString;

function typeOf(value) {
  if (null === value) {
    return "null";
  }

  let type = typeof value;

  if ("undefined" === type || "string" === type) {
    return type;
  }

  let typeString = exports.toString.call(value);

  switch (typeString) {
    case "[object Array]":
      return "array";

    case "[object Date]":
      return "date";

    case "[object Boolean]":
      return "boolean";

    case "[object Number]":
      return "number";

    case "[object Function]":
      return "function";

    case "[object RegExp]":
      return "regexp";

    case "[object Object]":
      if (undefined !== value.nodeType) {
        if (3 === value.nodeType) {
          return /\S/.test(value.nodeValue) ? "textnode" : "whitespace";
        } else {
          return "element";
        }
      } else {
        return "object";
      }

    default:
      return "unknow";
  }
}

exports.typeOf = typeOf;
/**
 * 判断参数是不是数字
 * @param   {Any}      n    需要验证的参数
 * @returns {Boolean}
 */

exports.isNumber = n => {
  return typeOf(n) === "number";
};
/**
 * 判断参数是不是字符串
 * @param   {Any}      n    需要验证的参数
 * @returns {Boolean}
 */


exports.isString = n => {
  return typeOf(n) === "string";
};
/**
 * 判断参数是不是boolean
 * @param   {Any}      n    需要验证的参数
 * @returns {Boolean}
 */


exports.isArray = n => {
  return typeOf(n) === "array";
};
/**
 * 解析keys
 * 1. 遍历keys中的元素，如果遇到-，则替换成数字
 * @param   {string[]} originKeys 需要做替换的数据路径
 * @param   {string[]} indexList  当前传递过来的indexList
 * @returns {string[]}
 */


exports.mergeKeys = (originKeys, indexList = []) => {
  const arrayLevelCopy = [...indexList];
  const keys = originKeys.reverse().map(key => {
    if (key === "-") {
      const index = arrayLevelCopy.pop();
      return (typeof index === "undefined" ? "" : index).toString();
    }

    return key;
  });
  keys.reverse();
  return keys;
};

/***/ })

/******/ });
//# sourceMappingURL=index.dev.js.map