package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.model.OutputType;

public interface OutputTypeDao {
	
	public OutputType save(OutputType outputType);
	public List<OutputType> selectAll();

}
