package com.locadora.project.locadora.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
// NOTAÇÃO DE ENTIDADE
@Entity
// DIRECIONANDO A TABELA NO BANCO DE DADOS
@Table(name="usuario_db")

public class Usuario {
	//GERANDO ID AUTOMATICAMENTE 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_")
	private Integer id;
	//INSERINDO NA COLUNA EMAIL
	@Column(name="email_", length=100, nullable = true)
	private String email;
	// INSERINDO NA COLUNA SENHA
	@Column(name="senha_", columnDefinition = "TEXT", nullable = true)
	private String senha;
	
	// METODOS GETTERS AND SETTERS
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	
}
