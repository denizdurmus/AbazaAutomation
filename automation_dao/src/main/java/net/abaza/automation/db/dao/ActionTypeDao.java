package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.model.ActionType;

public interface ActionTypeDao {
	
	public ActionType save(ActionType actionType) throws AutomationDaoException;
	public List<ActionType> selectAll() throws AutomationDaoException;
	

}
