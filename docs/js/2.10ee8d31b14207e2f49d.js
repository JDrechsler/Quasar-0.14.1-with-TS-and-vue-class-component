webpackJsonp([2],{

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_class_component__);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let Car = class Car extends __WEBPACK_IMPORTED_MODULE_0_vue__["default"] {
    constructor() {
        super(...arguments);
        this.chips = ['A/C'];
        this.today = new Date;
        this.pickupTime = new Date;
        this.selectedLocation = 'rw';
        this.selectedOption = [
            {
                label: 'D-04519 RACKWITZ',
                value: 'rw',
                description: `
				SAT <br>
				Sächsische Autotransport und Service GmbH<br>
				Am Schafteich 1<br>
				08371 Glauchau<br>
				Deutschland
			`
            },
            {
                label: 'D-04639 GÖSSNITZ',
                value: 'gn',
                description: `
				SAT<br>
				Sächsische Autotransport und Service GmbH<br>
				Am Schafteich 1<br>
				08371 Glauchau<br>
				Deutschland
			`
            },
            {
                label: 'D-08371 GLAUCHAU',
                value: 'gh',
                description: `
				SAT<br>
				Sächsische Autotransport und Service GmbH<br>
				Am Schafteich 1<br>
				08371 Glauchau<br>
				Deutschland
			`
            },
            {
                label: 'D-14669 KETZIN',
                value: 'kz',
                description: `
				ACM Auto-Service und Umschlag-Center Mosolf Etzin GmbH<br>
				Gewerbegebiet Etzin<br>
				14669 Ketzin<br>
				Deutschland
			`
            },
            {
                label: 'D-26723 EMDEN',
                value: 'ed',
                description: `
				ALM<br>
				Automobil-Logistik-Mosolf GmbH<br>
				Zum Emskai 1<br>
				26723 Emden<br>
				Deutschland
			`
            },
            {
                label: 'D-38442 WOLFSBURG',
                value: 'wb',
                description: `
				MOSOLF Logistics & Services GmbH<br>
				Niederlassung Wolfsburg<br>
				Bremerslust 1<br>
				38442 Wolfsburg<br>
				Deutschland	
			`
            }
        ];
    }
    get getLocationInfo() {
        var locationInfo = 'not set';
        for (var index = 0; index < this.selectedOption.length; index++) {
            var element = this.selectedOption[index];
            if (element.value === this.selectedLocation) {
                if (element.description) {
                    locationInfo = element.description;
                }
            }
        }
        return locationInfo;
    }
    mounted() {
        console.log('Car mounted');
    }
};
Car = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default.a
], Car);
/* harmony default export */ __webpack_exports__["default"] = (Car);


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
  * vue-class-component v5.0.2
  * (c) 2015-2017 Evan You
  * @license MIT
  */


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__(1));

function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    Component.prototype._init = function () {
        var _this = this;
        var keys = Object.getOwnPropertyNames(vm);
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { return vm[key] = value; }
                });
            }
        });
    };
    var data = new Component();
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (false) {
        if (!(Component.prototype instanceof Vue) && Object.keys(plainData).length > 0) {
            warn('Component class must inherit Vue or its descendant class ' +
                'when class property is used.');
        }
    }
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render'
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof descriptor.value === 'function') {
            (options.methods || (options.methods = {}))[key] = descriptor.value;
        }
        else if (descriptor.get || descriptor.set) {
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
    }
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    return Super.extend(options);
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
(function (Component) {
    function registerHooks(keys) {
        $internalHooks.push.apply($internalHooks, keys);
    }
    Component.registerHooks = registerHooks;
})(Component || (Component = {}));
var Component$1 = Component;

exports['default'] = Component$1;
exports.createDecorator = createDecorator;


/***/ })

});