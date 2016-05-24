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
	
	@Column(name = "DEFINITION", nullable = false)
	private String definiton;
	
	/*
	@OneToMany(cascade = CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinTable(name = "T_ACTION", joinColumns = { @JoinColumn(name = "ID") }, 
		inverseJoinColumns = { @JoinColumn(name = "TESTCASEID") })
	private Set<Action> actionList;	
	
	@OneToMany(cascade = CascadeType.ALL, fetch=FetchType.EAGER)
	@Fetch(FetchMode.JOIN)
	@JoinTable(name = "T_OUTPUT", joinColumns = { @JoinColumn(name = "ID") }, 
		inverseJoinColumns = { @JoinColumn(name = "TESTCASEID") })
	private Set<Output> outputList;
	*/

	public Long getId() {
		return id;
	}

	public void setId(long id) {
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

	public void setRunOrder(int order) {
		this.runOrder = order;
	}
	
	public String getDefiniton() {
		return definiton;
	}

	public void setDefiniton(String definiton) {
		this.definiton = definiton;
	}
	
	/*
	public Set<Action> getActionList() {
		return actionList;
	}

	public void setActionList(Set<Action> actionList) {
		this.actionList = actionList;
	}
	
	
	public Set<Output> getOutputList() {
		return outputList;
	}

	public void setOutputList(Set<Output> outputList) {
		this.outputList = outputList;
	}
	*/		
}
