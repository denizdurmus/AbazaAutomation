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
@Table(name = "t_output")
public class Output {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "VALUE", nullable = false)
	private String value;
	
	@Column(name = "SELECTORVALUE", nullable = false)
	private String selectorValue;	
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "OUTPUTTYPE", nullable = false)
	private OutputType outputType;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "SELECTORTYPE", nullable = false)
	private SelectorType selectorType;
	
	@Column(name = "TESTCASESTEPID", nullable = false)
	private long testCaseStepId;

	public Long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getSelectorValue() {
		return selectorValue;
	}

	public void setSelectorValue(String selectorValue) {
		this.selectorValue = selectorValue;
	}

	public OutputType getOutputType() {
		return outputType;
	}

	public void setOutputType(OutputType outputType) {
		this.outputType = outputType;
	}

	public SelectorType getSelectorType() {
		return selectorType;
	}

	public void setSelectorType(SelectorType selectorType) {
		this.selectorType = selectorType;
	}

	public long getTestCaseStepId() {
		return testCaseStepId;
	}

	public void setTestCaseStepId(long testCaseStepId) {
		this.testCaseStepId = testCaseStepId;
	}
	
}
