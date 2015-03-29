<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!-- Documento html:5 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="utf-8"> 
	<!-- Estilos CSS -->
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="css/estilo.css">
	<!-- Codigos JavaScript -->
	<script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>
	<script type="text/javascript" src="js/codigo.js"></script>
	<title>Cuadrado M�gico</title>
</head>

<body>
	<h2>Cuadrado M�gico</h2>
	<p id="mensajes">Bienvenido</p>
	<section id="cuadradomagico" class="container">
	<!-- Formulario -->
	<form class="" action="ClaseControlador" method="get">
	<!-- Entradas de texto: al realizar el evento "keyup" se llama el metodo guardarDato(),
		 el cual recibe como argumento el dato de entrada y la posicion en que se debe
		 guardar ese dato en la matriz. 
	 -->
		<input type="text" id="p00" class="" name="p00" onkeyup="guardarDato(0,0,p00)" required></imput>
		<input type="text" id="p01" class="" name="p01" onkeyup="guardarDato(0,1,p01)" required></imput>
		<input type="text" id="p02" class="" name="p02" onkeyup="guardarDato(0,2,p02)" required></imput>
		<br>
		<input type="text" id="p10" class="" name="p10" onkeyup="guardarDato(1,0,p10)" required></imput>
		<input type="text" id="p11" class="" name="p11" onkeyup="guardarDato(1,1,p11)" required></imput>
		<input type="text" id="p12" class="" name="p12" onkeyup="guardarDato(1,2,p12)" required></imput>

		<br>
		<input type="text" id="p20" class="" name="p20" onkeyup="guardarDato(2,0,p20)" required></imput>
		<input type="text" id="p21" class="" name="p21" onkeyup="guardarDato(2,1,p21)" required></imput>
		<input type="text" id="p22" class="" name="p22" onkeyup="guardarDato(2,2,p22)" required></imput>
		<br>
		<!-- Boton del formulario -->
		<button id="botoncomp" type="submit" value="Comprobar" class="btn btn-info">Comprobar</button>
		<br>
	</form>
	</section>
</body>
</html>