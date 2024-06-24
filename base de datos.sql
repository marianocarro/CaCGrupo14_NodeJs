CREATE DATABASE TECNIK;
use tecnik;
CREATE TABLE Aplicaciones (
    AplicacionID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion TEXT,
    Precio int NOT NULL,
    FechaLanzamiento DATE
);    
CREATE TABLE Desarrolladores (
    DesarrolladorID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100)  NOT NULL,
    Pais VARCHAR(50),
    telefono int,
    FechaRegistro DATE NOT NULL
);
CREATE TABLE Categorias (
	CategoriaID INT PRIMARY KEY AUTO_INCREMENT,
	Nombre VARCHAR(50) NOT NULL,
	Descripcion TEXT
);
CREATE TABLE Aplicacion_Desarrollador (
    AplicacionID INT NOT NULL,
    DesarrolladorID INT NOT NULL,
    FOREIGN KEY (AplicacionID) REFERENCES Aplicaciones(AplicacionID),
    FOREIGN KEY (DesarrolladorID) REFERENCES Desarrolladores(DesarrolladorID),
    PRIMARY KEY (AplicacionID, DesarrolladorID)
);
CREATE TABLE Aplicacion_Categoria (
    AplicacionID INT NOT NULL,
    CategoriaID INT NOT NULL,
    FOREIGN KEY (AplicacionID) REFERENCES Aplicaciones(AplicacionID),
    FOREIGN KEY (CategoriaID) REFERENCES Categorias(CategoriaID),
    PRIMARY KEY (AplicacionID, CategoriaID)
);
    create database marcela;