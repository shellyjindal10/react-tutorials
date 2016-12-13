window.React = require('react');
var ProductData = require('./Product-Data');
var CartAPI = require('./utils/CartApi');
var FluxCartApp = require('./components/FluxCartApp.react');

ProductData.init();

CartAPI.getProductData();

React.render(<FluxCartApp />, document.getElementById('flux-cart'));
