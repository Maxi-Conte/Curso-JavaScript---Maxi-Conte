
let marcasDeAutos = {


  Toyota: [
    { marca: "Toyota" },
    { modelo: "Corolla", precio: 12000, año: 2017 },
    { modelo: "Cross", precio: 20000, año: 2021 },
    { modelo: "SW4", precio: 40000, año: 2020 },
    { modelo: "RAV4", precio: 25000, año: 2008 },
    { modelo: "Etios", precio: 32000, año: 2018 },
    { modelo: "Yaris", precio: 10000, año: 2017 },
    { modelo: "Land Cruiser", precio: 37000, año: 2012 },
  ],
  Honda: [
    { marca: "Honda" },
    { modelo: "Civic", precio: 24000, año: 2018 },
    { modelo: "Accord", precio: 12000, año: 2011 },
    { modelo: "CRV", precio: 20000, año: 2009 },
    { modelo: "City", precio: 7000, año: 2010 },
    { modelo: "HR-V", precio: 19000, año: 2017 },
    { modelo: "Prelude", precio: 14000, año: 1982 },
    { modelo: "Fit", precio: 10000, año: 2007 },
  ],
  Ford: [
    { marca: "Ford" },
    { modelo: "Focus", precio: 15000, año: 2018 },
    { modelo: "Fiesta", precio: 10000, año: 2015 },
    { modelo: "EcoSport", precio: 6000, año: 2009 },
    { modelo: "Mondeo", precio: 17000, año: 2016 },
    { modelo: "Bronco", precio: 36000, año: 2021 },
    { modelo: "Falcon Sprint", precio: 12000, año: 1973 },
    { modelo: "Mustang", precio: 45000, año: 2001 },
  ],

  Chevrolet: [
    { marca: "Chevrolet" },
    { modelo: "Cruze", precio: 17500, año: 2020 },
    { modelo: "400", precio: 8000, año: 1973 },
    { modelo: "Celta", precio: 7500, año: 2012 },
    { modelo: "Onix LTZ", precio: 14000, año: 2016 },
    { modelo: "Captiva", precio: 11000, año: 2014 },
    { modelo: "Corsa", precio: 8500, año: 2009 },
    { modelo: "Camaro", precio: 67000, año: 2014 },
  ],
  Hyundai: [
    { marca: "Hyundai" },
    { modelo: "Accent", precio: 2000, año: 2001 },
    { modelo: "Creta", precio: 33000, año: 2023 },
    { modelo: "H1", precio: 21000, año: 2011 },
    { modelo: "Tucson", precio: 28000, año: 2018 },
    { modelo: "Santa Fe", precio: 10000, año: 2011 },
    { modelo: "Terracan", precio: 9500, año: 2005 },
    { modelo: "Veloster", precio: 15000, año: 2013 },
  ],
  Renault: [
    { marca: "Renault" },
    { modelo: "12", precio: 1800, año: 1980 },
    { modelo: "Twingo", precio: 2800, año: 2001 },
    { modelo: "Captur", precio: 22000, año: 2016 },
    { modelo: "Clio", precio: 12700, año: 2015 },
    { modelo: "Logan", precio: 11500, año: 2014 },
    { modelo: "Megane", precio: 10000, año: 2009 },
    { modelo: "Torino", precio: 4500, año: 1973 },
  ],
  Peugeot: [
    { marca: "Peugeot" },
    { modelo: "205", precio: 3400, año: 1997 },
    { modelo: "206", precio: 8200, año: 2007 },
    { modelo: "207", precio: 11000, año: 2013 },
    { modelo: "208", precio: 18500, año: 2016 },
    { modelo: "306", precio: 7900, año: 1996 },
    { modelo: "5008", precio: 45000, año: 2023 },
    { modelo: "RCZ", precio: 25000, año: 2013 },
  ],
  Fiat: [
    { marca: "Fiat" },
    { modelo: "147", precio: 2000, año: 1993 },
    { modelo: "Bravo", precio: 8500, año: 2012 },
    { modelo: "Cronos", precio: 14000, año: 2021 },
    { modelo: "Duna", precio: 3500, año: 1990 },
    { modelo: "Mobi", precio: 12000, año: 2017 },
    { modelo: "Palio", precio: 9400, año: 2009 },
    { modelo: "600", precio: 5900, año: 1974 },
  ],
  MercedesBenz: [ 
    { marca: "Mercedes Benz"},
    { modelo: "230", precio: 10500 , año: 1980},
    { modelo: "280", precio: 8500 , año: 1980},
    { modelo: "300", precio: 5000 , año: 1991},
    { modelo: "Clase B", precio: 14500 , año: 2013},
    { modelo: "Clase C", precio: 44500 , año: 2017},
    { modelo: "GLK", precio: 29000 , año: 2014},
    { modelo: "GLC", precio: 50000 , año: 2017},
  ],
  LandRover: [
    { marca: "Land Rover" },
    { modelo: "Defender", precio: 22000, año: 1996 },
    { modelo: "Range Rover", precio: 38000, año: 2017 },
    { modelo: "Discovery", precio: 20000, año: 2006 },
    { modelo: "Freelander", precio: 18000, año: 2013 },
  ],
  Nissan: [
    { marca: "Nissan" },
    { modelo: "Kicks", precio: 17000, año: 2018 },
    { modelo: "March", precio: 13000, año: 2013 },
    { modelo: "Pathfinder", precio: 9800, año: 1998 },
    { modelo: "Sentra", precio: 22000, año: 2023 },
    { modelo: "Terrano", precio: 8500, año: 1998 },
    { modelo: "Versa", precio: 14000, año: 2021 },
    { modelo: "X-Terra", precio: 18500, año: 2008 },
  ],
  Volkswagen: [
    { marca: "Volkswagen" },
    { modelo: "Bora", precio: 10000, año: 2010 },
    { modelo: "Escarabajo", precio: 16000, año: 1960 },
    { modelo: "Gol", precio: 7000, año: 2012 },
    { modelo: "Vento", precio: 12500, año: 2011 },
    { modelo: "Passat", precio: 17000, año: 2012 },
    { modelo: "Golf", precio: 14500, año: 2015 },
    { modelo: "Scirocco", precio: 16500, año: 2012 },
  ],
  Citroen: [
    { marca: "Citroen" },
    { modelo: "3CV", precio: 3000, año: 1985 },
    { modelo: "C1", precio: 5000, año: 2012 },
    { modelo: "C3", precio: 11000, año: 2015 },
    { modelo: "C4 Cactus", precio: 16500, año: 2022 },
    { modelo: "C-Elysee", precio: 8500, año: 2017 },
    { modelo: "AMI 8", precio: 2500, año: 1973 },
    { modelo: "Mehari", precio: 4500, año: 1972 },
  ],
  Audi: [
    { marca: "Audi" },
    { modelo: "A1", precio: 13000, año: 2011 },
    { modelo: "A3", precio: 27000, año: 2016 },
    { modelo: "A5", precio: 24000, año: 2012 },
    { modelo: "Q2", precio: 33900, año: 2019 },
    { modelo: "Q3", precio: 19000, año: 2013 },
    { modelo: "S3", precio: 23500, año: 2008 },
    { modelo: "TT", precio: 30000, año: 2011 },
  ],
  BMW: [
    { marca: "BMW" },
    { modelo: "M2", precio: 100000, año: 2018 },
    { modelo: "M3", precio: 55000, año: 2008 },
    { modelo: "Serie 3", precio: 48000, año: 2018 },
    { modelo: "Serie 4", precio: 59000, año: 2018 },
    { modelo: "Serie 5", precio: 48000, año: 2010 },
    { modelo: "X1", precio: 55000, año: 2019 },
    { modelo: "X6", precio: 35000, año: 2010 },
  ],

};


