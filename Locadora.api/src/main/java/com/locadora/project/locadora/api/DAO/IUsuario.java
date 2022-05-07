package com.locadora.project.locadora.api.DAO;

import org.springframework.data.repository.CrudRepository;

import com.locadora.project.locadora.api.model.Usuario;
public interface IUsuario extends CrudRepository <Usuario, Integer>{
	

}
