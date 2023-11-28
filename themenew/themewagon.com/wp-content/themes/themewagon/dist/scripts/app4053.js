(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/app"],{

/***/ "./resources/assets/scripts/app.js":
/*!*****************************************!*\
  !*** ./resources/assets/scripts/app.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover */ "./resources/assets/scripts/popover.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip */ "./resources/assets/scripts/tooltip.js");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast */ "./resources/assets/scripts/toast.js");
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab */ "./resources/assets/scripts/tab.js");
/* harmony import */ var _lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lottie */ "./resources/assets/scripts/lottie.js");





Object(_popover__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_toast__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_lottie__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_tab__WEBPACK_IMPORTED_MODULE_3__["default"])();
var priceVariation = document.querySelectorAll("[name='attribute_pa_license']");
var isLicenseSelected = document.querySelector("[name='attribute_pa_license']:checked");
var variationInput = document.querySelector('.variation_id');

if (isLicenseSelected) {
  variationInput.value = isLicenseSelected.dataset.variationId;
}

priceVariation && priceVariation.forEach(function (button) {
  button.addEventListener('change', function (e) {
    var el = e.currentTarget;
    var variationId = el.dataset.variationId;
    variationInput.value = variationId;
  });
});

var increaseDownloadCount = function increaseDownloadCount() {
  var downloadCont = jQuery('[data-download-count]');
  var count = downloadCont.text();
  downloadCont.text(parseInt(count) + 1);
};

jQuery('#email-link-form').submit(function (e) {
  e.preventDefault();
  var emailInput = e.target.email;
  var email = emailInput.value;
  var post_id = e.target.post_id.value;
  var btnSubmit = e.target.submit;
  var isSubscribed = e.target.isAgree.checked;
  jQuery.ajax({
    data: {
      action: 'form_submit',
      email: email,
      post_id: post_id,
      isSubscribed: isSubscribed
    },
    type: 'post',
    url: admin_url.ajax_url,
    beforeSend: function beforeSend() {
      btnSubmit.classList.add('disabled');
      jQuery('[data-form]').hide();
      jQuery('[data-preload]').show();
    },
    success: function success(data) {
      var _JSON$parse = JSON.parse(data),
          status = _JSON$parse.status,
          msg = _JSON$parse.msg;

      if (status === 1) {
        jQuery('[data-success]').show();
        jQuery('[data-preload]').hide();
        increaseDownloadCount();
        btnSubmit.classList.remove('disabled');
        jQuery('[data-email]').text(email);
        emailInput.value = '';
        gtag('event', 'Download', {
          eventAction: 'Completed'
        });
      }
    }
  });
});
jQuery(document).on('click', '[data-resend]', function () {
  jQuery('[data-success]').hide();
  jQuery('[data-form]').show();
});
jQuery(document).on('click', '[data-direct-download]', function (e) {
  e.preventDefault();
  var el = jQuery(e.currentTarget);
  var post_id = el.data('post-id');
  var buttonHtml = el.html();
  var download_link = el.data('url');
  el.text('Processing...');
  jQuery.ajax({
    data: {
      action: 'direct_download',
      post_id: post_id
    },
    type: 'post',
    url: admin_url.ajax_url,
    success: function success(data) {
      increaseDownloadCount();
      el.html(buttonHtml);
      window.location.href = download_link;
      gtag('event', 'Download', {
        eventAction: 'Direct'
      });
    }
  });
});
var btnReviewTrigger = document.querySelector('[data-review-trigger]');
btnReviewTrigger && btnReviewTrigger.addEventListener('click', function (e) {
  document.querySelector("[href='#tab-reviews']").click();
});