function mostrarModelosDeMarca(marca) {
  if (marcasDeAutos.hasOwnProperty(marca)) {
    console.table(marcasDeAutos[marca]);
  } else {
    console.log(`La marca ${marca} no está en la lista.`);
  }
}

function calcularSeguro(precio) {
  const porcentajeSeguro = 6.15;
  return precio * porcentajeSeguro;
}

function calcularPatente(precio) {
  const porcentajePatente = 3.05;
  return precio * porcentajePatente;
}

for (const marca in marcasDeAutos) {
  const modelos = marcasDeAutos[marca];

  for (let i = 1; i < modelos.length; i++) {
    const modelo = modelos[i];
    const precio = modelo.precio;

    const seguro = calcularSeguro(precio);
    const patente = calcularPatente(precio);

    modelo.seguro = seguro;
    modelo.patente = patente;
  }
}

/*const marcaSeleccionar = document.getElementById('marcaSeleccionar');
const seccionesMarcas = document.querySelectorAll('.seccion-modelos section');

marcaSeleccionar.addEventListener('change', function() {
    const marcaSeleccionada = marcaSeleccionar.value;

    seccionesMarcas.forEach(seccion => {
        seccion.style.display = 'none';
    });

    if (marcaSeleccionada) {
        const seccionMostrar = document.getElementById(`seccion${marcaSeleccionada}`);
        if (seccionMostrar) {
            seccionMostrar.style.display = 'block';
        }
    }
});*/



