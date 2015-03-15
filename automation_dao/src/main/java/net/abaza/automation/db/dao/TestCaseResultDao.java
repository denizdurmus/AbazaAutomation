package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.model.TestCaseResult;

public interface TestCaseResultDao {
	
	public TestCaseResult save(TestCaseResult testCaseResult) throws AutomationDaoException;
	public List<TestCaseResult> selectAll() throws AutomationDaoException;
	public List<TestCaseResult> selectByTestCaseId(long testcaseId) throws AutomationDaoException;
	public List<TestCaseResult> selectByBatchId(long batchId) throws AutomationDaoException;

}
