webpackJsonp([6],{

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(208);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("93fea47c", content, true);

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (Car);


/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout-padding"},[_c('img',{attrs:{"src":"http://www.mosolf.com/fileadmin/data/images/3Netzwerk/header_1600x400/Ketzin_Header.jpg","width":"100%"}}),_vm._v(" "),_c('q-stepper',{ref:"stepper",attrs:{"color":"secondary","vertical":"","alternative-labels":""}},[_c('q-step',{attrs:{"default":"","name":"first","title":"Location and date"}},[_c('q-select',{attrs:{"options":_vm.selectedOption,"float-label":"Select location for pick up"},model:{value:(_vm.selectedLocation),callback:function ($$v) {_vm.selectedLocation=$$v},expression:"selectedLocation"}}),_vm._v(" "),_c('div',{staticClass:"bg-grey-2 shadow-1",domProps:{"innerHTML":_vm._s(_vm.getLocationInfo)}}),_vm._v(" "),_c('q-datetime',{attrs:{"type":"datetime","format":"MMM-DD-YYYY hh:mm A","min":_vm.today,"float-label":"Select date and time for pick up"},model:{value:(_vm.pickupTime),callback:function ($$v) {_vm.pickupTime=$$v},expression:"pickupTime"}}),_vm._v(" "),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"secondary"},on:{"click":function($event){_vm.$refs.stepper.next()}}},[_vm._v("Continue")])],1)],1),_vm._v(" "),_c('q-step',{attrs:{"name":"second","title":"Select car"}},[_vm._l((10),function(n){return _c('div',[_vm._v("Step 2")])}),_vm._v(" "),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"secondary"},on:{"click":function($event){_vm.$refs.stepper.next()}}},[_vm._v("Next")]),_vm._v(" "),_c('q-btn',{attrs:{"color":"secondary","flat":""},on:{"click":function($event){_vm.$refs.stepper.previous()}}},[_vm._v("Back")])],1)],2),_vm._v(" "),_c('q-step',{attrs:{"name":"third","title":"Get code"}},[_vm._l((3),function(n){return _c('div',[_vm._v("Step 3")])}),_vm._v(" "),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"secondary"},on:{"click":function($event){_vm.$refs.stepper.next()}}},[_vm._v("Next")]),_vm._v(" "),_c('q-btn',{attrs:{"color":"secondary","flat":""},on:{"click":function($event){_vm.$refs.stepper.previous()}}},[_vm._v("Back")])],1)],2),_vm._v(" "),_c('q-step',{attrs:{"name":"fifth","title":"Features"}},[_vm._l((3),function(n){return _c('div',[_vm._v("Step 4")])}),_vm._v(" "),_c('q-chips-input',{attrs:{"placeholder":"Add important features"},model:{value:(_vm.chips),callback:function ($$v) {_vm.chips=$$v},expression:"chips"}}),_vm._v(" "),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"secondary"},on:{"click":function($event){_vm.$refs.stepper.next()}}},[_vm._v("Next")]),_vm._v(" "),_c('q-btn',{attrs:{"color":"secondary","flat":""},on:{"click":function($event){_vm.$refs.stepper.previous()}}},[_vm._v("Back")])],1)],2),_vm._v(" "),_c('q-step',{attrs:{"name":"fourth","title":"Review and Finalize"}},[_vm._l((3),function(n){return _c('div',[_vm._v("Step 5")])}),_vm._v(" "),_c('q-stepper-navigation',[_c('q-btn',{attrs:{"color":"secondary"},on:{"click":function($event){_vm.$refs.stepper.goToStep('first')}}},[_vm._v("Restart")]),_vm._v(" "),_c('q-btn',{attrs:{"color":"secondary","flat":""},on:{"click":function($event){_vm.$refs.stepper.previous()}}},[_vm._v("Back")])],1)],2)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ts_loader_Car_ts__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ae3eae2_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Car_vue__ = __webpack_require__(217);
function injectStyle (ssrContext) {
  __webpack_require__(211)
}
var normalizeComponent = __webpack_require__(11)
/* script */
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0ae3eae2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__ts_loader_Car_ts__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ae3eae2_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Car_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


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