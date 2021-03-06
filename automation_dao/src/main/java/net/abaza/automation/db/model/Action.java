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
@Table(name = "t_action")
public class Action {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "SELECTORVALUE", nullable = false)
	private String selectorValue;
	
	@Column(name = "VALUE", nullable = false)
	private String value;	
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "ACTIONTYPE", nullable = false)
	private ActionType actionType;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "SELECTORTYPE", nullable = false)
	private SelectorType selectorType;
	
	@Column(name = "TESTCASESTEPID", nullable = false)
	private long testCaseStepId;
	
	@Column(name = "RUNORDER", nullable = false)
	private int runOrder;

	public Long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getSelectorValue() {
		return selectorValue;
	}

	public void setSelectorValue(String selectorValue) {
		this.selectorValue = selectorValue;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public ActionType getActionType() {
		return actionType;
	}

	public void setActionType(ActionType actionType) {
		this.actionType = actionType;
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

	public Integer getRunOrder() {
		return runOrder;
	}

	public void setRunOrder(int order) {
		this.runOrder = order;
	}
}
