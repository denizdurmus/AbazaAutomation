package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.model.Output;

public interface OutputDao {
	
	public Output save(Output output) throws AutomationDaoException;
	public List<Output> selectAll() throws AutomationDaoException;
	public List<Output> selectByTestCaseStepId(long testcaseId) throws AutomationDaoException;

}
