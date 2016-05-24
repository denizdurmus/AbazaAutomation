package net.abaza.automation.db.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "t_testcasestep")
public class TestCaseStep {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "DEFINITION", nullable = false)
	private String definiton;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "TESTCASEID", nullable = false)
	private TestCase testcase;
	
	@Column(name = "RUNORDER", nullable = false)
	private int runOrder;
	
	@Column(name = "STATUS", nullable = false)
	private char status;	

	public Long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public TestCase getTestcase() {
		return testcase;
	}

	public void setTestcase(TestCase testcase) {
		this.testcase = testcase;
	}

	public int getRunOrder() {
		return runOrder;
	}

	public void setRunOrder(int runOrder) {
		this.runOrder = runOrder;
	}

	public char getStatus() {
		return status;
	}

	public void setStatus(char status) {
		this.status = status;
	}

	public String getDefiniton() {
		return definiton;
	}

	public void setDefiniton(String definiton) {
		this.definiton = definiton;
	}
	
}
