package com.locadora.project.locadora.api.repository;


 import org.springframework.data.jpa.repository.JpaRepository;
// IMPORTANDO O CRUD REPOSITORIO


import com.locadora.project.locadora.api.model.Usuario;
public interface IUsuario extends JpaRepository<Usuario, Integer>{
	

}
