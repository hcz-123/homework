'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fathump = function () {
	function Fathump(num, element) {
		_classCallCheck(this, Fathump);

		this.num = num;
		this.element = element;
	}

	_createClass(Fathump, [{
		key: 'clickAction',
		value: function clickAction() {
			var _this = this;

			this.element.click(function () {
				if (_this.num < 10) {
					_this.num = add(_this.num);
					$('#thump').css('-webkit-filter', 'grayscale(0)');
					setTimeout(function () {
						$(".addzan").css('display', 'none');
					}, 1000);
				} else {
					$('#thump').css('-webkit-filter', 'grayscale(1)');
					_this.num = 0;
				}
				console.log(_this.num);
			});
		}
	}]);

	return Fathump;
}();

var Thump = function (_Fathump) {
	_inherits(Thump, _Fathump);

	function Thump(num, element) {
		_classCallCheck(this, Thump);

		return _possibleConstructorReturn(this, (Thump.__proto__ || Object.getPrototypeOf(Thump)).call(this, num, element));
	}

	return Thump;
}(Fathump);

exports.default = { Thump: Thump };
