(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/leftSection.js":
/*!***********************************!*\
  !*** ./components/leftSection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LeftSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _leftSection_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leftSection.module.css */ "./components/leftSection.module.css");
/* harmony import */ var _leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");

var _jsxFileName = "C:\\Users\\SANGRAM\\Desktop\\project\\assinment\\functionup\\plutonium\\components\\leftSection.js";
 // import Image from 'next/image'





const Spacer = ({
  width = 0,
  height = 0
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  style: {
    width,
    height
  }
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 47
}, undefined);

function LeftSection({
  collegeDetails
}) {
  const {
    fullName,
    logoLink: collegeLogo
  } = collegeDetails;
  const [collegeFullName, collegeCity] = (fullName === null || fullName === void 0 ? void 0 : fullName.split(',')) || ['', ''];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().full)} ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().section)} ${(_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().leftSection)}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '2.5rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().companyNameContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: collegeLogo,
          alt: "logo",
          width: 80 * _utils_constants__WEBPACK_IMPORTED_MODULE_2__.scaleFactor,
          height: 80 * _utils_constants__WEBPACK_IMPORTED_MODULE_2__.scaleFactor
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            marginLeft: `1rem`
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: (_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().collegeName),
            children: collegeFullName.trim()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this), !!collegeCity && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
            className: (_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().collegeCity),
            children: collegeCity.trim()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 43
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
        height: '4rem'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().descHeading),
        children: ["Want to be a part ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 77
        }, this), " of Company?"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
        height: '1.7rem'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/svgs/student.svg",
        alt: "student reading",
        width: 442 * _utils_constants__WEBPACK_IMPORTED_MODULE_2__.scaleFactor,
        height: 419 * _utils_constants__WEBPACK_IMPORTED_MODULE_2__.scaleFactor
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '.5rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
      className: `${(_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().copyrightText)} ${(_leftSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().hideCopyRightText)}`,
      children: ["Powered by ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        style: {
          color: '#FF2231'
        },
        children: "FunctionUp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 111
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/rightSection.js":
/*!************************************!*\
  !*** ./components/rightSection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RightSection)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _rightSection_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rightSection.module.css */ "./components/rightSection.module.css");
/* harmony import */ var _rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _leftSection_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leftSection.module.css */ "./components/leftSection.module.css");
/* harmony import */ var _leftSection_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_leftSection_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");


var _jsxFileName = "C:\\Users\\SANGRAM\\Desktop\\project\\assinment\\functionup\\plutonium\\components\\rightSection.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import Image from 'next/image'







function maskMail(email) {
  if (typeof email !== 'string') return email;
  const [name, domain] = email.split('@');
  const maskedName = `${name.slice(0, name.length / 2)}${'*'.repeat(name.length / 2)}`;
  return maskedName + (domain ? '@' : '') + (domain || '');
}

const brandNames = [{
  name: 'Practo',
  image: ''
}, {
  name: 'Walmart',
  image: ''
}, {
  name: 'Amazon',
  image: ''
}, {
  name: 'BigBasket',
  image: ''
}, {
  name: 'OYO',
  image: ''
}, {
  name: 'Meesho',
  image: ''
}, {
  name: 'Razorpay',
  image: ''
}, {
  name: 'Netflix',
  image: ''
}, {
  name: 'Twitter',
  image: ''
}];

const Spacer = ({
  width = 0,
  height = 0
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  style: {
    width,
    height
  }
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 58,
  columnNumber: 47
}, undefined); // const AttachFile = () => (
//     <div style={{ display: 'flex' }} >
//         <span style={{color:'red'}} >&#128206;</span>
//         <span>Attach file</span>
//     </div>
// )