/*const marcaSeleccionar = document.getElementById('marcaSeleccionar');
const seccionesMarcas = document.querySelectorAll('.seccion-modelos section');

let marcaPreviamenteSeleccionada = '';

marcaSeleccionar.addEventListener('change', function() {
    const marcaSeleccionada = marcaSeleccionar.value;

    // Ocultar la sección de la marca previamente seleccionada
    if (marcaPreviamenteSeleccionada) {
        const seccionOcultar = document.getElementById(`seccion${marcaPreviamenteSeleccionada}`);
        if (seccionOcultar) {
            seccionOcultar.style.display = 'none';
        }
    }

    // Mostrar la sección de la marca seleccionada
    if (marcaSeleccionada) {
        const seccionMostrar = document.getElementById(`seccion${marcaSeleccionada}`);
        if (seccionMostrar) {
            seccionMostrar.style.display = 'block';
        }
    }

    // Actualizar la marca previamente seleccionada
    marcaPreviamenteSeleccionada = marcaSeleccionada;
});*/



const marcaSeleccionar = document.getElementById('marcaSeleccionar');
const seccionesMarcas = document.querySelectorAll('.seccion-modelos3 section');

marcaSeleccionar.addEventListener('change', function() {
    const marcaSeleccionada = marcaSeleccionar.value;

    // Ocultar todas las secciones de marca
    seccionesMarcas.forEach(seccion => {
        seccion.style.display = 'none';
    });

    // Mostrar solo la sección de la marca seleccionada
    if (marcaSeleccionada) {
        const seccionMostrar = document.getElementById(`seccion${marcaSeleccionada}`);
        if (seccionMostrar) {
            seccionMostrar.style.display = 'block';
        }
    }
});










//Local Storage

document.getElementById('guardarDatos').addEventListener('click', function() {
  const detallesVehiculo = document.getElementById('detallesVehiculo').innerHTML;
  localStorage.setItem('detallesVehiculo', detallesVehiculo);
  alert('Datos guardados en Local Storage');
});

document.getElementById('recuperarDatos').addEventListener('click', function() {
  const detallesVehiculoGuardados = localStorage.getItem('detallesVehiculo');
  if (detallesVehiculoGuardados) {
      document.getElementById('detallesVehiculo').innerHTML = detallesVehiculoGuardados;
      alert('Datos recuperados de Local Storage');
  } else {
      alert('No hay datos guardados en Local Storage');
  }
});

function mostrarModelosDeMarca(marca) {
  if (marcasDeAutos.hasOwnProperty(marca)) {
    console.table(marcasDeAutos[marca]);
  } else {
    console.log(`La marca ${marca} no está en la lista.`);
  }
}

function agregarDetallesVehiculo(detalles) {
  const detallesVehiculo = document.getElementById('detallesVehiculo');
  detallesVehiculo.innerHTML = detalles; 
}
document.getElementById('guardarDatos').addEventListener('click', function() {
  const detallesVehiculo = {
    marca: marcaSeleccionar.value,
    detalles: document.getElementById('detallesVehiculo').innerHTML,
  };
  localStorage.setItem('detallesVehiculo', JSON.stringify(detallesVehiculo));
  alert('Datos guardados en Local Storage');
});

document.getElementById('recuperarDatos').addEventListener('click', function() {
  const detallesVehiculoGuardados = localStorage.getItem('detallesVehiculo');
  if (detallesVehiculoGuardados) {
    const detalles = JSON.parse(detallesVehiculoGuardados);
    agregarDetallesVehiculo(detalles.detalles);
    marcaSeleccionar.value = detalles.marca;
    alert('Datos recuperados de Local Storage');
  } else {
    alert('No hay datos guardados en Local Storage');
  }
});


mostrarModelosDeMarca();


mostrarModelosDeMarca("Toyota");
mostrarModelosDeMarca("Honda");
mostrarModelosDeMarca("Ford");
mostrarModelosDeMarca("Chevrolet");
mostrarModelosDeMarca("Hyundai");
mostrarModelosDeMarca("Renault");
mostrarModelosDeMarca("Peugeot");
mostrarModelosDeMarca("Fiat");
mostrarModelosDeMarca("MercedesBenz");
mostrarModelosDeMarca("LandRover");
mostrarModelosDeMarca("Nissan");
mostrarModelosDeMarca("Volkswagen");
mostrarModelosDeMarca("Citroen");
mostrarModelosDeMarca("Audi");
mostrarModelosDeMarca("BMW");
