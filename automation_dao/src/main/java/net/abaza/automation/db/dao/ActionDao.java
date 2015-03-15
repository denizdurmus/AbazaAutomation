package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.model.Action;

public interface ActionDao {
	
	public Action save(Action action) throws AutomationDaoException;
	public List<Action> selectAll() throws AutomationDaoException;
	public List<Action> selectByTestCaseId(long testcaseId) throws AutomationDaoException;

}