function RightSection({
  collegeDetails,
  refreshCollegeDetails
}) {
  const {
    0: internIntention,
    1: setInternIntention
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const {
    0: applyForInternFormValues,
    1: setApplyForInternFormValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const {
    0: hireForInternFormValues,
    1: setHireForInternFormValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    interns: interests,
    name: collegeName,
    fullName
  } = collegeDetails;
  const renderApplyInternForm = [{
    placeholder: 'Name',
    type: 'text',
    id: 'name',
    handleOnChange
  }, {
    placeholder: 'Email Address',
    type: 'email',
    id: 'email',
    handleOnChange
  }, {
    placeholder: 'WhatsApp No.',
    type: 'number',
    id: 'mobile',
    maxlength: 10,
    handleOnChange
  }, {
    placeholder: 'Resume upload',
    type: 'file',
    id: 'cv',
    handleOnChange: handleOnChangeFile
  }];
  const renderHireInternForm = [{
    placeholder: 'Company Name',
    type: 'text',
    id: 'name',
    handleOnChange
  }, {
    placeholder: 'Location',
    type: 'text',
    id: 'location',
    handleOnChange
  }, {
    placeholder: 'Phone No.',
    type: 'number',
    id: 'mobile',
    maxlength: 10,
    handleOnChange
  }, {
    placeholder: 'Email Address',
    type: 'email',
    id: 'email',
    handleOnChange
  }];
  const formDataToRender = internIntention === 0 ? renderApplyInternForm : renderHireInternForm;
  const setForm = internIntention === 0 ? setApplyForInternFormValues : setHireForInternFormValues;
  const filledForm = internIntention === 0 ? applyForInternFormValues : hireForInternFormValues;

  function getIntroText() {
    if (internIntention === 0) return 'Join as a Software Developer Intern in a top tier company. Register Now.';
    return `Looking to hire interns from ${fullName}? Register Now.`;
  }

  function onClickInternIntention(e) {
    if (e.target.value == undefined || e.target.value === internIntention) return;
    setInternIntention(Number(e.target.value));
  }

  function getSelectedDivClassName() {
    if (internIntention === 0) return `${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().selectedToggleBtn)} ${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().selectedToggleBtnLeft)}`;
    return `${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().selectedToggleBtn)} ${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().selectedToggleBtnRight)}`;
  }

  function getInternIntentionClassName(value) {
    const isSelected = internIntention === value;
    if (isSelected) return `${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().toggleBtn)} ${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().whiteText)}`;
    return (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().toggleBtn);
  }

  function handleOnChange(id, e) {
    setForm(_objectSpread(_objectSpread({}, filledForm), {}, {
      [id]: e.target.value
    }));
  }

  function handleOnChangeFile(id, e) {
    const file = e.target.files[0];
    setApplyForInternFormValues(_objectSpread(_objectSpread({}, applyForInternFormValues), {}, {
      [id]: file,
      cvName: file.name
    }));
  }

  async function submitInternForm() {
    try {
      setIsLoading(true);

      if (Object.keys(filledForm).length < 4 || Object.values(filledForm).filter(item => !item).length) {
        alert('All fields are mandatory');
        return;
      }

      if (internIntention === 1) {
        // TODO: use setTimeout with loader
        alert('your request has been submitted successfully');
        setHireForInternFormValues({});
        return;
      }

      const formData = new FormData();
      Object.keys(applyForInternFormValues).forEach(key => formData.append(key, applyForInternFormValues[key]));
      formData.append('collegeName', collegeName);
      const response = await fetch(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.placementInterestApi, {
        method: 'POST',
        body: formData
      });
      const val = await response.json();
      if (val.status === false) throw '';
      alert('Your request has been submitted successfully. You will be contacted soon');
      setApplyForInternFormValues({});
      refreshCollegeDetails();
    } catch (error) {
      console.log(error, 'post');
    } finally {
      setIsLoading(false);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().section)} ${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().rightSection)}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '2.5rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onClick: onClickInternIntention,
      className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().internToggleBtnContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: getSelectedDivClassName()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        value: 0,
        className: getInternIntentionClassName(0),
        children: "Apply for internship"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        value: 1,
        className: getInternIntentionClassName(1),
        children: "Hire Software Interns"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '2.5rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }, this), internIntention === 1 && Array.isArray(interests) && !!interests.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().interestContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().interestRow),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().rowItemHeading),
          style: {
            flex: .75
          },
          children: "S. no"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().rowItemHeading),
          style: {
            flex: 1
          },
          children: "Intern Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().rowItemHeading),
          style: {
            flex: 1
          },
          children: "Email Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 25
        }, this)]
      }, 0, true, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 21
      }, this), interests.map((interest, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().interestRow),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            flex: .75,
            fontSize: '.87rem',
            fontWeight: '700'
          },
          children: `${index + 1}. `
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            flex: 1,
            fontSize: '.87rem',
            fontWeight: '700'
          },
          children: interest.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            flex: 1,
            fontSize: '.87rem'
          },
          children: maskMail(interest.email)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 29
        }, this)]
      }, interest._id, true, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 25
      }, this))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '1.5rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().intro_text),
      children: getIntroText()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '1.5rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputContainer),
      children: formDataToRender.map(({
        id,
        type,
        handleOnChange,
        placeholder
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().formElementContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: id,
          className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().labelBox),
          style: {
            color: applyForInternFormValues['cvName'] ? 'black' : '#caccdd'
          },
          children: id === 'cv' && (applyForInternFormValues['cvName'] || placeholder)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: e => handleOnChange(id, e) // accept="application/pdf, application/doc"
          ,
          value: filledForm[id === 'cv' ? '' : id] || '' // because file type value is read-only, it is an uncontrolled component 
          ,
          id: id,
          type: type,
          required: true,
          autoComplete: "on",
          className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
          placeholder: placeholder
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 25
        }, this)]
      }, id, true, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '1.25rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      disabled: isLoading,
      className: (_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().applyBtn),
      onClick: submitInternForm,
      children: "Apply Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }, this), internIntention === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
        height: '4rem'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "More than 200+ Brands trust us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
        height: '1rem'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/svgs/companies.svg",
        alt: "companies",
        width: 750 * _utils_constants__WEBPACK_IMPORTED_MODULE_3__.scaleFactor,
        height: 40 * _utils_constants__WEBPACK_IMPORTED_MODULE_3__.scaleFactor
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 21
      }, this)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '2rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
      className: `${(_leftSection_module_css__WEBPACK_IMPORTED_MODULE_6___default().copyrightText)} ${(_rightSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().copyrightText)}`,
      children: ["Powered by ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        style: {
          color: '#FF2231'
        },
        children: "FunctionUp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 111
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spacer, {
      height: '2rem'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 236,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_leftSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/leftSection */ "./components/leftSection.js");
/* harmony import */ var _components_rightSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/rightSection */ "./components/rightSection.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");

var _jsxFileName = "C:\\Users\\SANGRAM\\Desktop\\project\\assinment\\functionup\\plutonium\\pages\\index.js";







function Home() {
  var _window;

  const {
    0: collegeDetails,
    1: setCollegeDetails
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const location =  false ? 0 : {};
  const {
    hostname
  } = location;
  const [a, b, _] = (hostname === null || hostname === void 0 ? void 0 : hostname.split('.')) || [];
  const collegeName =  false ? 0 : 'iitd'; // console.log({ router ,location, hostname , collegeName, a, b, env:process.env.NODE_ENV})

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    async function fetchCollegeDetails() {
      try {
        setIsLoading(true);
        const response = await fetch((0,_utils_constants__WEBPACK_IMPORTED_MODULE_6__.collegeDetailsApi)(collegeName));
        const val = await response.json();
        if (val.status === false) throw val.msg;
        setCollegeDetails(val.data);
      } catch (error) {// console.log({fetchCollegeDetailsError:error})
      } finally {
        setIsLoading(false);
      }
    }

    fetchCollegeDetails();
  }, [collegeName]);

  async function refreshCollegeDetails() {
    try {
      // setIsLoading(true)
      const response = await fetch((0,_utils_constants__WEBPACK_IMPORTED_MODULE_6__.collegeDetailsApi)(collegeName));
      const val = await response.json();
      if (val.status === false) throw val.msg;
      setCollegeDetails(val.data);
    } catch (error) {} finally {// setIsLoading(false)
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().full)} ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container)}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Function Up Intern"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Intern Form"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().full)} ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main)}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_leftSection__WEBPACK_IMPORTED_MODULE_2__.default, {
        collegeDetails: collegeDetails
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_rightSection__WEBPACK_IMPORTED_MODULE_3__.default, {
        refreshCollegeDetails: refreshCollegeDetails,
        collegeDetails: collegeDetails
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scaleFactor": () => (/* binding */ scaleFactor),
/* harmony export */   "collegeDetailsApi": () => (/* binding */ collegeDetailsApi),
/* harmony export */   "placementInterestApi": () => (/* binding */ placementInterestApi)
/* harmony export */ });
const scaleFactor = 621 / 900;
const baseUrl = 'http://localhost:3001/functionup';
const collegeDetailsApi = collegeName => `${baseUrl}/collegeDetails?collegeName=${collegeName}`;
const placementInterestApi = `${baseUrl}/interns`;

/***/ }),

