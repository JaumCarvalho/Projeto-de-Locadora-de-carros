package com.locadora.project.locadora.api.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import com.locadora.project.locadora.api.model.Usuario;

import com.locadora.project.locadora.api.repository.IUsuario;


@Service
public class UsuarioService {
	private IUsuario repository;
	private PasswordEncoder passwordEncoder;
	
	
	public UsuarioService (IUsuario repository) {
		this.repository = repository;
		this.passwordEncoder=new BCryptPasswordEncoder();
	}
	public List<Usuario> listarUsuario(){
		List<Usuario> lista = repository.findAll();
		return lista;
	}
	public Usuario criarUsuario(Usuario usuario) {
		String encoder = this.passwordEncoder.encode(usuario.getSenha());
		usuario.setSenha(encoder);
		Usuario usuarioNovo = repository.save(usuario);
		return usuarioNovo;
	}
	public Usuario editarUsuario(Usuario usuario) {
		String encoder = this.passwordEncoder.encode(usuario.getSenha());
		usuario.setSenha(encoder);
		Usuario usuarioNovo = repository.save(usuario);
		return usuarioNovo;
	}
	public Boolean excluirUsuario(Integer id) {
		repository.deleteById(id);
		return true;
	}
	public Boolean validarSenha(Usuario usuario) {
		String senha = repository.getById(usuario.getId()).getSenha();
		Boolean valid = passwordEncoder.matches(usuario.getSenha(), senha);
		return valid;
	}
	
}