(function ($) {
  $('[data-live-preview]').on('click', function (e) {
    var $this = $(e.currentTarget);
    var event = $this.data('live-preview').event;
    gtag('event', 'live_preview', {
      eventAction: event
    });
  });
  $('.subscription-form').on('submit', function (e) {
    e.preventDefault();
    var email = e.target.elements.email;
    var button = e.target.elements.subscribe_button;

    if (!email.value) {
      $('.subscription-form-notification').show();
      email.style.borderColor = '#fb482b';
    } else {
      $('.subscription-form-notification').hide();
      email.removeAttribute('style');
      $.ajax({
        url: admin_url.ajax_url,
        type: 'post',
        data: {
          action: 'tw_email_subscribe',
          email: email.value
        },
        beforeSend: function beforeSend() {
          button.textContent = 'Sending...';
        },
        success: function success() {
          button.textContent = 'Subscribe';
          email.value = '';
          $('[data-confirmation-message]').show();
        }
      });
    }
  });
  $('[data-chat]').on('click', function (e) {
    e.preventDefault(); // window.Chatra('openChat', true);

    FreshworksWidget('open');
  });
  $('[data-tw-toggle="search-box"]').on('click', function () {
    var $searchBox = $('.tw-search-box');

    if (!$searchBox.hasClass('show')) {
      $searchBox.addClass('show');
      $searchBox.find('input').focus();
    } else {
      $searchBox.removeClass('show');
    }
  });
  $(document).on('woof_ajax_done', function () {
    $('html, body').scrollTop(0);
    showPremiumProducts('filter_output');
  });
  $(document).on('click', '[data-filter-key]', function (e) {
    var el = $(e.currentTarget);
    var key = el.data('filter-key');

    if (el.hasClass('active')) {
      key = 0;
      delete woof_current_values['pa_price'];
      el.removeClass('active');
    } else {
      $('[data-filter-key]').removeClass('active');
      el.addClass('active');
      woof_current_values['pa_price'] = key;
    }

    woof_radio_direct_search(29, 'pa_price', key);
  });
  var $review = $('[data-tab-target]');
  $review.click(function (e) {
    var $this = $(e.currentTarget);
    var $reviewTab = $($this.data('tab-target'));
    $reviewTab.trigger('click');
  });

  var showPremiumProducts = function showPremiumProducts(id) {
    var url = new URL(window.location.href);
    var price = url.searchParams.get('pa_price');
    var currTax = url.searchParams.get('really_curr_tax');

    if (!!$("[data-pro-products]").length && price !== 'pro' && currTax !== '39-pa_price') {
      $.ajax({
        data: {
          action: 'get_premium_products',
          category: $("[data-pro-products]").data('pro-products')
        },
        type: 'post',
        url: admin_url.ajax_url,
        success: function success(data) {
          var arr = [5, 29, 47];
          arr.forEach(function (item) {
            $("#".concat(id, " .col-6")).eq(item).after(data);
          });
        }
      });
    }
  };

  $(document).on('click', '[data-starfish-add]', function () {
    gtag('event', 'Starfish VPN', {
      'event_label': 'Starfish add click count'
    });
  });
  showPremiumProducts('output_filter');
})(jQuery);

/***/ }),

/***/ "./resources/assets/scripts/lottie.js":
/*!********************************************!*\
  !*** ./resources/assets/scripts/lottie.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var lottieInit = function lottieInit() {
  var lotties = document.querySelectorAll('.lottie');

  if (lotties.length) {
    lotties.forEach(function (item) {
      var finalOptions = {
        container: item,
        path: JSON.parse(item.dataset.options).path,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        name: 'Hello World'
      };
      window.bodymovin.loadAnimation(finalOptions);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (lottieInit);

/***/ }),

/***/ "./resources/assets/scripts/popover.js":
/*!*********************************************!*\
  !*** ./resources/assets/scripts/popover.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* -------------------------------------------------------------------------- */

/*                                   Popover                                  */

/* -------------------------------------------------------------------------- */


var popoverInit = function popoverInit() {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap__WEBPACK_IMPORTED_MODULE_0__["Popover"](popoverTriggerEl);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (popoverInit);

/***/ }),

/***/ "./resources/assets/scripts/tab.js":
/*!*****************************************!*\
  !*** ./resources/assets/scripts/tab.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* -------------------------------------------------------------------------- */

/*                                   Popover                                  */

/* -------------------------------------------------------------------------- */


var tabInit = function tabInit() {
  var btnReview = document.querySelector('[data-review-trigger]');

  if (btnReview) {
    btnReview.addEventListener('click', function () {
      var triggerEl = document.querySelector('.review-tab a[href="#tab-reviews"]');
      var tab = new bootstrap__WEBPACK_IMPORTED_MODULE_0__["Tab"](triggerEl);
      tab.show();
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (tabInit);

/***/ }),

/***/ "./resources/assets/scripts/toast.js":
/*!*******************************************!*\
  !*** ./resources/assets/scripts/toast.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");


var toastInit = function toastInit() {
  var toastElList = [].slice.call(document.querySelectorAll('.toast'));
  toastElList.map(function (toastEl) {
    return new bootstrap__WEBPACK_IMPORTED_MODULE_0__["Toast"](toastEl);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (toastInit);

/***/ }),

/***/ "./resources/assets/scripts/tooltip.js":
/*!*********************************************!*\
  !*** ./resources/assets/scripts/tooltip.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");


var tooltipInit = function tooltipInit() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap__WEBPACK_IMPORTED_MODULE_0__["Tooltip"](tooltipTriggerEl);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (tooltipInit);

/***/ }),

/***/ "./resources/assets/styles/app.scss":
/*!******************************************!*\
  !*** ./resources/assets/styles/app.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/styles/editor.scss":
/*!*********************************************!*\
  !*** ./resources/assets/styles/editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************************************************************!*\
  !*** multi ./resources/assets/scripts/app.js ./resources/assets/styles/app.scss ./resources/assets/styles/editor.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/themewagon/wp-content/themes/themewagon/resources/assets/scripts/app.js */"./resources/assets/scripts/app.js");
__webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/themewagon/wp-content/themes/themewagon/resources/assets/styles/app.scss */"./resources/assets/styles/app.scss");
module.exports = __webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/themewagon/wp-content/themes/themewagon/resources/assets/styles/editor.scss */"./resources/assets/styles/editor.scss");


/***/ })

},[[0,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=app.js.map