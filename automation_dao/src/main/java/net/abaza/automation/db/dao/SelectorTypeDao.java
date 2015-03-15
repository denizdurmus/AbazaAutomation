package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.model.SelectorType;

public interface SelectorTypeDao {
	
	public SelectorType save(SelectorType selectorType) throws AutomationDaoException;
	public List<SelectorType> selectAll() throws AutomationDaoException;

}
