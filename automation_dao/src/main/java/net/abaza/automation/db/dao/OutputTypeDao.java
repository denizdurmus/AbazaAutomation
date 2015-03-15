package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.model.OutputType;

public interface OutputTypeDao {
	
	public OutputType save(OutputType outputType) throws AutomationDaoException;
	public List<OutputType> selectAll() throws AutomationDaoException;

}