/***/ "./components/leftSection.module.css":
/*!*******************************************!*\
  !*** ./components/leftSection.module.css ***!
  \*******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"leftSection": "leftSection_leftSection__2Swu5",
	"companyNameContainer": "leftSection_companyNameContainer__24qEu",
	"descHeading": "leftSection_descHeading__x8J_D",
	"copyrightText": "leftSection_copyrightText__850tF",
	"collegeName": "leftSection_collegeName__2yQR3",
	"collegeCity": "leftSection_collegeCity__2WSgJ",
	"hideCopyRightText": "leftSection_hideCopyRightText__2zbcT"
};


/***/ }),

/***/ "./components/rightSection.module.css":
/*!********************************************!*\
  !*** ./components/rightSection.module.css ***!
  \********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"rightSection": "rightSection_rightSection__3IF9x",
	"intro_text": "rightSection_intro_text__36uv7",
	"internToggleBtnContainer": "rightSection_internToggleBtnContainer__1dPhD",
	"toggleBtn": "rightSection_toggleBtn__1GBoz",
	"selectedToggleBtn": "rightSection_selectedToggleBtn__3w8kX",
	"selectedToggleBtnRight": "rightSection_selectedToggleBtnRight__3z1vF",
	"selectedToggleBtnLeft": "rightSection_selectedToggleBtnLeft__KyycX",
	"whiteText": "rightSection_whiteText__2NQQO",
	"inputContainer": "rightSection_inputContainer__3vcjf",
	"inputBox": "rightSection_inputBox__1kwWw",
	"formElementContainer": "rightSection_formElementContainer__3ahNU",
	"labelBox": "rightSection_labelBox__399Or",
	"applyBtn": "rightSection_applyBtn__3iRFu",
	"companyContainer": "rightSection_companyContainer__3G1uS",
	"interestContainer": "rightSection_interestContainer__3zW4a",
	"interestRow": "rightSection_interestRow__AG_nt",
	"rowItemHeading": "rightSection_rowItemHeading__3k5yY",
	"copyrightText": "rightSection_copyrightText__uKzF9"
};


/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"full": "Home_full__2oLj5",
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"section": "Home_section__16Giz",
	"loader": "Home_loader__2xJ8c",
	"spin": "Home_spin__dz3Ay",
	"loader_container": "Home_loader_container__1IBu9"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEdBQUV1SCxPQUFRLCtCQUE4QnZILFdBQVksRUFBOUY7QUFDQSxNQUFNUyxvQkFBb0IsR0FBSSxHQUFFOEcsT0FBUSxVQUF4Qzs7Ozs7Ozs7OztBQ0pQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVuY3Rpb24tdXAtaW50ZXJuLy4vY29tcG9uZW50cy9sZWZ0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9mdW5jdGlvbi11cC1pbnRlcm4vLi9jb21wb25lbnRzL3JpZ2h0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9mdW5jdGlvbi11cC1pbnRlcm4vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mdW5jdGlvbi11cC1pbnRlcm4vLi91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZnVuY3Rpb24tdXAtaW50ZXJuLy4vY29tcG9uZW50cy9sZWZ0U2VjdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2Z1bmN0aW9uLXVwLWludGVybi8uL2NvbXBvbmVudHMvcmlnaHRTZWN0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnVuY3Rpb24tdXAtaW50ZXJuLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mdW5jdGlvbi11cC1pbnRlcm4vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mdW5jdGlvbi11cC1pbnRlcm4vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Z1bmN0aW9uLXVwLWludGVybi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnVuY3Rpb24tdXAtaW50ZXJuL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgc2VjdGlvblN0eWxlcyBmcm9tICcuL2xlZnRTZWN0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7c2NhbGVGYWN0b3J9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cydcclxuXHJcbmNvbnN0IFNwYWNlciA9ICh7IHdpZHRoID0gMCwgaGVpZ2h0ID0gMCB9KSA9PiA8ZGl2IHN0eWxlPXt7d2lkdGgsIGhlaWdodH19Lz5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlZnRTZWN0aW9uKHtcclxuICAgIGNvbGxlZ2VEZXRhaWxzXHJcbn0pIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZnVsbE5hbWUsXHJcbiAgICAgICAgbG9nb0xpbms6Y29sbGVnZUxvZ29cclxuICAgIH0gPSBjb2xsZWdlRGV0YWlsc1xyXG5cclxuICAgIGNvbnN0IFtjb2xsZWdlRnVsbE5hbWUsIGNvbGxlZ2VDaXR5XSA9IGZ1bGxOYW1lPy5zcGxpdCgnLCcpIHx8IFsnJywgJyddXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mdWxsfSAke3N0eWxlcy5zZWN0aW9ufSAke3NlY3Rpb25TdHlsZXMubGVmdFNlY3Rpb259YH0+XHJcbiAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsnMi41cmVtJ30gLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VjdGlvblN0eWxlcy5jb21wYW55TmFtZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbGxlZ2VMb2dvfSBhbHQ9XCJsb2dvXCIgd2lkdGg9ezgwICogc2NhbGVGYWN0b3J9IGhlaWdodD17ODAgKiBzY2FsZUZhY3Rvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpgMXJlbWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMuY29sbGVnZU5hbWV9Pntjb2xsZWdlRnVsbE5hbWUudHJpbSgpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshIWNvbGxlZ2VDaXR5ICYmIDxzbWFsbCBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMuY29sbGVnZUNpdHl9ID57Y29sbGVnZUNpdHkudHJpbSgpfTwvc21hbGw+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNwYWNlciBoZWlnaHQ9eyc0cmVtJ30gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c2VjdGlvblN0eWxlcy5kZXNjSGVhZGluZ30+V2FudCB0byBiZSBhIHBhcnQgPGJyLz4gb2YgQ29tcGFueT88L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsnMS43cmVtJ30gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3Zncy9zdHVkZW50LnN2Z1wiIGFsdD1cInN0dWRlbnQgcmVhZGluZ1wiIHdpZHRoPXs0NDIgKiBzY2FsZUZhY3Rvcn0gaGVpZ2h0PXs0MTkgKiBzY2FsZUZhY3Rvcn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17Jy41cmVtJ30gLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2Ake3NlY3Rpb25TdHlsZXMuY29weXJpZ2h0VGV4dH0gJHtzZWN0aW9uU3R5bGVzLmhpZGVDb3B5UmlnaHRUZXh0fWB9PlBvd2VyZWQgYnkgPHNwYW4gc3R5bGU9e3tjb2xvcjonI0ZGMjIzMSd9fT5GdW5jdGlvblVwPC9zcGFuPjwvc21hbGw+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHNlY3Rpb25TdHlsZXMgZnJvbSAnLi9yaWdodFNlY3Rpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IGxlZnRTZWN0aW9uU3R5bGVzIGZyb20gJy4vbGVmdFNlY3Rpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7c2NhbGVGYWN0b3IsIHBsYWNlbWVudEludGVyZXN0QXBpfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnXHJcblxyXG5cclxuZnVuY3Rpb24gbWFza01haWwoZW1haWwpIHtcclxuICAgIGlmICh0eXBlb2YgZW1haWwgIT09ICdzdHJpbmcnIClcclxuICAgICAgICByZXR1cm4gZW1haWxcclxuICAgIFxyXG4gICAgY29uc3QgW25hbWUsIGRvbWFpbl0gPSBlbWFpbC5zcGxpdCgnQCcpXHJcbiAgICBjb25zdCBtYXNrZWROYW1lID0gYCR7bmFtZS5zbGljZSgwLCBuYW1lLmxlbmd0aCAvIDIpfSR7JyonLnJlcGVhdChuYW1lLmxlbmd0aCAvIDIpfWBcclxuICAgIHJldHVybiBtYXNrZWROYW1lICsgKGRvbWFpbiA/ICdAJyA6ICcnKSArIChkb21haW4gfHwgJycpXHJcbn1cclxuXHJcbmNvbnN0IGJyYW5kTmFtZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1ByYWN0bycsXHJcbiAgICAgICAgaW1hZ2U6JydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1dhbG1hcnQnLFxyXG4gICAgICAgIGltYWdlOicnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdBbWF6b24nLFxyXG4gICAgICAgIGltYWdlOicnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdCaWdCYXNrZXQnLFxyXG4gICAgICAgIGltYWdlOicnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdPWU8nLFxyXG4gICAgICAgIGltYWdlOicnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdNZWVzaG8nLFxyXG4gICAgICAgIGltYWdlOicnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdSYXpvcnBheScsXHJcbiAgICAgICAgaW1hZ2U6JydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ05ldGZsaXgnLFxyXG4gICAgICAgIGltYWdlOicnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdUd2l0dGVyJyxcclxuICAgICAgICBpbWFnZTonJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5jb25zdCBTcGFjZXIgPSAoeyB3aWR0aCA9IDAsIGhlaWdodCA9IDAgfSkgPT4gPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19IC8+XHJcblxyXG4vLyBjb25zdCBBdHRhY2hGaWxlID0gKCkgPT4gKFxyXG4vLyAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0gPlxyXG4vLyAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6J3JlZCd9fSA+JiMxMjgyMDY7PC9zcGFuPlxyXG4vLyAgICAgICAgIDxzcGFuPkF0dGFjaCBmaWxlPC9zcGFuPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vIClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJpZ2h0U2VjdGlvbih7XHJcbiAgICBjb2xsZWdlRGV0YWlscyxcclxuICAgIHJlZnJlc2hDb2xsZWdlRGV0YWlsc1xyXG59KSB7XHJcbiAgICBjb25zdCBbaW50ZXJuSW50ZW50aW9uLCBzZXRJbnRlcm5JbnRlbnRpb25dID0gdXNlU3RhdGUoMSlcclxuICAgIGNvbnN0IFthcHBseUZvckludGVybkZvcm1WYWx1ZXMsIHNldEFwcGx5Rm9ySW50ZXJuRm9ybVZhbHVlc10gPSB1c2VTdGF0ZSh7fSlcclxuICAgIGNvbnN0IFtoaXJlRm9ySW50ZXJuRm9ybVZhbHVlcywgc2V0SGlyZUZvckludGVybkZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGludGVybnM6aW50ZXJlc3RzLFxyXG4gICAgICAgIG5hbWU6Y29sbGVnZU5hbWUsXHJcbiAgICAgICAgZnVsbE5hbWVcclxuICAgIH0gPSBjb2xsZWdlRGV0YWlsc1xyXG4gICAgXHJcbiAgICBjb25zdCByZW5kZXJBcHBseUludGVybkZvcm0gPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjonTmFtZScsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgaWQ6ICduYW1lJyxcclxuICAgICAgICAgICAgaGFuZGxlT25DaGFuZ2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdFbWFpbCBBZGRyZXNzJyxcclxuICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcclxuICAgICAgICAgICAgaWQ6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1doYXRzQXBwIE5vLicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICBpZDonbW9iaWxlJyxcclxuICAgICAgICAgICAgbWF4bGVuZ3RoOiAxMCxcclxuICAgICAgICAgICAgaGFuZGxlT25DaGFuZ2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUmVzdW1lIHVwbG9hZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICAgICAgaWQ6ICdjdicsXHJcbiAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlOmhhbmRsZU9uQ2hhbmdlRmlsZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICBdXHJcbiAgICAgICAgXHJcbiAgICBjb25zdCByZW5kZXJIaXJlSW50ZXJuRm9ybSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOidDb21wYW55IE5hbWUnLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGlkOiduYW1lJyxcclxuICAgICAgICAgICAgaGFuZGxlT25DaGFuZ2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdMb2NhdGlvbicsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgaWQ6ICdsb2NhdGlvbicsXHJcbiAgICAgICAgICAgIGhhbmRsZU9uQ2hhbmdlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUGhvbmUgTm8uJyxcclxuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgIGlkOidtb2JpbGUnLFxyXG4gICAgICAgICAgICBtYXhsZW5ndGg6IDEwLFxyXG4gICAgICAgICAgICBoYW5kbGVPbkNoYW5nZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0VtYWlsIEFkZHJlc3MnLFxyXG4gICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxyXG4gICAgICAgICAgICBpZDogJ2VtYWlsJyxcclxuICAgICAgICAgICAgaGFuZGxlT25DaGFuZ2VcclxuICAgICAgICB9XHJcbiAgICBdXHJcbiAgICBcclxuICAgIGNvbnN0IGZvcm1EYXRhVG9SZW5kZXIgPSBpbnRlcm5JbnRlbnRpb24gPT09IDAgPyByZW5kZXJBcHBseUludGVybkZvcm0gOiByZW5kZXJIaXJlSW50ZXJuRm9ybVxyXG4gICAgY29uc3Qgc2V0Rm9ybSA9IGludGVybkludGVudGlvbiA9PT0gMCA/IHNldEFwcGx5Rm9ySW50ZXJuRm9ybVZhbHVlcyA6IHNldEhpcmVGb3JJbnRlcm5Gb3JtVmFsdWVzXHJcbiAgICBjb25zdCBmaWxsZWRGb3JtID0gaW50ZXJuSW50ZW50aW9uID09PSAwID8gYXBwbHlGb3JJbnRlcm5Gb3JtVmFsdWVzIDogaGlyZUZvckludGVybkZvcm1WYWx1ZXNcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJbnRyb1RleHQoKSB7XHJcbiAgICAgICAgaWYgKGludGVybkludGVudGlvbiA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuICdKb2luIGFzIGEgU29mdHdhcmUgRGV2ZWxvcGVyIEludGVybiBpbiBhIHRvcCB0aWVyIGNvbXBhbnkuIFJlZ2lzdGVyIE5vdy4nXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGBMb29raW5nIHRvIGhpcmUgaW50ZXJucyBmcm9tICR7ZnVsbE5hbWV9PyBSZWdpc3RlciBOb3cuYFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2xpY2tJbnRlcm5JbnRlbnRpb24oZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSB1bmRlZmluZWQgfHwgZS50YXJnZXQudmFsdWUgPT09IGludGVybkludGVudGlvbilcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0SW50ZXJuSW50ZW50aW9uKE51bWJlcihlLnRhcmdldC52YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWREaXZDbGFzc05hbWUoKSB7XHJcbiAgICAgICAgaWYgKGludGVybkludGVudGlvbiA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIGAke3NlY3Rpb25TdHlsZXMuc2VsZWN0ZWRUb2dnbGVCdG59ICR7c2VjdGlvblN0eWxlcy5zZWxlY3RlZFRvZ2dsZUJ0bkxlZnR9YFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBgJHtzZWN0aW9uU3R5bGVzLnNlbGVjdGVkVG9nZ2xlQnRufSAke3NlY3Rpb25TdHlsZXMuc2VsZWN0ZWRUb2dnbGVCdG5SaWdodH1gXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW50ZXJuSW50ZW50aW9uQ2xhc3NOYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGludGVybkludGVudGlvbiA9PT0gdmFsdWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtzZWN0aW9uU3R5bGVzLnRvZ2dsZUJ0bn0gJHtzZWN0aW9uU3R5bGVzLndoaXRlVGV4dH1gXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHNlY3Rpb25TdHlsZXMudG9nZ2xlQnRuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkNoYW5nZShpZCwgZSkge1xyXG4gICAgICAgIHNldEZvcm0oe1xyXG4gICAgICAgICAgICAuLi5maWxsZWRGb3JtLFxyXG4gICAgICAgICAgICBbaWRdOmUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVPbkNoYW5nZUZpbGUoaWQsIGUpIHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cclxuICAgICAgICBcclxuICAgICAgICBzZXRBcHBseUZvckludGVybkZvcm1WYWx1ZXMoe1xyXG4gICAgICAgICAgICAuLi5hcHBseUZvckludGVybkZvcm1WYWx1ZXMsXHJcbiAgICAgICAgICAgIFtpZF06IGZpbGUsXHJcbiAgICAgICAgICAgIGN2TmFtZTpmaWxlLm5hbWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEludGVybkZvcm0oKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmaWxsZWRGb3JtKS5sZW5ndGggPCA0XHJcbiAgICAgICAgICAgICAgICB8fCBPYmplY3QudmFsdWVzKGZpbGxlZEZvcm0pLmZpbHRlcihpdGVtID0+ICFpdGVtKS5sZW5ndGhcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnQWxsIGZpZWxkcyBhcmUgbWFuZGF0b3J5JylcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaW50ZXJuSW50ZW50aW9uID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB1c2Ugc2V0VGltZW91dCB3aXRoIGxvYWRlclxyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ3lvdXIgcmVxdWVzdCBoYXMgYmVlbiBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5JylcclxuICAgICAgICAgICAgICAgIHNldEhpcmVGb3JJbnRlcm5Gb3JtVmFsdWVzKHt9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhcHBseUZvckludGVybkZvcm1WYWx1ZXMpLmZvckVhY2goa2V5ID0+IGZvcm1EYXRhLmFwcGVuZChrZXksIGFwcGx5Rm9ySW50ZXJuRm9ybVZhbHVlc1trZXldKSlcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb2xsZWdlTmFtZScsIGNvbGxlZ2VOYW1lKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwbGFjZW1lbnRJbnRlcmVzdEFwaSwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICAgICAgICAgIGlmKHZhbC5zdGF0dXMgPT09IGZhbHNlKSBcclxuICAgICAgICAgICAgICAgIHRocm93ICcnXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhbGVydCgnWW91ciByZXF1ZXN0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkuIFlvdSB3aWxsIGJlIGNvbnRhY3RlZCBzb29uJylcclxuICAgICAgICAgICAgc2V0QXBwbHlGb3JJbnRlcm5Gb3JtVmFsdWVzKHt9KVxyXG4gICAgICAgICAgICByZWZyZXNoQ29sbGVnZURldGFpbHMoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCAncG9zdCcpXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb259ICR7c2VjdGlvblN0eWxlcy5yaWdodFNlY3Rpb259YH0+XHJcbiAgICAgICAgICAgIHsvKiB7aXNMb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfS8+fSAqL31cclxuXHJcbiAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsnMi41cmVtJ30gLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25DbGlja0ludGVybkludGVudGlvbn0gY2xhc3NOYW1lPXtzZWN0aW9uU3R5bGVzLmludGVyblRvZ2dsZUJ0bkNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldFNlbGVjdGVkRGl2Q2xhc3NOYW1lKCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9e2dldEludGVybkludGVudGlvbkNsYXNzTmFtZSgwKX0+QXBwbHkgZm9yIGludGVybnNoaXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT17Z2V0SW50ZXJuSW50ZW50aW9uQ2xhc3NOYW1lKDEpfT5IaXJlIFNvZnR3YXJlIEludGVybnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17JzIuNXJlbSd9IC8+XHJcblxyXG4gICAgICAgICAgICB7aW50ZXJuSW50ZW50aW9uID09PSAxICYmIEFycmF5LmlzQXJyYXkoaW50ZXJlc3RzKSAmJiAhIWludGVyZXN0cy5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMuaW50ZXJlc3RDb250YWluZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VjdGlvblN0eWxlcy5pbnRlcmVzdFJvd30ga2V5PXswfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzZWN0aW9uU3R5bGVzLnJvd0l0ZW1IZWFkaW5nfSBzdHlsZT17e2ZsZXg6Ljc1fX0gPlMuIG5vPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMucm93SXRlbUhlYWRpbmd9IHN0eWxlPXt7ZmxleDoxfX0+SW50ZXJuIE5hbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c2VjdGlvblN0eWxlcy5yb3dJdGVtSGVhZGluZ30gc3R5bGU9e3tmbGV4OjEgfX0+RW1haWwgQWRkcmVzczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7aW50ZXJlc3RzLm1hcCgoaW50ZXJlc3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZWN0aW9uU3R5bGVzLmludGVyZXN0Um93fSBrZXk9e2ludGVyZXN0Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZsZXg6Ljc1LCBmb250U2l6ZTonLjg3cmVtJywgZm9udFdlaWdodDonNzAwJ319ID57YCR7aW5kZXgrMX0uIGB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OjEsIGZvbnRTaXplOicuODdyZW0nLCBmb250V2VpZ2h0Oic3MDAnfX0+e2ludGVyZXN0Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbGV4OjEsIGZvbnRTaXplOicuODdyZW0nLCB9fT57bWFza01haWwoaW50ZXJlc3QuZW1haWwpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsnMS41cmVtJ30gLz5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c2VjdGlvblN0eWxlcy5pbnRyb190ZXh0fSA+e2dldEludHJvVGV4dCgpfTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsnMS41cmVtJ30gLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZWN0aW9uU3R5bGVzLmlucHV0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtmb3JtRGF0YVRvUmVuZGVyLm1hcCgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT25DaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyXHJcbiAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMuZm9ybUVsZW1lbnRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMubGFiZWxCb3h9IHN0eWxlPXt7Y29sb3I6YXBwbHlGb3JJbnRlcm5Gb3JtVmFsdWVzWydjdk5hbWUnXT8gJ2JsYWNrJyA6ICcjY2FjY2RkJ319ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZCA9PT0gJ2N2JyAmJiAoYXBwbHlGb3JJbnRlcm5Gb3JtVmFsdWVzWydjdk5hbWUnXSB8fCBwbGFjZWhvbGRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IGlkPXtpZH0gdHlwZT17dHlwZX0gcmVxdWlyZWQgYXV0b0NvbXBsZXRlIGNsYXNzTmFtZT17c2VjdGlvblN0eWxlcy5pbnB1dEJveH0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVPbkNoYW5nZShpZCwgZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhY2NlcHQ9XCJhcHBsaWNhdGlvbi9wZGYsIGFwcGxpY2F0aW9uL2RvY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmlsbGVkRm9ybVtpZCA9PT0gJ2N2JyA/ICcnIDogaWRdIHx8ICcnfSAvLyBiZWNhdXNlIGZpbGUgdHlwZSB2YWx1ZSBpcyByZWFkLW9ubHksIGl0IGlzIGFuIHVuY29udHJvbGxlZCBjb21wb25lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMuaW5wdXRCb3h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17JzEuMjVyZW0nfSAvPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17aXNMb2FkaW5nfSBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZXMuYXBwbHlCdG59IG9uQ2xpY2s9e3N1Ym1pdEludGVybkZvcm19ID5BcHBseSBOb3c8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIHtpbnRlcm5JbnRlbnRpb24gPT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8U3BhY2VyIGhlaWdodD17JzRyZW0nfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Nb3JlIHRoYW4gMjAwKyBCcmFuZHMgdHJ1c3QgdXM8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsnMXJlbSd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9XCIvY29tcGFueS1pbWFnZS5wbmdcIiBhbHQ9XCJjb21wYW5pZXNcIiB3aWR0aD17NzI5fSBoZWlnaHQ9ezMwfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdmdzL2NvbXBhbmllcy5zdmdcIiBhbHQ9XCJjb21wYW5pZXNcIiB3aWR0aD17NzUwICogc2NhbGVGYWN0b3J9IGhlaWdodD17NDAgKiBzY2FsZUZhY3Rvcn0gLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c2VjdGlvblN0eWxlcy5jb21wYW55Q29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHticmFuZE5hbWVzLm1hcChicmFuZCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YnJhbmQubmFtZX0gPnticmFuZC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxTcGFjZXIgaGVpZ2h0PXsnMnJlbSd9IC8+XHJcblxyXG4gICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtgJHtsZWZ0U2VjdGlvblN0eWxlcy5jb3B5cmlnaHRUZXh0fSAke3NlY3Rpb25TdHlsZXMuY29weXJpZ2h0VGV4dH1gfT5Qb3dlcmVkIGJ5IDxzcGFuIHN0eWxlPXt7Y29sb3I6JyNGRjIyMzEnfX0+RnVuY3Rpb25VcDwvc3Bhbj48L3NtYWxsPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFNwYWNlciBoZWlnaHQ9eycycmVtJ30gLz5cclxuXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGVmdFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9sZWZ0U2VjdGlvbic7XHJcbmltcG9ydCBSaWdodFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9yaWdodFNlY3Rpb24nO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IGNvbGxlZ2VEZXRhaWxzQXBpIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtjb2xsZWdlRGV0YWlscywgc2V0Q29sbGVnZURldGFpbHNdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIgPyB3aW5kb3c/LmxvY2F0aW9uIDoge31cclxuICBjb25zdCB7IGhvc3RuYW1lIH0gPSBsb2NhdGlvblxyXG4gIGNvbnN0IFthLCBiLCBfXSA9ICBob3N0bmFtZT8uc3BsaXQoJy4nKSB8fCBbXVxyXG4gIGNvbnN0IGNvbGxlZ2VOYW1lID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gIChhID09PSAnd3d3Jz8gYiA6IGEpIDogJ2lpdGQnXHJcbiAgLy8gY29uc29sZS5sb2coeyByb3V0ZXIgLGxvY2F0aW9uLCBob3N0bmFtZSAsIGNvbGxlZ2VOYW1lLCBhLCBiLCBlbnY6cHJvY2Vzcy5lbnYuTk9ERV9FTlZ9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbGxlZ2VEZXRhaWxzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29sbGVnZURldGFpbHNBcGkoY29sbGVnZU5hbWUpKVxyXG4gICAgICAgICAgY29uc3QgdmFsID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgICAgICAgaWYgKHZhbC5zdGF0dXMgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICB0aHJvdyB2YWwubXNnXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHNldENvbGxlZ2VEZXRhaWxzKHZhbC5kYXRhKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHtmZXRjaENvbGxlZ2VEZXRhaWxzRXJyb3I6ZXJyb3J9KVxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZldGNoQ29sbGVnZURldGFpbHMoKVxyXG4gIH0sIFtjb2xsZWdlTmFtZV0pXHJcblxyXG5cclxuICBhc3luYyBmdW5jdGlvbiByZWZyZXNoQ29sbGVnZURldGFpbHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBzZXRJc0xvYWRpbmcodHJ1ZSlcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjb2xsZWdlRGV0YWlsc0FwaShjb2xsZWdlTmFtZSkpXHJcbiAgICAgIGNvbnN0IHZhbCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgICAgaWYgKHZhbC5zdGF0dXMgPT09IGZhbHNlKVxyXG4gICAgICAgIHRocm93IHZhbC5tc2dcclxuICAgICAgXHJcbiAgICAgIHNldENvbGxlZ2VEZXRhaWxzKHZhbC5kYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgLy8gc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZnVsbH0gJHtzdHlsZXMuY29udGFpbmVyfWB9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+RnVuY3Rpb24gVXAgSW50ZXJuPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSW50ZXJuIEZvcm1cIiAvPlxyXG4gICAgICAgIHsvKiA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+ICovfVxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mdWxsfSAke3N0eWxlcy5tYWlufWB9PlxyXG4gICAgICAgIDxMZWZ0U2VjdGlvblxyXG4gICAgICAgICAgY29sbGVnZURldGFpbHM9e2NvbGxlZ2VEZXRhaWxzfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxSaWdodFNlY3Rpb25cclxuICAgICAgICAgIHJlZnJlc2hDb2xsZWdlRGV0YWlscz17cmVmcmVzaENvbGxlZ2VEZXRhaWxzfVxyXG4gICAgICAgICAgY29sbGVnZURldGFpbHM9e2NvbGxlZ2VEZXRhaWxzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc2NhbGVGYWN0b3IgPSA2MjEgLyA5MDBcclxuXHJcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2Z1bmN0aW9udXAnXHJcbmV4cG9ydCBjb25zdCBjb2xsZWdlRGV0YWlsc0FwaSA9IGNvbGxlZ2VOYW1lID0+IGAke2Jhc2VVcmx9L2NvbGxlZ2VEZXRhaWxzP2NvbGxlZ2VOYW1lPSR7Y29sbGVnZU5hbWV9YFxyXG5leHBvcnQgY29uc3QgcGxhY2VtZW50SW50ZXJlc3RBcGkgPSBgJHtiYXNlVXJsfS9pbnRlcm5zYFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsZWZ0U2VjdGlvblwiOiBcImxlZnRTZWN0aW9uX2xlZnRTZWN0aW9uX18yU3d1NVwiLFxuXHRcImNvbXBhbnlOYW1lQ29udGFpbmVyXCI6IFwibGVmdFNlY3Rpb25fY29tcGFueU5hbWVDb250YWluZXJfXzI0cUV1XCIsXG5cdFwiZGVzY0hlYWRpbmdcIjogXCJsZWZ0U2VjdGlvbl9kZXNjSGVhZGluZ19feDhKX0RcIixcblx0XCJjb3B5cmlnaHRUZXh0XCI6IFwibGVmdFNlY3Rpb25fY29weXJpZ2h0VGV4dF9fODUwdEZcIixcblx0XCJjb2xsZWdlTmFtZVwiOiBcImxlZnRTZWN0aW9uX2NvbGxlZ2VOYW1lX18yeVFSM1wiLFxuXHRcImNvbGxlZ2VDaXR5XCI6IFwibGVmdFNlY3Rpb25fY29sbGVnZUNpdHlfXzJXU2dKXCIsXG5cdFwiaGlkZUNvcHlSaWdodFRleHRcIjogXCJsZWZ0U2VjdGlvbl9oaWRlQ29weVJpZ2h0VGV4dF9fMnpiY1RcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJpZ2h0U2VjdGlvblwiOiBcInJpZ2h0U2VjdGlvbl9yaWdodFNlY3Rpb25fXzNJRjl4XCIsXG5cdFwiaW50cm9fdGV4dFwiOiBcInJpZ2h0U2VjdGlvbl9pbnRyb190ZXh0X18zNnV2N1wiLFxuXHRcImludGVyblRvZ2dsZUJ0bkNvbnRhaW5lclwiOiBcInJpZ2h0U2VjdGlvbl9pbnRlcm5Ub2dnbGVCdG5Db250YWluZXJfXzFkUGhEXCIsXG5cdFwidG9nZ2xlQnRuXCI6IFwicmlnaHRTZWN0aW9uX3RvZ2dsZUJ0bl9fMUdCb3pcIixcblx0XCJzZWxlY3RlZFRvZ2dsZUJ0blwiOiBcInJpZ2h0U2VjdGlvbl9zZWxlY3RlZFRvZ2dsZUJ0bl9fM3c4a1hcIixcblx0XCJzZWxlY3RlZFRvZ2dsZUJ0blJpZ2h0XCI6IFwicmlnaHRTZWN0aW9uX3NlbGVjdGVkVG9nZ2xlQnRuUmlnaHRfXzN6MXZGXCIsXG5cdFwic2VsZWN0ZWRUb2dnbGVCdG5MZWZ0XCI6IFwicmlnaHRTZWN0aW9uX3NlbGVjdGVkVG9nZ2xlQnRuTGVmdF9fS3l5Y1hcIixcblx0XCJ3aGl0ZVRleHRcIjogXCJyaWdodFNlY3Rpb25fd2hpdGVUZXh0X18yTlFRT1wiLFxuXHRcImlucHV0Q29udGFpbmVyXCI6IFwicmlnaHRTZWN0aW9uX2lucHV0Q29udGFpbmVyX18zdmNqZlwiLFxuXHRcImlucHV0Qm94XCI6IFwicmlnaHRTZWN0aW9uX2lucHV0Qm94X18xa3dXd1wiLFxuXHRcImZvcm1FbGVtZW50Q29udGFpbmVyXCI6IFwicmlnaHRTZWN0aW9uX2Zvcm1FbGVtZW50Q29udGFpbmVyX18zYWhOVVwiLFxuXHRcImxhYmVsQm94XCI6IFwicmlnaHRTZWN0aW9uX2xhYmVsQm94X18zOTlPclwiLFxuXHRcImFwcGx5QnRuXCI6IFwicmlnaHRTZWN0aW9uX2FwcGx5QnRuX18zaVJGdVwiLFxuXHRcImNvbXBhbnlDb250YWluZXJcIjogXCJyaWdodFNlY3Rpb25fY29tcGFueUNvbnRhaW5lcl9fM0cxdVNcIixcblx0XCJpbnRlcmVzdENvbnRhaW5lclwiOiBcInJpZ2h0U2VjdGlvbl9pbnRlcmVzdENvbnRhaW5lcl9fM3pXNGFcIixcblx0XCJpbnRlcmVzdFJvd1wiOiBcInJpZ2h0U2VjdGlvbl9pbnRlcmVzdFJvd19fQUdfbnRcIixcblx0XCJyb3dJdGVtSGVhZGluZ1wiOiBcInJpZ2h0U2VjdGlvbl9yb3dJdGVtSGVhZGluZ19fM2s1eVlcIixcblx0XCJjb3B5cmlnaHRUZXh0XCI6IFwicmlnaHRTZWN0aW9uX2NvcHlyaWdodFRleHRfX3VLekY5XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmdWxsXCI6IFwiSG9tZV9mdWxsX18yb0xqNVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwic2VjdGlvblwiOiBcIkhvbWVfc2VjdGlvbl9fMTZHaXpcIixcblx0XCJsb2FkZXJcIjogXCJIb21lX2xvYWRlcl9fMnhKOGNcIixcblx0XCJzcGluXCI6IFwiSG9tZV9zcGluX19kejNBeVwiLFxuXHRcImxvYWRlcl9jb250YWluZXJcIjogXCJIb21lX2xvYWRlcl9jb250YWluZXJfXzFJQnU5XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwic2VjdGlvblN0eWxlcyIsInNjYWxlRmFjdG9yIiwiU3BhY2VyIiwid2lkdGgiLCJoZWlnaHQiLCJMZWZ0U2VjdGlvbiIsImNvbGxlZ2VEZXRhaWxzIiwiZnVsbE5hbWUiLCJsb2dvTGluayIsImNvbGxlZ2VMb2dvIiwiY29sbGVnZUZ1bGxOYW1lIiwiY29sbGVnZUNpdHkiLCJzcGxpdCIsImZ1bGwiLCJzZWN0aW9uIiwibGVmdFNlY3Rpb24iLCJjb21wYW55TmFtZUNvbnRhaW5lciIsIm1hcmdpbkxlZnQiLCJjb2xsZWdlTmFtZSIsInRyaW0iLCJkZXNjSGVhZGluZyIsImNvcHlyaWdodFRleHQiLCJoaWRlQ29weVJpZ2h0VGV4dCIsImNvbG9yIiwibGVmdFNlY3Rpb25TdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInBsYWNlbWVudEludGVyZXN0QXBpIiwibWFza01haWwiLCJlbWFpbCIsIm5hbWUiLCJkb21haW4iLCJtYXNrZWROYW1lIiwic2xpY2UiLCJsZW5ndGgiLCJyZXBlYXQiLCJicmFuZE5hbWVzIiwiaW1hZ2UiLCJSaWdodFNlY3Rpb24iLCJyZWZyZXNoQ29sbGVnZURldGFpbHMiLCJpbnRlcm5JbnRlbnRpb24iLCJzZXRJbnRlcm5JbnRlbnRpb24iLCJhcHBseUZvckludGVybkZvcm1WYWx1ZXMiLCJzZXRBcHBseUZvckludGVybkZvcm1WYWx1ZXMiLCJoaXJlRm9ySW50ZXJuRm9ybVZhbHVlcyIsInNldEhpcmVGb3JJbnRlcm5Gb3JtVmFsdWVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaW50ZXJucyIsImludGVyZXN0cyIsInJlbmRlckFwcGx5SW50ZXJuRm9ybSIsInBsYWNlaG9sZGVyIiwidHlwZSIsImlkIiwiaGFuZGxlT25DaGFuZ2UiLCJtYXhsZW5ndGgiLCJoYW5kbGVPbkNoYW5nZUZpbGUiLCJyZW5kZXJIaXJlSW50ZXJuRm9ybSIsImZvcm1EYXRhVG9SZW5kZXIiLCJzZXRGb3JtIiwiZmlsbGVkRm9ybSIsImdldEludHJvVGV4dCIsIm9uQ2xpY2tJbnRlcm5JbnRlbnRpb24iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJOdW1iZXIiLCJnZXRTZWxlY3RlZERpdkNsYXNzTmFtZSIsInNlbGVjdGVkVG9nZ2xlQnRuIiwic2VsZWN0ZWRUb2dnbGVCdG5MZWZ0Iiwic2VsZWN0ZWRUb2dnbGVCdG5SaWdodCIsImdldEludGVybkludGVudGlvbkNsYXNzTmFtZSIsImlzU2VsZWN0ZWQiLCJ0b2dnbGVCdG4iLCJ3aGl0ZVRleHQiLCJmaWxlIiwiZmlsZXMiLCJjdk5hbWUiLCJzdWJtaXRJbnRlcm5Gb3JtIiwiT2JqZWN0Iiwia2V5cyIsInZhbHVlcyIsImZpbHRlciIsIml0ZW0iLCJhbGVydCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwia2V5IiwiYXBwZW5kIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJ2YWwiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmlnaHRTZWN0aW9uIiwiaW50ZXJuVG9nZ2xlQnRuQ29udGFpbmVyIiwiQXJyYXkiLCJpc0FycmF5IiwiaW50ZXJlc3RDb250YWluZXIiLCJpbnRlcmVzdFJvdyIsInJvd0l0ZW1IZWFkaW5nIiwiZmxleCIsIm1hcCIsImludGVyZXN0IiwiaW5kZXgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJfaWQiLCJpbnRyb190ZXh0IiwiaW5wdXRDb250YWluZXIiLCJmb3JtRWxlbWVudENvbnRhaW5lciIsImxhYmVsQm94IiwiaW5wdXRCb3giLCJhcHBseUJ0biIsInVzZVJvdXRlciIsImNvbGxlZ2VEZXRhaWxzQXBpIiwiSG9tZSIsInNldENvbGxlZ2VEZXRhaWxzIiwicm91dGVyIiwibG9jYXRpb24iLCJ3aW5kb3ciLCJob3N0bmFtZSIsImEiLCJiIiwiXyIsImZldGNoQ29sbGVnZURldGFpbHMiLCJtc2ciLCJkYXRhIiwiY29udGFpbmVyIiwibWFpbiIsImJhc2VVcmwiXSwic291cmNlUm9vdCI6IiJ9