package net.abaza.automation.db.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_actiontype")
public class ActionType {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "NAME", nullable = false)
	private String name;
	
	@Column(name = "HAS_INPUT", nullable = false)
	private char hasInput;
	
	@Column(name = "HAS_ELEMENT", nullable = false)
	private char hasElement;

	public Long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public char getHasInput() {
		return hasInput;
	}

	public void setHasInput(char hasInput) {
		this.hasInput = hasInput;
	}

	public char getHasElement() {
		return hasElement;
	}

	public void setHasElement(char hasElement) {
		this.hasElement = hasElement;
	}
	
	
	
}
