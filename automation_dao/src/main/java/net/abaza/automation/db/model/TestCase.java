package net.abaza.automation.db.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_testcase")
public class TestCase {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "PROJECTID", nullable = false)
	private Integer projectId;
	
	@Column(name = "NAME", nullable = false)
	private String name;
	
	@Column(name = "RUNORDER", nullable = false)
	private int runOrder;
	
	@Column(name = "STATUS", nullable = false)
	private char status;
		

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getProjectId() {
		return projectId;
	}

	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public char getStatus() {
		return status;
	}

	public void setStatus(char status) {
		this.status = status;
	}

	public Integer getRunOrder() {
		return runOrder;
	}

	public void setRunOrder(Integer order) {
		this.runOrder = order;
	}
}
