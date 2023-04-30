-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 30-04-2023 a las 02:28:27
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `odontologia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agendar_cita`
--

CREATE TABLE `agendar_cita` (
  `id_cita` int(8) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `cedula` int(11) NOT NULL,
  `telefono` int(11) NOT NULL,
  `nombre_esp` int(11) NOT NULL,
  `fecha` int(11) NOT NULL,
  `tipo_fecha` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas_programadas`
--

CREATE TABLE `citas_programadas` (
  `Id_cita` int(4) NOT NULL,
  `tipo_cita` varchar(100) NOT NULL,
  `fecha` date NOT NULL,
  `hora` date NOT NULL,
  `Nombre` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialistas`
--

CREATE TABLE `especialistas` (
  `Id_esp` varchar(8) NOT NULL,
  `Nom_Esp` varchar(30) NOT NULL,
  `Especialidad` varchar(40) NOT NULL,
  `Ciudad` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_paciente`
--

CREATE TABLE `registro_paciente` (
  `id_user` int(4) NOT NULL,
  `Nombre` varchar(60) NOT NULL,
  `Telefono` int(10) NOT NULL,
  `Cedula` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agendar_cita`
--
ALTER TABLE `agendar_cita`
  ADD PRIMARY KEY (`id_cita`);

--
-- Indices de la tabla `citas_programadas`
--
ALTER TABLE `citas_programadas`
  ADD PRIMARY KEY (`Id_cita`);

--
-- Indices de la tabla `especialistas`
--
ALTER TABLE `especialistas`
  ADD PRIMARY KEY (`Id_esp`);

--
-- Indices de la tabla `registro_paciente`
--
ALTER TABLE `registro_paciente`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `registro_paciente`
--
ALTER TABLE `registro_paciente`
  MODIFY `id_user` int(4) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
