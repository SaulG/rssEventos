(function(){
     namespace.funciones={};
     
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //se crea el grupo de tabs
    namespace.funciones.grupoTabs=function(){
	var tabGroup= Ti.UI.createTabGroup({
		exitOnClose:true
	    });
	    
	var eventos = namespace.funciones.eventosWindow();
	var contacto = namespace.funciones.contactoWindow();
	
	namespace.Tab1 = Titanium.UI.createTab({
		window: eventos,
		title:'Eventos',
		icon:'' 
	});
	namespace.Tab2 = Titanium.UI.createTab({
		window: contacto,
		title:'Contacto',
		icon:'' 
	});
	
	tabGroup.addTab(namespace.Tab1);
	tabGroup.addTab(namespace.Tab2);
	
	return tabGroup;
	
	};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	namespace.funciones.eventosWindow = function(){
		var win = Ti.UI.createWindow({
			backgroundColor:"#000"
		});
		var url = "http://saulgausin.doomdns.com/eventos.json"
		var client = Ti.Network.createHTTPClient({
			onload: function(e){
				var IMG_BASE = 'https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/';
				var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 12;
				datos = JSON.parse(this.responseText);
				Ti.API.info("Received text: "+datos[0].nombre);
				var tableData = [];
				var len = datos.length;
				for (var i=0; i<len; i++){
				  Ti.API.info("Datos :"+JSON.stringify(datos[i]));
				  var row = Ti.UI.createTableViewRow({
				    className:'forumEvent', // used to improve table performance
				    selectedBackgroundColor:'white',
				    rowIndex:i, // custom property, useful for determining the row during events
				    height:110
				  });
				  var imageAvatar = Ti.UI.createImageView({
				    image: datos[i].imagenes,
				    left:10, top:5,
				    width:50, height:50
				  });
				  row.add(imageAvatar);
				  
				  var labelEventName = Ti.UI.createLabel({
				    color:'#576996',
				    font:{fontFamily:'Arial', fontSize:defaultFontSize+6, fontWeight:'bold'},
				    text:datos[i].nombre,
				    left:70, top: 6,
				    width:200, height: 30
				  });
				  row.add(labelEventName);
				  
				  var labelDescription = Ti.UI.createLabel({
				    color:'#222',
				    font:{fontFamily:'Arial', fontSize:defaultFontSize+2, fontWeight:'normal'},
				    text:datos[i].descripcion,
				    left:70, top:"30%",
				    width:"70%"
				  });
				  row.add(labelDescription);
				  
				  var fechaIcon = Ti.UI.createImageView({
				    image:IMG_BASE + 'custom_tableview/eventsButton.png',
				    left:70, bottom: 2,
				    width:32, height: 32
				  });
				  row.add(fechaIcon);
				  
				  var labelFecha = Ti.UI.createLabel({
				    color:'#999',
				    font:{fontFamily:'Arial', fontSize:defaultFontSize, fontWeight:'normal'},
				    text:'en '+datos[i].fecha,
				    left:105, bottom:10,
				    width:200, height:20
				  });
				  row.add(labelFecha);
				  
				  tableData.push(row);
				}
				tableView.data = tableData;
			},
			onerror: function(e){
				Ti.API.info("Because fuck you");
				alert('No tienes acceso a internet');
			},
			timeout : 5000
		});
		
		client.open('GET', url);
		client.send();
		
		var tableView = Ti.UI.createTableView({
		  backgroundColor:'white'
		});
				
		win.add(tableView);
		return win;
	};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	namespace.funciones.contactoWindow = function(){
		var win = Ti.UI.createWindow({
			backgroundColor:"#000"
		});
		var contacto = Ti.UI.createWebView({
			url:'contacto.html'
		});
		win.add(contacto);
		return win;
	}
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
}) ();