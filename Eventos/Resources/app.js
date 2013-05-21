Titanium.UI.setBackgroundColor('#fff');
//Ti.UI.orientationModes = [Ti.UI.LANDSCAPE_LEFT];

//Crear namespace
var namespace={};

Ti.include('funciones.js');
var tabs = namespace.funciones.grupoTabs();
tabs.open();