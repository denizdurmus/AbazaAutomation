package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.model.TestCase;

public interface TestCaseDao {
	
	public TestCase save(TestCase testCase) throws AutomationDaoException;
	public List<TestCase> selectAll() throws AutomationDaoException;

}
